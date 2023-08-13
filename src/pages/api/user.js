// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // http://x.hellofaizan.me/api/user?user=hellofaizaan
    // read users from a local JSON file
    let users = require('/data/users.json')
    const user = req.query.user

    users = users.filter(users => users.username === user)

    if (users.length === 0) {
        return res.status(404).json({ success: false, message: "Username not found" })
    }

    if (!user) {
        return res.status(404).json({ success: false, message: "Username is necessary to mention" })
    }
    return res.status(200).json(users)

}
