var names = ['Thomas', 'Doug', 'Ashley'];

names.forEach(function (name) {
  console.log('forEach', name);
});

// For multiple-line functions, use curly braces (statement)
names.forEach((name) => {
  console.log('arrowFunc', name);
})

// For single-line functions, no braces necessary (expression)
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Thomas'));

var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet()

function add(a, b) {
  return a + b;
}

console.log(add(3, 4));
console.log(add(7, 6));

// addStatement
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(5,6))

// addExpression
var addExpression = (a,b) => a + b;

console.log(addExpression(3,4))
