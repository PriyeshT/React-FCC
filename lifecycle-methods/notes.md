React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called *lifecycle methods* or *lifecycle hooks*, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. 

List of main lifecycle methods:

*componentWillMount*
*componentDidMount*
*componentWillReceiveProps*
*shouldComponentUpdate*
*componentWillUpdate*
*componentDidUpdate*
*componentWillUnmount*

The *componentWillMount* method is called before the *render()* method when a component is being mounted to the DOM. 

The best practice with React is to place API calls or any calls to the server in the lifecycle method *componentDidMount()*
This method is called after the component is mounted to the DOM. Any calls to *setState()* here will trigger re-rendering of your component. When you call an API in this method and set your state with the data returned, it will automatically trigger an update once you receive the data.

This method is also a best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the browsers native event system. React's synthetic event system behaves exactly the same regardless of user's browser - even if the native events may behave differently between the browsers.

**NOTE** - Always remember to clean up the event listeners in *componentWillMount* method. It is considered a good practice to clean the React components before they are unmounted and destroyed.

*componentWillReceiveProps* is called whenever a component receives props. 
*componentDidUpdate* is immediately called after a component re-renders.

*Note* rendering and mounting are considered two different things in the component lifecycle. 
When page first loads, components are mounted, and this is where *componentWillMount* and *componentDidMount* methods are called. After this as state changes, component re-renders themselves. 

*shouldComponentUpdate*
React provides a lifecycle method you can call when child components receive new *state* or *props*, and declare specifically if the components should update or not. This methods takes *nextProps* and *nextState* as parameters.

