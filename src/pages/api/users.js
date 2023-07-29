// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // read users from a local JSON file
  const users = require('/data/users.json')
  res.status(200).json(users)

}
