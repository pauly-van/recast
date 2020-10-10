import searchYouTube from '../lib/searchYouTube.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.searchNewVideo(event.target.value);
  }


  render(props) {
    return (<div className="search-bar form-inline">
      <input value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control" type="text" />
      {/* <button className="btn hidden-sm-down" onClick={this.props.searchNewVideo(event, this.state.value)}>  */}
      {/* <span className="glyphicon glyphicon-search"></span> */}
      {/* </button> */}
    </div> );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
