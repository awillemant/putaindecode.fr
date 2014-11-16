var React = require("react/addons")
var cx = React.addons.classSet

var Tags = require("../tags")

var PostListItem = React.createClass({
  propTypes : {
    item : React.PropTypes.shape({
      Comments : React.PropTypes.bool,
      Authors : React.PropTypes.arrayOf(React.PropTypes.string),
      Title : React.PropTypes.string,
      Tags : React.PropTypes.arrayOf(React.PropTypes.string),
      Date : React.PropTypes.string,
      Slug : React.PropTypes.string
    })
  },
  render() {
    var item = this.props.item
    return (
      <div className="putainde-List-item js-Post">
        <div className="putainde-Avatars  putainde-Avatars--1 putainde-List-avatars">
          <div className="putainde-List-avatars-author">
            <a href="" className="putainde-Avatar putainde-List-avatars-author-avatar">
              <img src="http://fakeimg.pl/100x100/282828/eae0d0/" alt="" className="js-Loaded" />
            </a>
          </div>
        </div>
        <a href="#" className="putainde-Link putainde-List-title">
          {item.Title}
        </a>
        <Tags list={item.Tags} />
        <div className="putainde-List-author">
          {"commit initial par "}
          <a href="#">
            {item.Authors[0]}
          </a>
          <br />
          <time>{item.Date}</time>
        </div>
      </div>
    )
  }
})

module.exports = PostListItem
