import App from './App.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" id={this.props.video.id.videoId} onClick={this.onVideoListEntryClick.bind(this)}>{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }

  onVideoListEntryClick(event) {
    let indexOfClick = this.getIndexOfVid(event.target.id);
    console.log(indexOfClick);
    App.setCurrentVideo(indexOfClick);
  // ReactDOM.render(<VideoPlayer video={exampleVideoData[indexOfClick]}/>, document.getElementById('vidplayer') );
  }

  getIndexOfVid(vId) {
    for (let i = 0; i < exampleVideoData.length; i++) {
      if (exampleVideoData[i].id.videoId === vId) {
        return i; 
      }
    }
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
