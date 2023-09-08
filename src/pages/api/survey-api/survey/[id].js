export default function handler(req, res) {
    if (req.method === "GET") {
        const data = {
            id: "da875a3e-81a3-4d88-98e8-0cdb3dcf6001",
            hasMultipleAds: false,
            metadata: {
                hasApplicationSuperraskSoknad: "true",
                hasApplicationEmail: "false",
                hasApplicationUrl: "false",
            },
        };
        try {
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ error: "failed to load data" });
        }
    } else {
        res.status(200).send();
    }
}
