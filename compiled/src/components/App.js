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
      React.createElement(VideoList, { videos: exampleVideoData })
    )
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIkFwcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7O0FBRUEsSUFBSUMsTUFBTSxNQUNSO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUo7QUFBQTtBQUFBO0FBQUw7QUFERjtBQURGLEdBREY7QUFNRTtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUo7QUFBQTtBQUFBO0FBQUw7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmO0FBRUUsMEJBQUMsU0FBRCxJQUFXLFFBQVFGLGdCQUFuQjtBQUZGO0FBSkY7QUFORixDQURGOztBQW1CQTtBQUNBO0FBQ0EsZUFBZUUsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhhbXBsZVZpZGVvRGF0YSBmcm9tICcuLi9kYXRhL2V4YW1wbGVWaWRlb0RhdGEuanMnO1xuaW1wb3J0IFZpZGVvTGlzdCBmcm9tICcuL1ZpZGVvTGlzdC5qcyc7XG5cbnZhciBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgPGRpdj48aDU+PGVtPnNlYXJjaDwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgIDxkaXY+PGg1PjxlbT52aWRlb1BsYXllcjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICB7LyogPGRpdj48aDU+PGVtPnZpZGVvTGlzdDwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj4gKi99XG4gICAgICAgIDxWaWRlb0xpc3QgdmlkZW9zPXtleGFtcGxlVmlkZW9EYXRhfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG4iXX0=