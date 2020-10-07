var VideoList = props => React.createElement(
  'div',
  { className: 'video-list' },
  props.videos.map(item => React.createElement(
    'div',
    null,
    React.createElement(
      'h5',
      null,
      React.createElement(
        'em',
        null,
        item.snippet.title
      )
    ),
    item.snippet.description
  ))
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdC5qc3giXSwibmFtZXMiOlsiVmlkZW9MaXN0IiwicHJvcHMiLCJ2aWRlb3MiLCJtYXAiLCJpdGVtIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsWUFBYUMsS0FBRCxJQUNkO0FBQUE7QUFBQSxJQUFLLFdBQVUsWUFBZjtBQUNHQSxRQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJDLFFBQU87QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUtBLGFBQUtDLE9BQUwsQ0FBYUM7QUFBbEI7QUFBSixLQUFMO0FBQTRDRixTQUFLQyxPQUFMLENBQWFFO0FBQXpELEdBQXhCO0FBREgsQ0FERjs7QUFNQTtBQUNBO0FBQ0FQLFVBQVVRLFNBQVYsR0FBc0I7QUFDcEJOLFVBQVFPLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXRCOztBQUlBO0FBQ0E7QUFDQSxlQUFlWixTQUFmIiwiZmlsZSI6IlZpZGVvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb0xpc3QgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0XCI+XG4gICAge3Byb3BzLnZpZGVvcy5tYXAoaXRlbT0+KDxkaXY+PGg1PjxlbT57aXRlbS5zbmlwcGV0LnRpdGxlfTwvZW0+PC9oNT57aXRlbS5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PikpfVxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGUuXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZC5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvTGlzdDtcbiJdfQ==