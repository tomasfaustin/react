var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  render: function() {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>This is from the component! Can you even believe how jsx works?</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Thomas"/>,
  document.getElementById('app')
);
