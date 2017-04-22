var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message + '!!'} Can you even believe how jsx works?</p>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter name="Thomas" message="Message from prop!"/>,
  document.getElementById('app')
);
