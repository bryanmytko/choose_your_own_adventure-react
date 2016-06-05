var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;

var createBrowserHistory = require("history/lib/createBrowserHistory");

var adventures = require("./adventures");

var App = React.createClass({
  getInitialState: function(){
    return {
      current_adventure: 0,
      adventures: adventures
    }
  },
  changeAdventure: function(to){
    this.setState({
      current_adventure: to
    });
  },
  resetGame: function(){
    this.setState({
      current_adventure: 0
    });
  },
  showOptions: function(o){
    var self = this;

    if(o){
      var choices = o.map(function(o){
        return <Choice key={o.label} details={o} changeAdventure={self.changeAdventure} />
      });

      return choices;
    } else {
      return <Lose/>
    }
  },
  render: function(){
    var data = this.state.adventures[this.state.current_adventure];
    var text = data.text.split("\n").map(function(el){
              return(<p key={el}>{el}</p>);
            });

    return(
      <div className="main-container" style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav>
          <h1 onClick={this.resetGame}>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
          {text}
          <div className="choices">
            {this.showOptions(data.options)}
          </div>
        </div>
      </div>
    )
  }
});

var Choice = React.createClass({
  onButtonClick: function(to){
    this.props.changeAdventure(to);
  },
  render: function(){
    var details = this.props.details;
    return <a className="button" onClick={this.onButtonClick.bind(this, details.to)}>{details.label}</a>
  }
});

var Lose = React.createClass({
  render: function(){
    return <p className="lose">You Lose</p>
  }
});

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector("#main"));
