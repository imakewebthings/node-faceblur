var cv = require('opencv')

function faceblur(buffer, callback) {
  cv.readImage(buffer, function(err, matrix) {
     matrix.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
       if (err) {
         callback(err, null)
       }
       faces.forEach(function(face) {
         var faceMatrix = matrix.roi(face.x, face.y, face.width, face.height)
         faceMatrix.gaussianBlur([420 + 1, 420 + 1])
       })
       callback(null, matrix.toBuffer())
     })
  })
}

module.exports = faceblur
