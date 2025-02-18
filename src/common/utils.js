import { v4 as uuidv4 } from "uuid";

const SESSION_TAG = "session";
const SESSION_MAX_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function getSessionId() {
    let session = {};
    try {
        const sessionString = sessionStorage.getItem(SESSION_TAG);
        if (sessionString) {
            session = JSON.parse(sessionString);
        }

        const now = Date.now();
        if (!session || now - session.timestamp > SESSION_MAX_DURATION_MS) {
            session = {
                id: uuidv4(),
                timestamp: now,
            };
            sessionStorage.setItem(SESSION_TAG, JSON.stringify(session));
        }
        return session.id;
    } catch (e) {
        // It's possible user has disabled persistent data
        return "undefined";
    }
}
