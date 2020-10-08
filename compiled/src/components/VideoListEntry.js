var VideoListEntry = props => React.createElement(
  "div",
  { className: "video-list-entry media" },
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: props.video.snippet.thumbnails.default.url, alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      { className: "video-list-entry-title" },
      props.video.snippet.title
    ),
    React.createElement(
      "div",
      { className: "video-list-entry-detail" },
      props.video.snippet.description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwidmlkZW8iLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsImRlZmF1bHQiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxpQkFBa0JDLEtBQUQsSUFDbkI7QUFBQTtBQUFBLElBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUseUJBQWY7QUFDRSxpQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0EsTUFBTUMsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxVQUFwQixDQUErQkMsT0FBL0IsQ0FBdUNDLEdBQTFFLEVBQStFLEtBQUksRUFBbkY7QUFERixHQURGO0FBSUU7QUFBQTtBQUFBLE1BQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUF5Q0wsWUFBTUMsS0FBTixDQUFZQyxPQUFaLENBQW9CSTtBQUE3RCxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUEwQ04sWUFBTUMsS0FBTixDQUFZQyxPQUFaLENBQW9CSztBQUE5RDtBQUZGO0FBSkYsQ0FERjs7QUFZQTtBQUNBO0FBQ0FSLGVBQWVTLFNBQWYsR0FBMkI7QUFDekJQLFNBQU9RLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQSxlQUFlYixjQUFmIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXtwcm9wcy52aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIj57cHJvcHMudmlkZW8uc25pcHBldC50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj57cHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBWaWRlb0xpc3RFbnRyeTtcbiJdfQ==