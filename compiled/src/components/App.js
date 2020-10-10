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
          React.createElement(VideoList, { state: this.state, videos: exampleVideoData, setCurrentVideo: this.setCurrentVideo })
        )
      )
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJ2aWRlb0xpc3QiLCJtYXAiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsInNldEN1cnJlbnRWaWRlbyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInNldFN0YXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxnQkFBUCxNQUE2Qiw2QkFBN0I7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0Isa0JBQXhCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjVCxpQkFBaUIsQ0FBakIsQ0FESDtBQUVYVSxpQkFBV1YsaUJBQWlCVyxHQUFqQixDQUFxQkMsU0FBU0EsTUFBTUMsRUFBTixDQUFTQyxPQUF2QztBQUZBLEtBQWI7QUFJRDs7QUFFREMsa0JBQWdCQyxLQUFoQixFQUF1QjtBQUNyQkMsWUFBUUMsR0FBUixDQUFZRixNQUFNRyxNQUFOLENBQWFOLEVBQXpCO0FBQ0FJLFlBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsU0FBS0UsUUFBTCxDQUFjO0FBQ1pYLG9CQUFjVCxpQkFBaUIsQ0FBakI7QUFERixLQUFkO0FBR0Q7O0FBRURxQixXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUE7QUFBQTtBQUFMO0FBREY7QUFERixPQURGO0FBTUU7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSLEVBQW9CLFdBQVUsVUFBOUI7QUFFRSw4QkFBQyxXQUFELElBQWEsT0FBTyxLQUFLYixLQUF6QixFQUFnQyxPQUFPUixpQkFBaUIsQ0FBakIsQ0FBdkM7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBRUUsOEJBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS1EsS0FBdkIsRUFBOEIsUUFBUVIsZ0JBQXRDLEVBQXdELGlCQUFpQixLQUFLZSxlQUE5RTtBQUZGO0FBTEY7QUFORixLQURGO0FBbUJEO0FBdEMrQjs7QUF5Q2xDO0FBQ0E7QUFDQSxlQUFlWixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJy4vVmlkZW9MaXN0LmpzJztcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL1ZpZGVvUGxheWVyLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFZpZGVvOiBleGFtcGxlVmlkZW9EYXRhWzBdLFxuICAgICAgdmlkZW9MaXN0OiBleGFtcGxlVmlkZW9EYXRhLm1hcCh2aWRlbyA9PiB2aWRlby5pZC52aWRlb0lkKSxcbiAgICB9O1xuICB9XG5cbiAgc2V0Q3VycmVudFZpZGVvKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRWaWRlbzogZXhhbXBsZVZpZGVvRGF0YVsxXVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxkaXY+PGg1PjxlbT5zZWFyY2g8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRwbGF5ZXJcIiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgey8qIDxkaXY+PGg1PjxlbT52aWRlb1BsYXllcjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj4gKi99XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgc3RhdGU9e3RoaXMuc3RhdGV9IHZpZGVvPXtleGFtcGxlVmlkZW9EYXRhWzBdfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgey8qIDxkaXY+PGg1PjxlbT52aWRlb0xpc3Q8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+ICovfVxuICAgICAgICAgICAgPFZpZGVvTGlzdCBzdGF0ZT17dGhpcy5zdGF0ZX0gdmlkZW9zPXtleGFtcGxlVmlkZW9EYXRhfSBzZXRDdXJyZW50VmlkZW89e3RoaXMuc2V0Q3VycmVudFZpZGVvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBcbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl19