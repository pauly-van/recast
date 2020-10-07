import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';

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
      React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          null,
          React.createElement(
            'em',
            null,
            'videoPlayer'
          ),
          ' view goes here'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col-md-5' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          null,
          React.createElement(
            'em',
            null,
            'videoList'
          ),
          ' view goes here'
        )
      ),
      React.createElement(VideoList, { videos: exampleVideoData })
    )
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIkFwcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7O0FBRUEsSUFBSUMsTUFBTSxNQUNSO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUo7QUFBQTtBQUFBO0FBQUw7QUFERjtBQURGLEdBREY7QUFNRTtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUo7QUFBQTtBQUFBO0FBQUw7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFKO0FBQUE7QUFBQTtBQUFMLE9BREY7QUFFRSwwQkFBQyxTQUFELElBQVcsUUFBUUYsZ0JBQW5CO0FBRkY7QUFKRjtBQU5GLENBREY7O0FBbUJBO0FBQ0E7QUFDQSxlQUFlRSxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlVmlkZW9EYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qcyc7XG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJy4vVmlkZW9MaXN0LmpzJztcblxudmFyIEFwcCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICA8ZGl2PjxoNT48ZW0+c2VhcmNoPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgPGRpdj48aDU+PGVtPnZpZGVvUGxheWVyPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgIDxkaXY+PGg1PjxlbT52aWRlb0xpc3Q8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+XG4gICAgICAgIDxWaWRlb0xpc3QgdmlkZW9zPXtleGFtcGxlVmlkZW9EYXRhfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG4iXX0=