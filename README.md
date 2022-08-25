# IMAGE PROCESSING API PROJECT

This project uses the external "sharp"-library to resize pictures

## how to launch the project

1. run `npm install`
2. run `npm start`
   - type http://localhost:3000/api/images?filename=FILENAME&width=YOURWIDTH&height=YOURHEIGHT
   - type in one of the ImageFilenames from the /images directory and choose your width and height to resize the picture
   - type in your chosen image with its name at FILENAME, your chosen width at YOURWIDHT and your chosen height at YOURHEIGHT
   
   - This working example should return a resized image of an Mustang http://localhost:3000/api/images?filename=GT500&width=1200&height=720

- you can add your own jpg-images to the folder 'images' to resize them
