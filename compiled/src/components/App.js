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
    console.log(event.target.id);
    console.log(this);
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
        { className: 'navbar' },
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
          React.createElement(VideoList, { state: this.state, videos: exampleVideoData, setCurrentVideo: this.setCurrentVideo.bind(this) })
        )
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJ2aWRlb0xpc3QiLCJtYXAiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsInNldEN1cnJlbnRWaWRlbyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4Qjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBY1QsaUJBQWlCLENBQWpCLENBREg7QUFFWFUsaUJBQVdWLGlCQUFpQlcsR0FBakIsQ0FBcUJDLFNBQVNBLE1BQU1DLEVBQU4sQ0FBU0MsT0FBdkM7QUFGQSxLQUFiO0FBSUQ7O0FBRURDLGtCQUFnQkMsS0FBaEIsRUFBdUI7QUFDckJDLFlBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsTUFBTixDQUFhTixFQUF6QjtBQUNBSSxZQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFNBQUtFLFFBQUwsQ0FBYztBQUNaWCxvQkFBY1QsaUJBQWlCLENBQWpCO0FBREYsS0FBZDtBQUdEOztBQUVEcUIsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBO0FBQUE7QUFBTDtBQURGO0FBREYsT0FERjtBQU1FO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFVBQTlCO0FBRUUsOEJBQUMsV0FBRCxJQUFhLE9BQU8sS0FBS2IsS0FBekIsRUFBZ0MsT0FBT1IsaUJBQWlCLENBQWpCLENBQXZDO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUVFLDhCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtRLEtBQXZCLEVBQThCLFFBQVFSLGdCQUF0QyxFQUF3RCxpQkFBaUIsS0FBS2UsZUFBTCxDQUFxQk8sSUFBckIsQ0FBMEIsSUFBMUIsQ0FBekU7QUFGRjtBQUxGO0FBTkYsS0FERjtBQW1CRDtBQXRDK0I7O0FBeUNsQztBQUNBO0FBQ0EsZUFBZW5CLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi9WaWRlb0xpc3QuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50VmlkZW86IGV4YW1wbGVWaWRlb0RhdGFbMF0sXG4gICAgICB2aWRlb0xpc3Q6IGV4YW1wbGVWaWRlb0RhdGEubWFwKHZpZGVvID0+IHZpZGVvLmlkLnZpZGVvSWQpLFxuICAgIH07XG4gIH1cblxuICBzZXRDdXJyZW50VmlkZW8oZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFZpZGVvOiBleGFtcGxlVmlkZW9EYXRhWzFdXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgPGRpdj48aDU+PGVtPnNlYXJjaDwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBpZD1cInZpZHBsYXllclwiIGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICB7LyogPGRpdj48aDU+PGVtPnZpZGVvUGxheWVyPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PiAqL31cbiAgICAgICAgICAgIDxWaWRlb1BsYXllciBzdGF0ZT17dGhpcy5zdGF0ZX0gdmlkZW89e2V4YW1wbGVWaWRlb0RhdGFbMF19Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICB7LyogPGRpdj48aDU+PGVtPnZpZGVvTGlzdDwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj4gKi99XG4gICAgICAgICAgICA8VmlkZW9MaXN0IHN0YXRlPXt0aGlzLnN0YXRlfSB2aWRlb3M9e2V4YW1wbGVWaWRlb0RhdGF9IHNldEN1cnJlbnRWaWRlbz17dGhpcy5zZXRDdXJyZW50VmlkZW8uYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gXG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ==