import exampleVideoData from '../data/exampleVideoData.js';
var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" id={props.video.id.videoId} onClick={props.setCurrentVideo}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
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