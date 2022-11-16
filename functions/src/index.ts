import { region } from "firebase-functions"
import * as config from "./config"
import {
    chat_v1,
    google,
} from "googleapis"

export const bitbucketToGChat = region(config.region).https.onRequest(async (req, res): Promise<void> => {
    try {
        console.log(req.body)
        const reply: chat_v1.Schema$Message = {
            text: "Hello from Firebase!",
        }
        const auth = new google.auth.GoogleAuth({
            scopes: ["https://www.googleapis.com/auth/chat.bot"],
        })
        const authClient = await auth.getClient()
        const chat = google.chat("v1")
        await chat.spaces.messages.create({ parent: "spaces/AAAAM8DCe1U", requestBody: reply, auth: authClient })
        res.send()
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
})
