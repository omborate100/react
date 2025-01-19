/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello 1, world from React! 🚀</h1> 
 *          <h1>Hello 2, world from React! 🚀</h1>   
   
 *      </div>
 * </div>
 * 
 * ReactDom(object) => HTML       // render method is responsible to convert object to HTML
 * 
 */
const parent = React.createElement(
    'div', //tag
     {id: 'parent'},   //attributes
     React.createElement('div',{id:'child'},
        [
            React.createElement('h1', {id :"child"}, 'Hello 1, world from React! 🚀'), //content
            React.createElement('h1', {id :"child"}, 'Hello 2, world from React! 🚀') //content
        ]
     ));
console.log(parent);
const root = document.getElementById('root');
ReactDOM.render(parent, root); 