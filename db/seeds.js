var mongoose = require('mongoose');
var Schema = require("./schema.js");
console.log("seeds starting");

var URL = Schema.shortURLModel;

URL.remove({}, function(err){
  console.log("remove URL collection");
  if(err) {
    console.log(err);
  } else {
    console.log("No Error - URL collection cleared")
  }
});




var url1 = new URL ({
  urlKey: "ej4ktrt2e",
  longURL: "http://www.vox.com/2016/7/25/12256510/republican-party-trump-avik-roy"
})

var url2 = new URL ({
  urlKey: "poijhgfry",
  longURL: "http://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html"
})

var url3 = new URL ({
  urlKey: "3ertg567",
  longURL: "http://www.kettlercapitalsiceplex.com/"
})


urlArray = [url1, url2, url3];
for (i=0; i < urlArray.length; i++) {
  x = urlArray[i];
  console.log(x);
  x.save(function(err, student){
    if (err){
      console.log(err)
    } else {
      console.log(x);
    }
  })
}
