import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

var App = () => React.createElement(
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
      { className: 'col-md-7' },
      React.createElement(VideoPlayer, { video: exampleVideoData[0] })
    ),
    React.createElement(
      'div',
      { className: 'col-md-5' },
      React.createElement(VideoList, { videos: exampleVideoData })
    )
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxnQkFBUCxNQUE2Qiw2QkFBN0I7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0Isa0JBQXhCOztBQUVBLElBQUlDLE1BQU0sTUFDUjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFKO0FBQUE7QUFBQTtBQUFMO0FBREY7QUFERixHQURGO0FBTUU7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmO0FBRUUsMEJBQUMsV0FBRCxJQUFhLE9BQU9ILGlCQUFpQixDQUFqQixDQUFwQjtBQUZGLEtBREY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFFRSwwQkFBQyxTQUFELElBQVcsUUFBUUEsZ0JBQW5CO0FBRkY7QUFMRjtBQU5GLENBREY7O0FBb0JBO0FBQ0E7QUFDQSxlQUFlRyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJy4vVmlkZW9MaXN0LmpzJztcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL1ZpZGVvUGxheWVyLmpzJztcblxudmFyIEFwcCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICA8ZGl2PjxoNT48ZW0+c2VhcmNoPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgey8qIDxkaXY+PGg1PjxlbT52aWRlb1BsYXllcjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj4gKi99XG4gICAgICAgIDxWaWRlb1BsYXllciB2aWRlbz17ZXhhbXBsZVZpZGVvRGF0YVswXX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgIHsvKiA8ZGl2PjxoNT48ZW0+dmlkZW9MaXN0PC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PiAqL31cbiAgICAgICAgPFZpZGVvTGlzdCB2aWRlb3M9e2V4YW1wbGVWaWRlb0RhdGF9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ==