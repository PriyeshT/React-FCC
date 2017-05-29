JSX - syntax extension of JavaScript that allows you to write HTML directly within JS. 
To write JS in JSX, include the JS code in curly braces: {'this is treated as JS code'}.

Babel compiles your JSX code into JavaScript.

JSX should return a single element. This one parent element would wrap all of the other levels of nested elements.

To put comments in JSX, you use the syntax {/* comment here */}

ReactDOM - React's rendering API - used to render the JSX directly to the HTML DOM

ReactDOM offers a simple method to render React elements to the DOM:
ReactDOM.render(componentToRender, targetNode);

EXAMPLE:
const JSX = (
<div>
	<h1>Hello World</h1>
	<p>Lets render this to the DOM</p>
</div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'));

In JSX you can no longer use the word 'class' to define HTML classes. This is because, 'class' is a reserved keyword in JS. Instead, JSX uses 'className'.

The naming convention for all HTML attributes and event references in JSX becomes camelCase.
e.g. onclick -> onClick, onchange -> onChange

In JSX, any JSX element can be written with a self-closing tag, and every element must be closed. 