import { Router } from "express"
import ImageCtrl from "../controllers/ImageCtrl"

const ImageRouter = Router()

ImageRouter.get("/", ImageCtrl.resizeImage)

export default ImageRouter
