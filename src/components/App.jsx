import searchYouTube from '../lib/searchYouTube.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {
        kind: '',
        etag: '',
        id: {
          kind: '',
          videoId: ''
        },
        snippet: {
          publishedAt: '',
          channelId: '',
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
              width: 320,
              height: 180
            },
            medium: {
              url: '',
              width: 320,
              height: 180
            },
            high: {
              url: '',
              width: 480,
              height: 360
            }
          },
          channelTitle: '',
          liveBroadcastContent: ''
        }
      },
      videoList: [],
    };
  }

  componentDidMount() {
    this.searchNewVideo();
  }

  setCurrentVideo(event) {
    for (let i = 0; i < this.state.videoList.length; i++) {
      if (this.state.videoList[i].id.videoId === event.target.id) {
        var indexOfClick = i;
        break; 
      }
    }
    this.setState({
      currentVideo: this.state.videoList[indexOfClick]
    });
  }

  searchNewVideo(value = 'cats') {
    var cb = function(videoArray) {
      this.setState({
        currentVideo: videoArray[0],
        videoList: videoArray
      });

    };
    searchYouTube({query: value, max: 5, key: YOUTUBE_API_KEY}, cb.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search state={this.state} searchNewVideo={this.searchNewVideo.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div id="vidplayer" className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList state={this.state} videos={this.state.videoList} setCurrentVideo={this.setCurrentVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

