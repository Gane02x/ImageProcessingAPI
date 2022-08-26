import { Request, Response } from "express"
import Image from "../utils/Image"
import fs from "fs"
import path from "path"

export class ImageCtrl {
  async resizeImage(req: Request, res: Response) {
    let error = ""
    const imgName = req.query.filename as unknown as string
    const width = req.query.width as unknown as string
    const height = req.query.height as unknown as string

    const outdir = `./images/new/${imgName}-${width}-${height}.jpg`
    const resizedImg = path.resolve(outdir)
    
    if ( Number(width) <= 0 || Number(height) <= 0 ) {
      error = "Invalid paramaters. Width and/or height have to be a positive Integer"
      res.status(400).send(error)
    } else {
      if (!fs.existsSync(resizedImg)) {
         const response = await Image.edit(outdir, imgName, width, height)
         if (!response) {
           //eslint-disable-next-line no-console, no-undef
           console.log("No Image found!")
           res.status(404).send("Image not found!")
         }
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
}
export default new ImageCtrl()
