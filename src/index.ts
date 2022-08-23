import express, { Application } from "express"
import ImageRouter from "./routes/ImageRouter"
const app: Application = express()
const PORT = 3000

app.use("/api/images", ImageRouter)
// eslint-disable-next-line no-console, no-undef
app.listen(PORT, () => console.log("Server running on Port:", PORT))

export default app
