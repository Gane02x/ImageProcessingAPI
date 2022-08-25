import { Request, Response } from "express"
import Image from "../utils/Image"
import fs from "fs"
import path from "path"

export class ImageCtrl {
  async resizeImage(req: Request, res: Response) {
    const imgName = req.query.filename as unknown as string
    const width = req.query.width as unknown as string
    const height = req.query.height as unknown as string

    const outdir = `./images/res_${width}x${height}-${imgName}.jpg`
    const resizedImg = path.resolve(outdir)
    if (!fs.existsSync(resizedImg)) {
       await Image.edit(outdir, imgName, width, height)
       //eslint-disable-next-line no-console, no-undef
       console.log(
       `Resizing ${imgName} with given width:${width} and height:${height}`
    )
    }
    if (!imgName || !width || !height) {
      res
        .status(400)
        .send(
          "Request query is missing - please make sure you are using the correct url pattern: http://localhost:3000/api/images?filename=FILENAME&width=YOURWIDTH&height=YOURHEIGHT"
        )
    }
    res.status(200).send(resizedImg)
  }
}
export default new ImageCtrl()
