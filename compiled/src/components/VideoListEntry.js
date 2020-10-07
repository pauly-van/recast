var VideoListEntry = () => React.createElement(
  "div",
  { className: "video-list-entry media" },
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: "https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg", alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      { className: "video-list-entry-title" },
      "Video Title"
    ),
    React.createElement(
      "div",
      { className: "video-list-entry-detail" },
      "Video Description"
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BUeXBlcyIsInZpZGVvIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxpQkFBaUIsTUFDbkI7QUFBQTtBQUFBLElBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUseUJBQWY7QUFDRSxpQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSSxnREFBbEMsRUFBbUYsS0FBSSxFQUF2RjtBQURGLEdBREY7QUFJRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHdCQUFmO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUFBO0FBQUE7QUFGRjtBQUpGLENBREY7O0FBWUE7QUFDQTtBQUNBQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3pCQyxTQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQTtBQUNBO0FBQ0EsZUFBZU4sY0FBZiIsImZpbGUiOiJWaWRlb0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb0xpc3RFbnRyeSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IG1lZGlhLW1pZGRsZVwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLzF3OFowVU9YVmFZL2RlZmF1bHQuanBnXCIgYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiPlZpZGVvIFRpdGxlPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+VmlkZW8gRGVzY3JpcHRpb248L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBWaWRlb0xpc3RFbnRyeTtcbiJdfQ==