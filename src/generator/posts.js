var mdParser = require("bloody-mdparser")
var through = require("through2")
var fs = require("fs")

mdParser("src/posts/**/*.md")
  .on("data", function(chunk){
    if(chunk.meta == null) {
      return
    }
    fs.writeFile(
      "dist/api/" + chunk.meta.Slug + ".json",
      JSON.stringify(chunk)
    )
  })
