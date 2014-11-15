console.log("@todo test & enable deploy task")
process.exit(1)

require("gh-pages").publish(require("path").join(__dirname, "dist"), function(err){
  console.error(err)
  process.exit(1)
})
