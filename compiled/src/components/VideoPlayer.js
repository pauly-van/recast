var VideoPlayer = props => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: `https://www.youtube.com/embed/${props.state.currentVideo.id.videoId}`, allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      props.state.currentVideo.snippet.title
    ),
    React.createElement(
      "div",
      null,
      props.state.currentVideo.snippet.description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsInZpZGVvIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxjQUFlQyxLQUFELElBQ2hCO0FBQUE7QUFBQSxJQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUseUNBQWY7QUFDRSxvQ0FBUSxXQUFVLHVCQUFsQixFQUEwQyxLQUFNLGlDQUFnQ0EsTUFBTUMsS0FBTixDQUFZQyxZQUFaLENBQXlCQyxFQUF6QixDQUE0QkMsT0FBUSxFQUFwSCxFQUF1SCxxQkFBdkg7QUFERixHQURGO0FBSUU7QUFBQTtBQUFBLE1BQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLSixZQUFNQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJHLE9BQXpCLENBQWlDQztBQUF0QyxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1OLFlBQU1DLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkcsT0FBekIsQ0FBaUNFO0FBQXZDO0FBRkY7QUFKRixDQURGOztBQVlBO0FBQ0E7QUFDQVIsWUFBWVMsU0FBWixHQUF3QjtBQUN0QkMsU0FBT0MsTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRFIsQ0FBeEI7O0FBSUE7QUFDQTtBQUNBLGVBQWVkLFdBQWYiLCJmaWxlIjoiVmlkZW9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVmlkZW9QbGF5ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Byb3BzLnN0YXRlLmN1cnJlbnRWaWRlby5pZC52aWRlb0lkfWB9IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllci1kZXRhaWxzXCI+XG4gICAgICA8aDM+e3Byb3BzLnN0YXRlLmN1cnJlbnRWaWRlby5zbmlwcGV0LnRpdGxlfTwvaDM+XG4gICAgICA8ZGl2Pntwcm9wcy5zdGF0ZS5jdXJyZW50VmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb1BsYXllci5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcbiJdfQ==