var VideoPlayer = props => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: `https://www.youtube.com/embed/${props.video.id.videoId}`, allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      props.video.snippet.title
    ),
    React.createElement(
      "div",
      null,
      props.video.snippet.description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BzIiwidmlkZW8iLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsY0FBZUMsS0FBRCxJQUNoQjtBQUFBO0FBQUEsSUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHlDQUFmO0FBQ0Usb0NBQVEsV0FBVSx1QkFBbEIsRUFBMEMsS0FBTSxpQ0FBZ0NBLE1BQU1DLEtBQU4sQ0FBWUMsRUFBWixDQUFlQyxPQUFRLEVBQXZHLEVBQTBHLHFCQUExRztBQURGLEdBREY7QUFJRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUtILFlBQU1DLEtBQU4sQ0FBWUcsT0FBWixDQUFvQkM7QUFBekIsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFNTCxZQUFNQyxLQUFOLENBQVlHLE9BQVosQ0FBb0JFO0FBQTFCO0FBRkY7QUFKRixDQURGOztBQVlBO0FBQ0E7QUFDQVAsWUFBWVEsU0FBWixHQUF3QjtBQUN0Qk4sU0FBT08sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRFIsQ0FBeEI7O0FBSUE7QUFDQTtBQUNBLGVBQWVaLFdBQWYiLCJmaWxlIjoiVmlkZW9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVmlkZW9QbGF5ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Byb3BzLnZpZGVvLmlkLnZpZGVvSWR9YH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz57cHJvcHMudmlkZW8uc25pcHBldC50aXRsZX08L2gzPlxuICAgICAgPGRpdj57cHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb1BsYXllci5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcbiJdfQ==