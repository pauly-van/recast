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
      React.createElement('input', { value: this.state.value, onChange: this.handleChange.bind(this), className: 'form-control', type: 'text' })
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsic2VhcmNoWW91VHViZSIsIlNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwic2VhcmNoTmV3VmlkZW8iLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFQLE1BQTBCLHlCQUExQjs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQzs7QUFFbkNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFHRDs7QUFFREMsZUFBYUMsS0FBYixFQUFvQjtBQUNsQixTQUFLQyxRQUFMLENBQWMsRUFBQ0gsT0FBT0UsTUFBTUUsTUFBTixDQUFhSixLQUFyQixFQUFkO0FBQ0EsU0FBS0YsS0FBTCxDQUFXTyxjQUFYLENBQTBCSCxNQUFNRSxNQUFOLENBQWFKLEtBQXZDO0FBQ0Q7O0FBR0hNLFNBQU9SLEtBQVAsRUFBYTtBQUNYLFdBQVE7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNOLHFDQUFPLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxLQUF6QixFQUFnQyxVQUFVLEtBQUtDLFlBQUwsQ0FBa0JNLElBQWxCLENBQXVCLElBQXZCLENBQTFDLEVBQXdFLFdBQVUsY0FBbEYsRUFBaUcsTUFBSyxNQUF0RztBQURNLEtBQVI7QUFNRDs7QUF4Qm9DO0FBMkJyQztBQUNBO0FBQ0EsZUFBZWIsTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VhcmNoWW91VHViZSBmcm9tICcuLi9saWIvc2VhcmNoWW91VHViZS5qcyc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaE5ld1ZpZGVvKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuXG5yZW5kZXIocHJvcHMpe1xuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNlYXJjaE5ld1ZpZGVvKGV2ZW50LCB0aGlzLnN0YXRlLnZhbHVlKX0+ICAqL31cbiAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj4gKi99XG4gICAgey8qIDwvYnV0dG9uPiAqL31cbiAgPC9kaXY+ICk7XG59XG5cbn1cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0=