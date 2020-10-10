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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJ2aWRlb0xpc3QiLCJtYXAiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsInNldEN1cnJlbnRWaWRlbyIsImV2ZW50IiwiaSIsImxlbmd0aCIsInRhcmdldCIsImluZGV4T2ZDbGljayIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4Qjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBY1QsaUJBQWlCLENBQWpCLENBREg7QUFFWFUsaUJBQVdWLGlCQUFpQlcsR0FBakIsQ0FBcUJDLFNBQVNBLE1BQU1DLEVBQU4sQ0FBU0MsT0FBdkM7QUFGQSxLQUFiO0FBSUQ7O0FBRURDLGtCQUFnQkMsS0FBaEIsRUFBdUI7QUFDckI7QUFDQTtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJakIsaUJBQWlCa0IsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2hELFVBQUlqQixpQkFBaUJpQixDQUFqQixFQUFvQkosRUFBcEIsQ0FBdUJDLE9BQXZCLEtBQW1DRSxNQUFNRyxNQUFOLENBQWFOLEVBQXBELEVBQXdEO0FBQ3RELFlBQUlPLGVBQWVILENBQW5CO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsU0FBS0ksUUFBTCxDQUFjO0FBQ1paLG9CQUFjVCxpQkFBaUJvQixZQUFqQjtBQURGLEtBQWQ7QUFHRDs7QUFFREUsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBO0FBQUE7QUFBTDtBQURGO0FBREYsT0FERjtBQU1FO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFVBQTlCO0FBRUUsOEJBQUMsV0FBRCxJQUFhLE9BQU8sS0FBS2QsS0FBekIsRUFBZ0MsT0FBT1IsaUJBQWlCLENBQWpCLENBQXZDO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUVFLDhCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtRLEtBQXZCLEVBQThCLFFBQVFSLGdCQUF0QyxFQUF3RCxpQkFBaUIsS0FBS2UsZUFBTCxDQUFxQlEsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBekU7QUFGRjtBQUxGO0FBTkYsS0FERjtBQW1CRDtBQTVDK0I7O0FBK0NsQztBQUNBO0FBQ0EsZUFBZXBCLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi9WaWRlb0xpc3QuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXIuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50VmlkZW86IGV4YW1wbGVWaWRlb0RhdGFbMF0sXG4gICAgICB2aWRlb0xpc3Q6IGV4YW1wbGVWaWRlb0RhdGEubWFwKHZpZGVvID0+IHZpZGVvLmlkLnZpZGVvSWQpLFxuICAgIH07XG4gIH1cblxuICBzZXRDdXJyZW50VmlkZW8oZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhhbXBsZVZpZGVvRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV4YW1wbGVWaWRlb0RhdGFbaV0uaWQudmlkZW9JZCA9PT0gZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgIHZhciBpbmRleE9mQ2xpY2sgPSBpO1xuICAgICAgICBicmVhazsgXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFZpZGVvOiBleGFtcGxlVmlkZW9EYXRhW2luZGV4T2ZDbGlja11cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8ZGl2PjxoNT48ZW0+c2VhcmNoPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwidmlkcGxheWVyXCIgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PjxoNT48ZW0+dmlkZW9QbGF5ZXI8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+ICovfVxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIHN0YXRlPXt0aGlzLnN0YXRlfSB2aWRlbz17ZXhhbXBsZVZpZGVvRGF0YVswXX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PjxoNT48ZW0+dmlkZW9MaXN0PC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PiAqL31cbiAgICAgICAgICAgIDxWaWRlb0xpc3Qgc3RhdGU9e3RoaXMuc3RhdGV9IHZpZGVvcz17ZXhhbXBsZVZpZGVvRGF0YX0gc2V0Q3VycmVudFZpZGVvPXt0aGlzLnNldEN1cnJlbnRWaWRlby5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBcbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl19