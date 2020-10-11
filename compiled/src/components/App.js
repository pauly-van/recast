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
      videoList: []
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
    var cb = function (videoArray) {
      this.setState({
        currentVideo: videoArray[0],
        videoList: videoArray
      });
    };
    searchYouTube({ query: value, max: 5, key: YOUTUBE_API_KEY }, cb.bind(this));
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement(
          'div',
          { className: 'col-md-6 offset-md-3' },
          React.createElement(Search, { state: this.state, searchNewVideo: this.searchNewVideo.bind(this) })
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { id: 'vidplayer', className: 'col-md-7' },
          React.createElement(VideoPlayer, { video: this.state.currentVideo })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement(VideoList, { state: this.state, videos: this.state.videoList, setCurrentVideo: this.setCurrentVideo.bind(this) })
        )
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsic2VhcmNoWW91VHViZSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiWU9VVFVCRV9BUElfS0VZIiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJraW5kIiwiZXRhZyIsImlkIiwidmlkZW9JZCIsInNuaXBwZXQiLCJwdWJsaXNoZWRBdCIsImNoYW5uZWxJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aHVtYm5haWxzIiwiZGVmYXVsdCIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwibWVkaXVtIiwiaGlnaCIsImNoYW5uZWxUaXRsZSIsImxpdmVCcm9hZGNhc3RDb250ZW50IiwidmlkZW9MaXN0IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZWFyY2hOZXdWaWRlbyIsInNldEN1cnJlbnRWaWRlbyIsImV2ZW50IiwiaSIsImxlbmd0aCIsInRhcmdldCIsImluZGV4T2ZDbGljayIsInNldFN0YXRlIiwidmFsdWUiLCJjYiIsInZpZGVvQXJyYXkiLCJxdWVyeSIsIm1heCIsImtleSIsImJpbmQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGFBQVAsTUFBMEIseUJBQTFCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsc0JBQTVCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYztBQUNaQyxjQUFNLEVBRE07QUFFWkMsY0FBTSxFQUZNO0FBR1pDLFlBQUk7QUFDRkYsZ0JBQU0sRUFESjtBQUVGRyxtQkFBUztBQUZQLFNBSFE7QUFPWkMsaUJBQVM7QUFDUEMsdUJBQWEsRUFETjtBQUVQQyxxQkFBVyxFQUZKO0FBR1BDLGlCQUFPLEVBSEE7QUFJUEMsdUJBQWEsRUFKTjtBQUtQQyxzQkFBWTtBQUNWQyxxQkFBUztBQUNQQyxtQkFBSyxFQURFO0FBRVBDLHFCQUFPLEdBRkE7QUFHUEMsc0JBQVE7QUFIRCxhQURDO0FBTVZDLG9CQUFRO0FBQ05ILG1CQUFLLEVBREM7QUFFTkMscUJBQU8sR0FGRDtBQUdOQyxzQkFBUTtBQUhGLGFBTkU7QUFXVkUsa0JBQU07QUFDSkosbUJBQUssRUFERDtBQUVKQyxxQkFBTyxHQUZIO0FBR0pDLHNCQUFRO0FBSEo7QUFYSSxXQUxMO0FBc0JQRyx3QkFBYyxFQXRCUDtBQXVCUEMsZ0NBQXNCO0FBdkJmO0FBUEcsT0FESDtBQWtDWEMsaUJBQVc7QUFsQ0EsS0FBYjtBQW9DRDs7QUFFREMsc0JBQW9CO0FBQ2xCLFNBQUtDLGNBQUw7QUFDRDs7QUFFREMsa0JBQWdCQyxLQUFoQixFQUF1QjtBQUNyQixTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLekIsS0FBTCxDQUFXb0IsU0FBWCxDQUFxQk0sTUFBekMsRUFBaURELEdBQWpELEVBQXNEO0FBQ3BELFVBQUksS0FBS3pCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJLLENBQXJCLEVBQXdCckIsRUFBeEIsQ0FBMkJDLE9BQTNCLEtBQXVDbUIsTUFBTUcsTUFBTixDQUFhdkIsRUFBeEQsRUFBNEQ7QUFDMUQsWUFBSXdCLGVBQWVILENBQW5CO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsU0FBS0ksUUFBTCxDQUFjO0FBQ1o1QixvQkFBYyxLQUFLRCxLQUFMLENBQVdvQixTQUFYLENBQXFCUSxZQUFyQjtBQURGLEtBQWQ7QUFHRDs7QUFFRE4saUJBQWVRLFFBQU0sTUFBckIsRUFBNkI7QUFDM0IsUUFBSUMsS0FBSyxVQUFTQyxVQUFULEVBQXFCO0FBQzVCLFdBQUtILFFBQUwsQ0FBYztBQUNaNUIsc0JBQWMrQixXQUFXLENBQVgsQ0FERjtBQUVaWixtQkFBV1k7QUFGQyxPQUFkO0FBS0QsS0FORDtBQU9BMUMsa0JBQWMsRUFBQzJDLE9BQU9ILEtBQVIsRUFBZUksS0FBSyxDQUFwQixFQUF1QkMsS0FBSzFDLGVBQTVCLEVBQWQsRUFBNERzQyxHQUFHSyxJQUFILENBQVEsSUFBUixDQUE1RDtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLE9BQU8sS0FBS3JDLEtBQXBCLEVBQTJCLGdCQUFnQixLQUFLc0IsY0FBTCxDQUFvQmMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBM0M7QUFERjtBQURGLE9BREY7QUFNRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVIsRUFBb0IsV0FBVSxVQUE5QjtBQUVFLDhCQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUtwQyxLQUFMLENBQVdDLFlBQS9CO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUVFLDhCQUFDLFNBQUQsSUFBWSxPQUFPLEtBQUtELEtBQXhCLEVBQStCLFFBQVEsS0FBS0EsS0FBTCxDQUFXb0IsU0FBbEQsRUFBNkQsaUJBQWlCLEtBQUtHLGVBQUwsQ0FBcUJhLElBQXJCLENBQTBCLElBQTFCLENBQTlFO0FBRkY7QUFMRjtBQU5GLEtBREY7QUFtQkQ7QUF6RitCOztBQTRGbEM7QUFDQTtBQUNBLGVBQWV6QyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZWFyY2hZb3VUdWJlIGZyb20gJy4uL2xpYi9zZWFyY2hZb3VUdWJlLmpzJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi9WaWRlb0xpc3QuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuaW1wb3J0IFlPVVRVQkVfQVBJX0tFWSBmcm9tICcuLi9jb25maWcveW91dHViZS5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFZpZGVvOiB7XG4gICAgICAgIGtpbmQ6ICcnLFxuICAgICAgICBldGFnOiAnJyxcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICBraW5kOiAnJyxcbiAgICAgICAgICB2aWRlb0lkOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBzbmlwcGV0OiB7XG4gICAgICAgICAgcHVibGlzaGVkQXQ6ICcnLFxuICAgICAgICAgIGNoYW5uZWxJZDogJycsXG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICB0aHVtYm5haWxzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVkaXVtOiB7XG4gICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlnaDoge1xuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICB3aWR0aDogNDgwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDM2MFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hhbm5lbFRpdGxlOiAnJyxcbiAgICAgICAgICBsaXZlQnJvYWRjYXN0Q29udGVudDogJydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZpZGVvTGlzdDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2VhcmNoTmV3VmlkZW8oKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRWaWRlbyhldmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS52aWRlb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZpZGVvTGlzdFtpXS5pZC52aWRlb0lkID09PSBldmVudC50YXJnZXQuaWQpIHtcbiAgICAgICAgdmFyIGluZGV4T2ZDbGljayA9IGk7XG4gICAgICAgIGJyZWFrOyBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50VmlkZW86IHRoaXMuc3RhdGUudmlkZW9MaXN0W2luZGV4T2ZDbGlja11cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaE5ld1ZpZGVvKHZhbHVlPSdjYXRzJykge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKHZpZGVvQXJyYXkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50VmlkZW86IHZpZGVvQXJyYXlbMF0sXG4gICAgICAgIHZpZGVvTGlzdDogdmlkZW9BcnJheVxuICAgICAgfSk7XG5cbiAgICB9O1xuICAgIHNlYXJjaFlvdVR1YmUoe3F1ZXJ5OiB2YWx1ZSwgbWF4OiA1LCBrZXk6IFlPVVRVQkVfQVBJX0tFWX0sIGNiLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggc3RhdGU9e3RoaXMuc3RhdGV9IHNlYXJjaE5ld1ZpZGVvPXt0aGlzLnNlYXJjaE5ld1ZpZGVvLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRwbGF5ZXJcIiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgey8qIDxkaXY+PGg1PjxlbT52aWRlb1BsYXllcjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj4gKi99XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgdmlkZW89e3RoaXMuc3RhdGUuY3VycmVudFZpZGVvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgey8qIDxkaXY+PGg1PjxlbT52aWRlb0xpc3Q8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+ICovfVxuICAgICAgICAgICAgPFZpZGVvTGlzdCAgc3RhdGU9e3RoaXMuc3RhdGV9IHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb0xpc3R9IHNldEN1cnJlbnRWaWRlbz17dGhpcy5zZXRDdXJyZW50VmlkZW8uYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gXG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ==