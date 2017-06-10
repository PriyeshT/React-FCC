To apply inline styles to JSX element :

```
<div {style={{color: "red", fontSize: 72}}}> Big Red </div>
```

Hyphenated values like font-size are invalid JS properties and hence React uses camelCase for any such properties.
Length units (like height, width, fontSize) are assumed to be in px unless otherwise specified. If you want to use *em*, you need to wrap the values in quotes like *fontSize: "4em"*

You can save the style properties in JS object and then use the object to apply the styles.