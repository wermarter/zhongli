export const handlePollUpdate = (req, res) => {
  const { PSID, pollID, choice } = req.body
  console.log(`User ${PSID} | Poll ${pollID} | Choice "${choice}"`)
  res.sendStatus(200)
}
