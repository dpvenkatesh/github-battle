var React = require('react');
var PropTypes = React.PropTypes;

/*function puke(obj){
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}*/

function Results (props) {
  return (
    <div className="humbotron col-sm-12 text-center"></div>
  )
}

Results.PropTypes = {
  isLoading : PropTypes.bool.isRequired,
  playersInfo : PropTypes.array.isRequired,
  scores : PropTypes.array.isRequired
}

module.exports = Results;