const element = React.createElement('h1', {className: 'greeting'}, 'Hello, world from React! 🚀🚀');

console.log(element); // Its an object

const root = document.getElementById('root');
ReactDOM.render(element, root);