**Stateless Functional Component**

Components are core of React.

There are two ways to create a React Component.

1) **Javascript Function**
..* Component created in this way is called Stateless Functional Component. 
    Stateless Component is one that can receive data and render it, but does not manage or track changes to that data.

..* To create a component with a function, you simply write a JS function that returns a JSX element or null.
    The function name should begin with capital letter. (React Requirement)

EXAMPLE:
```
const DemoComponent = function() {
    return (
        <div className="customComponent"/>
    );
}
```

..* Because a JSX component represents HTML, you could put several components together to create a more complex HTML page.
    This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to maintain and build complex user interfaces.

2) **ES6 Class syntax**

EXAMPLE:
```
class Kitten extends React.Component {
    //Best Practice to call a component's constructor with super, and pass props to both
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hi</h1>
        );
    }
}
```

**Component with Composition**

Imagine you are building an App with 3 components, Navbar, Dashboard and Footer. To compose these components together, you could create an App parent component which renders each of these three components as _children_

```
return(
    <App>
        <Navbar />
        <Dashboard />
        <Footer />
    </App>
);
```

When React encounters a custom HTML tag that references another component, it renders the markup for that component in the location of the tag.

When you work in React it is important to start thinking about your user interface in terms of components. You break down your UI into basic building blocks, and those pieces become components. This helps to separate the code responsible for the UI from the code responsible for the application logic.

React components are passed to ReactDom's render method as follows:
```
ReactDOM.render(<ComponentToRender />, document.getElementById('component-node'));
```