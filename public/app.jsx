var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message + '!!'} Can you even believe how jsx works?</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter name="Thomas" message="Message from prop!"/>,
  document.getElementById('app')
);