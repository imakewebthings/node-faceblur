# Faceblur

Detect and blur faces. Requires OpenCV be installed. The module returns a function that takes a Buffer and a callback. The callback supplies a new Buffer with blurred faces.

```js
var faceblur = require('faceblur')
var fs = require('fs')

fs.readFile('faces.jpg', function(err, buffer) {
  faceblur(buffer, function(err, blurredBuffer) {
    fs.writeFile('faces-blurred.jpg', blurredBuffer, function(err) {
      console.log('blurred')
    })
  })
})
```

## License

MIT.
