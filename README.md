# IMAGE PROCESSING API PROJECT

This project uses the external "sharp"-library to resize pictures

## how to launch the project

1. run `npm install`
2. run `npm start`
   - type http://localhost:3000/api/images?filename=FILENAME&width=YOURWIDTH&height=YOURHEIGHT
   - type in one of the ImageFilenames from the /images directory and choose your width and height to resize the picture
   - type in your chosen image with its name at FILENAME, your chosen width at YOURWIDHT and your chosen height at YOURHEIGHT

- you can add your own jpg-images to the folder 'images' to resize them

## scripts

- `npm install` => installing all dependencies to make the application work
- `npm start` => start the local server on http://localhost:3000
- `npm run build` => transpile typescript to javascript
- `npm run test` => run the tests
