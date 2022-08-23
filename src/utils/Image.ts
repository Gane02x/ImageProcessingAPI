import sharp from "sharp"

export class Image {
  async edit(outdir: string, filename: string, width: string, height: string) {
    try {
      const newImage = await sharp(`./images/${filename}.jpg`)
        .resize(Number(width), Number(height))
        .toFile(outdir)
      return newImage
    } catch (error) {
      // eslint-disable-next-line no-console, no-undef
      console.log("Error at editing img", error)
    }
  }
}

export default new Image()
