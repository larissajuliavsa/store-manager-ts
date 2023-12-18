import * as express from "express"
import { Request, Response } from "express"

const app = express()
const PORT = 3000

app.get("/", (req: Request, res: Response) => {
  res.send("hello world")
})

app.listen(3000, () => {
  console.log(`listening on port ${PORT}`)
})
