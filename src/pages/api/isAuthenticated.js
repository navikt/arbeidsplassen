import {tokenIsValid} from "@/src/middleware/tokenX";

export default async function handler(req, res) {
    if (req.headers.authorization) {
        const accessToken = req.headers.authorization.split(" ")[1];
        const validToken = await tokenIsValid(accessToken);
        if (validToken) {
            res.status(200).send("OK");
        } else {
            res.status(401).send("Unauthorized");
        }
    } else {
        res.status(401).send("Error: could not authorize");
    }
}
