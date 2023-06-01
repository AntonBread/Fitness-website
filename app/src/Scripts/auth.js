import { APIBase } from "../Components/data"

export default async function loginCheck() {
    const email = getEmailCookie()
    if (email === undefined) {
        return false
    }

    const url = `${APIBase}/email/`
    const parcel = new FormData()
    parcel.append("email", email)

    try {
        const response = await fetch(url, {
            method: "POST",
            body: parcel
        })

        if (response.ok) {
            const result = await response.json()
            console.log(result)
            return result.exists
        }
        else {
            console.log("Login check request failed")
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
}

export function getEmailCookie() {
    return document.cookie.split('=')[1]
}