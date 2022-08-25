/* eslint-disable no-undef */

import { Server } from "http"
import request from "supertest"
import app from "../src/index"
import Image from "../src/utils/Image"

describe("Checking if the API handles each endpoint correctly", () => {
  const server: Server = app.listen()
  test("ImageCtrl handles the Resizing of images via URL", async () => {
    const res = await request(server).get(
      "/api/images?filename=GT500&width=1200&height=720"
    )
    expect(res.status).toEqual(200)
  })

  test("ImageCtrl displays an error if query if missing", async () => {
    const res = await request(server).get(
      "/api/images?filename=GT500?&width=1200&height"
    )
    expect(res.status).toEqual(400)
  })
  server.close()
})

describe("Image method .edit resizes img", () => {
  test(".edit resizes the Image with Sharp and returns the resized Image", async () => {
    const imgName = "M8"
    const width = "1200"
    const height = "720"
    const outdir = `./images/new/${imgName}-${width}-${height}.jpg`

    const res = await Image.edit(outdir, imgName, width, height)
    expect(res).toMatchSnapshot()
  })
})
