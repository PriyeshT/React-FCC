**Stateful Component**

One of the most important topic in React is *State*. State consists of any data that your application needs to be aware of,that can change over the time. You want your app to respond to state changes and update the UI whenever necessary.

You create state in React component by declaring a *state* property on the component class in its *constructor*. This initializes the component with *state* when it is created.

```
this.state = {
    //describe your state here
}
```

You have access to your state object throughout the life of your component. 

You can render the data in the state object in the render() method using *this.state*

If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.

*State* is the most powerful features of Components in React. It allows you to track important data in your app and render a UI in response to changes in data. 

When state data changes, it trigers a re-render of the components using that data - including child components that receive data as prop. 

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to component, unless you pass it as props to child components.

Another way to access *state* in a component:
In *render()* method, before the *return* statement, you can write JS directly. 

*this.setState*
React provides a method for updating components *state* called *setState*. (this.setState)

```
this.setState({
    name: "Priyesh Tungare"
});
```

React expects you to never modify the state directly, instead always use *this.setState*. 
**NOTE:** state updates through *this.setState* may be asynchronous.

**Bind 'this' to class method**
In addtion to setting and updating state, you can also define methods for your component class. A class method typically needs to use *this* keyword so that it can access properties on class (state or props).

One way is to explicitly bind *this* in the constructor so *this* becomes bound to the class methods when the component is initialized. 
```
this.click = this.clicked.bind(this);
//here clicked is a method defined for the component. This method can be called from render using this.click
```

**Bind 'this' with ES6 Arrow Function**
Another useful, concise way is to use ES6 Arrow function. Arrow functions do not assign its own value to *this*, but instead adopt the value of *this* from the context in which the function is written.


