import { validateIdportenToken } from '@navikt/next-auth-wonderwall'

export default async function handler(req, res) {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
        const validToken = await validateIdportenToken(bearerToken);
        if (validToken) {
            res.status(200).send("OK");
        } else {
            res.status(401).send("Unauthorized");
        }
    } else {
        res.status(401).send("Could not authorize");
    }
}
