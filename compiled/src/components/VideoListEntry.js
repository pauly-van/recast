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
      { className: "video-list-entry-title", id: props.video.id.videoId, onClick: props.setCurrentVideo },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJleGFtcGxlVmlkZW9EYXRhIiwiVmlkZW9MaXN0RW50cnkiLCJwcm9wcyIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwiaWQiLCJ2aWRlb0lkIiwic2V0Q3VycmVudFZpZGVvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsSUFBSUMsaUJBQWtCQyxLQUFELElBQ25CO0FBQUE7QUFBQSxJQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHlCQUFmO0FBQ0UsaUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLE1BQU1DLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsVUFBcEIsQ0FBK0JDLE9BQS9CLENBQXVDQyxHQUExRSxFQUErRSxLQUFJLEVBQW5GO0FBREYsR0FERjtBQUlFO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsd0JBQWYsRUFBd0MsSUFBSUwsTUFBTUMsS0FBTixDQUFZSyxFQUFaLENBQWVDLE9BQTNELEVBQW9FLFNBQVNQLE1BQU1RLGVBQW5GO0FBQXFHUixZQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JPO0FBQXpILEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQTBDVCxZQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JRO0FBQTlEO0FBRkY7QUFKRixDQURGOztBQVlBO0FBQ0E7QUFDQVgsZUFBZVksU0FBZixHQUEyQjtBQUN6QlYsU0FBT1csTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREwsQ0FBM0I7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlaEIsY0FBZiIsImZpbGUiOiJWaWRlb0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG52YXIgVmlkZW9MaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IG1lZGlhLW1pZGRsZVwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9e3Byb3BzLnZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiIGlkPXtwcm9wcy52aWRlby5pZC52aWRlb0lkfSBvbkNsaWNrPXtwcm9wcy5zZXRDdXJyZW50VmlkZW99Pntwcm9wcy52aWRlby5zbmlwcGV0LnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LWRldGFpbFwiPntwcm9wcy52aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gVmlkZW9MaXN0RW50cnkucHJvdG90eXBlLm9uVmlkZW9MaXN0RW50cnlDbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4vLyAgLy8gbGV0IGluZGV4T2ZDbGljayA9IFZpZGVvTGlzdEVudHJ5LmdldEluZGV4T2ZWaWQoZXZlbnQudGFyZ2V0LmlkKTtcbi8vICBmb3IgKGxldCBpID0gMDsgaSA8IGV4YW1wbGVWaWRlb0RhdGEubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKGV4YW1wbGVWaWRlb0RhdGFbaV0uaWQudmlkZW9JZCA9PT0gZXZlbnQudGFyZ2V0LmlkKSB7XG4vLyAgICAgdmFyIGluZGV4T2ZDbGljayA9IGk7XG4vLyAgICAgYnJlYWs7IFxuLy8gICB9XG4vLyB9XG4vLyAgIGNvbnNvbGUubG9nKGluZGV4T2ZDbGljayk7XG4vLyAgIHByb3BzLnNldEN1cnJlbnRWaWRlbyhpbmRleE9mQ2xpY2spO1xuLy8gfVxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9MaXN0RW50cnk7Il19