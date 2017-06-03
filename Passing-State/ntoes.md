A common pattern in React is to have a stateful component containing the *state* important to your app, that then renders the child components.

Example:
Suppose you have an App component that renders Navbar. In the App component, you have *state* that contains lot of user information. But in your Navbar, you only need username so that it can display it. You can pass that piece of *State* to the Navbar component as *prop*.

**Unidirectional Flow**
The *state* in React flows in one direction down the tree of your application's components, from the stateful parent component to child components. 

Complex stateful apps can be broken down into just a few, or maybe single, stateful component. The rest of your components simply receive state from parents as prop, and render a UI from that state.

**Passing callback as props**
You can pass state as props to child components, but you are not limited to passing data. You can pass handler functions or any methods defined on React Component to child components.