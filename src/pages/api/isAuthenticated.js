import { getToken, validateIdportenToken } from "@navikt/oasis";

export default async function handler(req, res) {
    const token = getToken(req);
    if (token) {
        try {
            const validToken = await validateIdportenToken(token);
            if (validToken.ok) {
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
