import { createRemoteJWKSet, jwtVerify } from 'jose';
import { Issuer } from "openid-client";

let initialized = false;
let tokenXIssuer;
let idPortenIssuer;
let tokenXClient;
let remoteJWKSet;

async function performSetup() {
    if (initialized)
        return;

    try {
        console.log("Performing setup");
        tokenXIssuer = await Issuer.discover(process.env.TOKEN_X_WELL_KNOWN_URL);
        console.log("Success: tokenXIssuer");
        idPortenIssuer = await Issuer.discover(process.env.IDPORTEN_WELL_KNOWN_URL);
        console.log("Success: idPortenIssuer");
        tokenXClient = new tokenXIssuer.Client(
            {
                client_id: process.env.TOKEN_X_CLIENT_ID,
                token_endpoint_auth_method: 'private_key_jwt',
                token_endpoint_auth_signing_alg: "RS256"
            },
            {
                keys: [JSON.parse(process.env.TOKEN_X_PRIVATE_JWK)],
            }
        );
        console.log("Success: tokenXClient");
        const jwksUrl = new URL(process.env.IDPORTEN_JWKS_URI);
        remoteJWKSet = createRemoteJWKSet(jwksUrl);
        console.log("Success: jwksUrl");

        // success
        initialized = true;
    } catch (e) {
        throw new Error(`Could not initialize TokenX: ${e}`);
        initialized = false;
    }
}

async function tokenIsValid(token) {
    try {
        const verification = await jwtVerify(token, remoteJWKSet, {
            audience: process.env.IDPORTEN_AUDIENCE,
            issuer: idPortenIssuer.metadata.issuer,
        });

        return !!verification.payload;
    } catch (e) {
        console.error(`An error occurred during token validation: ${e.message}`);
        return false;
    }
}

async function getTokenX(token, audience) {
    let tokenX;
    const additionalClaims = {
        clientAssertionPayload: {
            aud: tokenXClient.issuer.metadata.token_endpoint,
            nbf: Math.floor(Date.now() / 1000),
        }
    }

    try {
        tokenX = await tokenXClient.grant(
            {
                grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
                client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
                subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
                audience: audience,
                subject_token: token
            },
            additionalClaims
        );
    } catch (e) {
        console.error(`Could not exchange to tokenX: ${e.message}`);
    }
    return tokenX;
}

export default async function handler(req, res) {
    console.log(`initialized: ${initialized}`)
    await performSetup();

    if (req.headers.authorization) {
        const accessToken = req.headers.authorization.split(" ")[1];
        const validToken = await tokenIsValid(accessToken);
        if (validToken) {
            res.status(200).send("OK");
        } else {
            res.status(401).send("Unauthorized");
        }
    } else {
        res.status(401).send("Could not authorize");
    }
}
