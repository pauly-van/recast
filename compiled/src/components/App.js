import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0].id.videoId,
      videoList: exampleVideoData.map(video => video.id.videoId)
    };
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
          { className: 'col-md-7' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJpZCIsInZpZGVvSWQiLCJ2aWRlb0xpc3QiLCJtYXAiLCJ2aWRlbyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4Qjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBY1QsaUJBQWlCLENBQWpCLEVBQW9CVSxFQUFwQixDQUF1QkMsT0FEMUI7QUFFWEMsaUJBQVdaLGlCQUFpQmEsR0FBakIsQ0FBcUJDLFNBQVNBLE1BQU1KLEVBQU4sQ0FBU0MsT0FBdkM7QUFGQSxLQUFiO0FBSUQ7O0FBRURJLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQTtBQUFBO0FBQUw7QUFERjtBQURGLE9BREE7QUFNQTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFFRSw4QkFBQyxXQUFELElBQWEsT0FBTyxLQUFLUCxLQUF6QixFQUFnQyxPQUFPUixpQkFBaUIsQ0FBakIsQ0FBdkM7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBRUUsOEJBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS1EsS0FBdkIsRUFBOEIsUUFBUVIsZ0JBQXRDO0FBRkY7QUFMRjtBQU5BLEtBREY7QUFtQkQ7QUE5QitCOztBQWlDbEM7QUFDQTtBQUNBLGVBQWVHLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi9WaWRlb0xpc3QuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50VmlkZW86IGV4YW1wbGVWaWRlb0RhdGFbMF0uaWQudmlkZW9JZCxcbiAgICAgIHZpZGVvTGlzdDogZXhhbXBsZVZpZGVvRGF0YS5tYXAodmlkZW8gPT4gdmlkZW8uaWQudmlkZW9JZClcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgIDxkaXY+PGg1PjxlbT5zZWFyY2g8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgey8qIDxkaXY+PGg1PjxlbT52aWRlb1BsYXllcjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj4gKi99XG4gICAgICAgICAgPFZpZGVvUGxheWVyIHN0YXRlPXt0aGlzLnN0YXRlfSB2aWRlbz17ZXhhbXBsZVZpZGVvRGF0YVswXX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgIHsvKiA8ZGl2PjxoNT48ZW0+dmlkZW9MaXN0PC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PiAqL31cbiAgICAgICAgICA8VmlkZW9MaXN0IHN0YXRlPXt0aGlzLnN0YXRlfSB2aWRlb3M9e2V4YW1wbGVWaWRlb0RhdGF9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9IFxufVxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG4iXX0=