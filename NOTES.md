# Notes for personal use

1. ```jsx
   return (
     <div className="App">
       <h1>React app test!</h1>
     </div>
   );
   ```
2. ```jsx
   return React.createElement(
     "div",
     { className: "App" },
     React.createElement("h1", null, "React app test!")
   );
   ```

- 1&2 are equal;
- 1->2 ( JSX[HTML]->JS ), not JSX->HTML.

---

1. ```jsx
   <Person children="123" />
   ```
2. ```jsx
   <Person>123</Person>
   ```

- 1&2 are equal;
- Both can be accessed from component via `props.children`.
