import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData.map(video => video.id.videoId)
    };
  }

  setCurrentVideo(event) {
    console.log('hi');
    this.setState({
      currentVideo: exampleVideoData[1]
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar', onClick: this.setCurrentVideo.bind(this) },
        'this is it',
        React.createElement(
          'div',
          { className: 'col-md-6 offset-md-3' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'h5',
              null,
              React.createElement(
                'em',
                null,
                'search'
              ),
              ' view goes here'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { id: 'vidplayer', className: 'col-md-7' },
          React.createElement(VideoPlayer, { state: this.state, video: exampleVideoData[0] })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement(VideoList, { state: this.state, videos: exampleVideoData })
        )
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJ2aWRlb0xpc3QiLCJtYXAiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsInNldEN1cnJlbnRWaWRlbyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4Qjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBY1QsaUJBQWlCLENBQWpCLENBREg7QUFFWFUsaUJBQVdWLGlCQUFpQlcsR0FBakIsQ0FBcUJDLFNBQVNBLE1BQU1DLEVBQU4sQ0FBU0MsT0FBdkM7QUFGQSxLQUFiO0FBSUQ7O0FBRURDLGtCQUFnQkMsS0FBaEIsRUFBc0I7QUFDcEJDLFlBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ1pWLG9CQUFlVCxpQkFBaUIsQ0FBakI7QUFESCxLQUFkO0FBR0g7O0FBRUNvQixXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWYsRUFBd0IsU0FBUyxLQUFLTCxlQUFMLENBQXFCTSxJQUFyQixDQUEwQixJQUExQixDQUFqQztBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBO0FBQUE7QUFBTDtBQURGO0FBRkYsT0FERjtBQU9FO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFVBQTlCO0FBRUUsOEJBQUMsV0FBRCxJQUFhLE9BQU8sS0FBS2IsS0FBekIsRUFBZ0MsT0FBT1IsaUJBQWlCLENBQWpCLENBQXZDO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUVFLDhCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtRLEtBQXZCLEVBQThCLFFBQVFSLGdCQUF0QztBQUZGO0FBTEY7QUFQRixLQURGO0FBb0JEO0FBdEMrQjs7QUF5Q2xDO0FBQ0E7QUFDQSxlQUFlRyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJy4vVmlkZW9MaXN0LmpzJztcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL1ZpZGVvUGxheWVyLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFZpZGVvOiBleGFtcGxlVmlkZW9EYXRhWzBdLFxuICAgICAgdmlkZW9MaXN0OiBleGFtcGxlVmlkZW9EYXRhLm1hcCh2aWRlbyA9PiB2aWRlby5pZC52aWRlb0lkKSxcbiAgICB9O1xuICB9XG5cbiAgc2V0Q3VycmVudFZpZGVvKGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRWaWRlbzogIGV4YW1wbGVWaWRlb0RhdGFbMV1cbiAgfSk7XG59XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiIG9uQ2xpY2s9e3RoaXMuc2V0Q3VycmVudFZpZGVvLmJpbmQodGhpcyl9PlxuICAgICAgICAgIHRoaXMgaXMgaXRcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8ZGl2PjxoNT48ZW0+c2VhcmNoPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwidmlkcGxheWVyXCIgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PjxoNT48ZW0+dmlkZW9QbGF5ZXI8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+ICovfVxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIHN0YXRlPXt0aGlzLnN0YXRlfSB2aWRlbz17ZXhhbXBsZVZpZGVvRGF0YVswXX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PjxoNT48ZW0+dmlkZW9MaXN0PC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PiAqL31cbiAgICAgICAgICAgIDxWaWRlb0xpc3Qgc3RhdGU9e3RoaXMuc3RhdGV9IHZpZGVvcz17ZXhhbXBsZVZpZGVvRGF0YX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gXG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ==