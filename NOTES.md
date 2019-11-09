# Notes for personal use

1. ```jsx
    return (
        <div className="App">
            <h1>
                React app test!
            </h1>
        </div>
    );
    ```
2. ```jsx
    return React.createElement(
        'div',
        {className: 'App'},
        React.createElement(
            'h1',
            null,
            'Hi, just testing!\nyo'
        )
    )
    ```

- 1&2 are equal;
- 1->2 ( JSX[HTML]->JS ), not JSX->HTML.