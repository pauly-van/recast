import searchYouTube from '../lib/searchYouTube.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.searchNewVideo(event.target.value);
  }

  render(props) {
    return React.createElement(
      'div',
      { className: 'search-bar form-inline' },
      React.createElement('input', { value: this.state.value, onChange: this.handleChange.bind(this), className: 'form-control', type: 'text' }),
      React.createElement(
        'button',
        { className: 'btn hidden-sm-down' },
        React.createElement('span', { className: 'glyphicon glyphicon-search' })
      )
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsic2VhcmNoWW91VHViZSIsIlNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwic2VhcmNoTmV3VmlkZW8iLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFQLE1BQTBCLHlCQUExQjs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQzs7QUFFbkNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFHRDs7QUFFREMsZUFBYUMsS0FBYixFQUFvQjtBQUNsQixTQUFLQyxRQUFMLENBQWMsRUFBQ0gsT0FBT0UsTUFBTUUsTUFBTixDQUFhSixLQUFyQixFQUFkO0FBQ0EsU0FBS0YsS0FBTCxDQUFXTyxjQUFYLENBQTBCSCxNQUFNRSxNQUFOLENBQWFKLEtBQXZDO0FBQ0Q7O0FBR0RNLFNBQU9SLEtBQVAsRUFBYztBQUNaLFdBQVE7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNOLHFDQUFPLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxLQUF6QixFQUFnQyxVQUFVLEtBQUtDLFlBQUwsQ0FBa0JNLElBQWxCLENBQXVCLElBQXZCLENBQTFDLEVBQXdFLFdBQVUsY0FBbEYsRUFBaUcsTUFBSyxNQUF0RyxHQURNO0FBRU47QUFBQTtBQUFBLFVBQVEsV0FBVSxvQkFBbEI7QUFDQSxzQ0FBTSxXQUFVLDRCQUFoQjtBQURBO0FBRk0sS0FBUjtBQU1EOztBQXhCa0M7QUEyQnJDO0FBQ0E7QUFDQSxlQUFlYixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZWFyY2hZb3VUdWJlIGZyb20gJy4uL2xpYi9zZWFyY2hZb3VUdWJlLmpzJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaE5ld1ZpZGVvKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuXG4gIHJlbmRlcihwcm9wcykge1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPiAgXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PiApO1xuICB9XG5cbn1cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0=