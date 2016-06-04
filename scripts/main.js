var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;

var createBrowserHistory = require("history/lib/createBrowserHistory");

var App = React.createClass({
  getInitialState: function(){
    return {
      adventures: {}
    }
  },
  componentDidMount: function(){
    // this.setState({
    //   students: students
    // });
  },
  renderStudent: function(key){
    //return <Adventure key={key} details={this.state.adventures[key]} />
  },
  render: function(){
    return(
      <div className="main-container">
        <h1>Choose Your Own Adventure</h1>
        <div className="current-adventure"></div>
      </div>
    )
  }
});

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector("#main"));
