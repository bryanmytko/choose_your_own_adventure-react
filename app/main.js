var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var BrowserHistory = ReactRouter.browserHistory;

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
  showChoices: function(data){
    var self = this;

    if(data.options){
      var choices = data.options.map(function(data){
        return <Choice key={data.label} details={data}
          changeAdventure={self.changeAdventure} />
      });

      return choices;
    } else if(data.ending) {
      return <Ending key={data.ending.code} ending={data.ending}/>
    }
  },
  render: function(){
    var data = this.state.adventures[this.state.current_adventure];
    var text = data.text.split("\n").map(function(el){
              return(<p key={el}>{el}</p>);
            });

    return(
      <div className="main-container"
        style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav>
          <h1 onClick={this.resetGame}>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
          {text}
          <div className="choices">
            {this.showChoices(data)}
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
    return <a className="button"
      onClick={this.onButtonClick.bind(this, details.to)}>{details.label}</a>
  }
});

var Ending = React.createClass({
  render: function(){
    var ending = this.props.ending;
    return <p className={ending.code}>{ending.text}</p>
  }
});

var NotFound = React.createClass({
  render: function(){
    return <p>404 - Not Found</p>
  }
});

var routes = (
  <Router history={BrowserHistory}>
    <Route path="/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector("#main"));
