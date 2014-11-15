var mdParser = require("bloody-mdparser")
var through = require("through2")
var assign = require("object-assign")
var fs = require("fs")

var _posts = {}

mdParser("src/posts/**/*.md")
  .on("data", function(chunk){
    if(chunk.meta == null) {
      return
    }
    fs.writeFile(
      "dist/api/" + chunk.meta.Slug + ".json",
      JSON.stringify(chunk)
    )
    _posts = assign({}, _posts, (function(){
      var object = {}
      object[chunk.meta.Slug] = chunk
      return object
    })())
  })
  .on("end", function(){
    fs.writeFile(
      "dist/api/posts.json",
      JSON.stringify(_posts)
    )
  })
