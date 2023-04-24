import { validateIdportenToken } from '@navikt/next-auth-wonderwall'

export default async function handler(req, res) {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
        try {
            const validToken = await validateIdportenToken(bearerToken);
            if (validToken) {
                res.status(200).send("OK");
            } else {
                res.status(401).send("Unauthorized");
            }
        } catch (e) {
            res.status(500).send("Could not authorize");
        }
    } else {
        res.status(401).send("No token found");
    }
}
