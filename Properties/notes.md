In React, you can pass props or Properties to child components.

Example:
```
<App>
    <Welcome user="Mark" />
</App>
```

Access the properties in components like so:
```
const Welcome = (props) => <h1>Hello, {props.user}! </h1>
```

String can be passed as props value in quotes, but you need to wrap array value as Javascript ({array}).

React also has an option to set *default props*. You can assign default props to a component as a property on the component itself and React assigns the default prop if neccessary. This allows you to specify what a prop value should be if no value is explicitly specified. 

React assigns default props if props are undefined, but if you pass null as value for a prop, null will be assigned.

You can override default values for a component.

```
MyComponent.defaultProps = {
    name: "Welcome to React"
}
```

**PropTypes**
React provides useful type-checking feature to verify that components receive props of the correct type. 

It's considered a best practice to define propTypes when you know the type of a prop ahead of time. You can define propTypes on a component in same way you define defaultProps.

```
MyComponent.propTypes = {
    handleClick: PropTypes.func.isRequired
}
```

**Access properties using this.props**
ES6 class components uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with *this*.

```
{this.props.data}
```

A *stateless functional component* is any function you write which accepts props and returns JSX. A *stateless componet* is a class that extends React.Component, but does not use internal state. A *stateful component* is any component that maintains its own internal state.

A common pattern is to minimize statefulness and try to create stateless functional components wherever possible. 