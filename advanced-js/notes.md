You can inject JS code into JSX using curly braces, *{}*..
You can also write JS code in *render* method before the *return* statement, without inserting it inside of curly braces.

- if/else conditions in render method to render UI based on the conditions

- *&&* for more concise conditional
    You can use the *&&* logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, then render some UI.

    Example:
    ```
    {condition && <h1>Markup</h1>}
    ```

- Return null to prevent rendering
    React won't render a component, if that components *render()* method returns *null*

- Use a Ternary expression for conditional rendering

- Render conditionally from props