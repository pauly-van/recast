import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData.map(video => video.id.videoId),
    };
  }

  setCurrentVideo(event) {
    // console.log(event.target.id);
    // console.log(this);
    for (let i = 0; i < exampleVideoData.length; i++) {
      if (exampleVideoData[i].id.videoId === event.target.id) {
        var indexOfClick = i;
        break; 
      }
    }
    this.setState({
      currentVideo: exampleVideoData[indexOfClick]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div id="vidplayer" className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer state={this.state} video={exampleVideoData[0]}/>
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList state={this.state} videos={exampleVideoData} setCurrentVideo={this.setCurrentVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

