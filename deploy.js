console.log("@todo test & enable deploy task")
process.exit(1)

require("gh-pages").publish(
  require("path").join(__dirname, "dist"),
  {
    repo : "https://" + (process.env.GH_TOKEN ? process.env.GH_TOKEN + "@" : "") + "github.com/" + process.env.GH_OWNER + "/" + process.env.GH_PROJECT_NAME + ".git",
    silent : true
  },
  function(err){
    console.error(err)
    process.exit(1)
  }
)
