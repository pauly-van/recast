import App from './App.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return React.createElement(
      'div',
      { className: 'video-list-entry media' },
      React.createElement(
        'div',
        { className: 'media-left media-middle' },
        React.createElement('img', { className: 'media-object', src: this.props.video.snippet.thumbnails.default.url, alt: '' })
      ),
      React.createElement(
        'div',
        { className: 'media-body' },
        React.createElement(
          'div',
          { className: 'video-list-entry-title', id: this.props.video.id.videoId, onClick: this.onVideoListEntryClick.bind(this) },
          this.props.video.snippet.title
        ),
        React.createElement(
          'div',
          { className: 'video-list-entry-detail' },
          this.props.video.snippet.description
        )
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJleGFtcGxlVmlkZW9EYXRhIiwiVmlkZW9QbGF5ZXIiLCJWaWRlb0xpc3RFbnRyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwiaWQiLCJ2aWRlb0lkIiwib25WaWRlb0xpc3RFbnRyeUNsaWNrIiwiYmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJldmVudCIsImluZGV4T2ZDbGljayIsImdldEluZGV4T2ZWaWQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0Q3VycmVudFZpZGVvIiwidklkIiwiaSIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEdBQVAsTUFBZ0IsVUFBaEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qiw2QkFBN0I7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4Qjs7QUFFQSxNQUFNQyxjQUFOLFNBQTZCQyxNQUFNQyxTQUFuQyxDQUE2QztBQUMzQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBRURDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQ0UscUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUssS0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxPQUFqQixDQUF5QkMsVUFBekIsQ0FBb0NDLE9BQXBDLENBQTRDQyxHQUEvRSxFQUFvRixLQUFJLEVBQXhGO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWYsRUFBd0MsSUFBSSxLQUFLTixLQUFMLENBQVdFLEtBQVgsQ0FBaUJLLEVBQWpCLENBQW9CQyxPQUFoRSxFQUF5RSxTQUFTLEtBQUtDLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUFsRjtBQUEwSCxlQUFLVixLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLE9BQWpCLENBQXlCUTtBQUFuSixTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZjtBQUEwQyxlQUFLWCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLE9BQWpCLENBQXlCUztBQUFuRTtBQUZGO0FBSkYsS0FERjtBQVdEOztBQUVESCx3QkFBc0JJLEtBQXRCLEVBQTZCO0FBQzNCLFFBQUlDLGVBQWUsS0FBS0MsYUFBTCxDQUFtQkYsTUFBTUcsTUFBTixDQUFhVCxFQUFoQyxDQUFuQjtBQUNBVSxZQUFRQyxHQUFSLENBQVlKLFlBQVo7QUFDQXJCLFFBQUkwQixlQUFKLENBQW9CTCxZQUFwQjtBQUNGO0FBQ0M7O0FBRURDLGdCQUFjSyxHQUFkLEVBQW1CO0FBQ2pCLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJM0IsaUJBQWlCNEIsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2hELFVBQUkzQixpQkFBaUIyQixDQUFqQixFQUFvQmQsRUFBcEIsQ0FBdUJDLE9BQXZCLEtBQW1DWSxHQUF2QyxFQUE0QztBQUMxQyxlQUFPQyxDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBakMwQzs7QUFvQzdDO0FBQ0E7QUFDQXpCLGVBQWUyQixTQUFmLEdBQTJCO0FBQ3pCckIsU0FBT0wsTUFBTTJCLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQU1BO0FBQ0E7QUFDQSxlQUFlOUIsY0FBZiIsImZpbGUiOiJWaWRlb0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanMnO1xuaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL1ZpZGVvUGxheWVyLmpzJztcblxuY2xhc3MgVmlkZW9MaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17dGhpcy5wcm9wcy52aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIiBpZD17dGhpcy5wcm9wcy52aWRlby5pZC52aWRlb0lkfSBvbkNsaWNrPXt0aGlzLm9uVmlkZW9MaXN0RW50cnlDbGljay5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy52aWRlby5zbmlwcGV0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj57dGhpcy5wcm9wcy52aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvblZpZGVvTGlzdEVudHJ5Q2xpY2soZXZlbnQpIHtcbiAgICBsZXQgaW5kZXhPZkNsaWNrID0gdGhpcy5nZXRJbmRleE9mVmlkKGV2ZW50LnRhcmdldC5pZCk7XG4gICAgY29uc29sZS5sb2coaW5kZXhPZkNsaWNrKTtcbiAgICBBcHAuc2V0Q3VycmVudFZpZGVvKGluZGV4T2ZDbGljayk7XG4gIC8vIFJlYWN0RE9NLnJlbmRlcig8VmlkZW9QbGF5ZXIgdmlkZW89e2V4YW1wbGVWaWRlb0RhdGFbaW5kZXhPZkNsaWNrXX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZHBsYXllcicpICk7XG4gIH1cblxuICBnZXRJbmRleE9mVmlkKHZJZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhhbXBsZVZpZGVvRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV4YW1wbGVWaWRlb0RhdGFbaV0uaWQudmlkZW9JZCA9PT0gdklkKSB7XG4gICAgICAgIHJldHVybiBpOyBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFZpZGVvTGlzdEVudHJ5O1xuIl19