var mdParser = require("bloody-mdparser")
var through = require("through2")
var assign = require("object-assign")
var fs = require("fs")
var mkdirp = require("mkdirp")

var _posts = {}

mdParser("src/posts/**/*.md")
  .on("data", function(chunk){
    if(chunk.meta == null) {
      return
    }
    fs.writeFile(
      "dist/api/" + chunk.meta.Slug + ".json",
      JSON.stringify(chunk, null, 2)
    )
    _posts = assign({}, _posts, (function(){
      var object = {}
      object[chunk.meta.Slug] = chunk
      return object
    })())
  })
  .on("end", function(){
    var posts = Object.keys(_posts)
      // remove unused HTML contents
      .map(function(key){
        return assign(_posts[key], {html : void 0})
      })
      // sort by descending order
      .sort(function(left, right){
        return (
          +new Date(right.meta.Date) -
          +new Date(left.meta.Date)
        )
      })
    mkdirp.sync("dist/api/posts-list")
    fs.writeFile(
      "dist/api/posts-list/index.json",
      JSON.stringify({ list: posts }, null, 2)
    )
  })
