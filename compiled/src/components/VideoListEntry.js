var _this = this;

import exampleVideoData from '../data/exampleVideoData.js';
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
      { className: "video-list-entry-title", id: props.video.id.videoId, onClick: props.setCurrentVideo.bind(_this) },
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

// VideoListEntry.prototype.onVideoListEntryClick = function(event) {
//   console.log(event.target);
//  // let indexOfClick = VideoListEntry.getIndexOfVid(event.target.id);
//  for (let i = 0; i < exampleVideoData.length; i++) {
//   if (exampleVideoData[i].id.videoId === event.target.id) {
//     var indexOfClick = i;
//     break; 
//   }
// }
//   console.log(indexOfClick);
//   props.setCurrentVideo(indexOfClick);
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJleGFtcGxlVmlkZW9EYXRhIiwiVmlkZW9MaXN0RW50cnkiLCJwcm9wcyIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwiaWQiLCJ2aWRlb0lkIiwic2V0Q3VycmVudFZpZGVvIiwiYmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsSUFBSUMsaUJBQWtCQyxLQUFELElBQ25CO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDTTtBQUFBO0FBQUEsTUFBSyxXQUFVLHlCQUFmO0FBQ0UsaUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLE1BQU1DLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsVUFBcEIsQ0FBK0JDLE9BQS9CLENBQXVDQyxHQUExRSxFQUErRSxLQUFJLEVBQW5GO0FBREYsR0FETjtBQUlNO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsd0JBQWYsRUFBd0MsSUFBSUwsTUFBTUMsS0FBTixDQUFZSyxFQUFaLENBQWVDLE9BQTNELEVBQW9FLFNBQVNQLE1BQU1RLGVBQU4sQ0FBc0JDLElBQXRCLENBQTJCLEtBQTNCLENBQTdFO0FBQWdIVCxZQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JRO0FBQXBJLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQTBDVixZQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JTO0FBQTlEO0FBRkY7QUFKTixDQURGOztBQVlBO0FBQ0E7QUFDQVosZUFBZWEsU0FBZixHQUEyQjtBQUN6QlgsU0FBT1ksTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREwsQ0FBM0I7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlakIsY0FBZiIsImZpbGUiOiJWaWRlb0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG52YXIgVmlkZW9MaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17cHJvcHMudmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LXRpdGxlXCIgaWQ9e3Byb3BzLnZpZGVvLmlkLnZpZGVvSWR9IG9uQ2xpY2s9e3Byb3BzLnNldEN1cnJlbnRWaWRlby5iaW5kKHRoaXMpfT57cHJvcHMudmlkZW8uc25pcHBldC50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+e3Byb3BzLnZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIFZpZGVvTGlzdEVudHJ5LnByb3RvdHlwZS5vblZpZGVvTGlzdEVudHJ5Q2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuLy8gIC8vIGxldCBpbmRleE9mQ2xpY2sgPSBWaWRlb0xpc3RFbnRyeS5nZXRJbmRleE9mVmlkKGV2ZW50LnRhcmdldC5pZCk7XG4vLyAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGFtcGxlVmlkZW9EYXRhLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGlmIChleGFtcGxlVmlkZW9EYXRhW2ldLmlkLnZpZGVvSWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xuLy8gICAgIHZhciBpbmRleE9mQ2xpY2sgPSBpO1xuLy8gICAgIGJyZWFrOyBcbi8vICAgfVxuLy8gfVxuLy8gICBjb25zb2xlLmxvZyhpbmRleE9mQ2xpY2spO1xuLy8gICBwcm9wcy5zZXRDdXJyZW50VmlkZW8oaW5kZXhPZkNsaWNrKTtcbi8vIH1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFZpZGVvTGlzdEVudHJ5OyJdfQ==