// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // read users from a local JSON file
  let users = require('/data/users.json')
  if (req.query.count) {
    users = users.slice(0, parseInt(req.query.count))
  }

  res.status(200).json(users)

}
