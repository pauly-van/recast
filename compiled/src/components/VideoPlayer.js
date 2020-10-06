var VideoPlayer = () => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      "Video Title"
    ),
    React.createElement(
      "div",
      null,
      "Video Description"
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BUeXBlcyIsInZpZGVvIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxjQUFjLE1BQ2hCO0FBQUE7QUFBQSxJQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUseUNBQWY7QUFDRSxvQ0FBUSxXQUFVLHVCQUFsQixFQUEwQyxLQUFJLHNEQUE5QyxFQUFxRyxxQkFBckc7QUFERixHQURGO0FBSUU7QUFBQTtBQUFBLE1BQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUpGLENBREY7O0FBWUE7QUFDQTtBQUNBQSxZQUFZQyxTQUFaLEdBQXdCO0FBQ3RCQyxTQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEUixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0EsZUFBZU4sV0FBZiIsImZpbGUiOiJWaWRlb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb1BsYXllciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9kUXc0dzlXZ1hjUT9hdXRvcGxheT0xXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz5WaWRlbyBUaXRsZTwvaDM+XG4gICAgICA8ZGl2PlZpZGVvIERlc2NyaXB0aW9uPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7XG4iXX0=