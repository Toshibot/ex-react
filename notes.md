## React JS Learning Notes

Imperative Programming: Writing out step by step what to do. 
(like showing all working out of a mathematical problem)

Declarative Programming: Describing the final result and not the steps taken.
***
### Understanding JSX
Normal React Element Creation Syntax:
```
React.createElement('a', {
    href: "https://teamtreehouse.com"
}, "Treehouse");
```
JSX allows coders to use XML style syntax in writing Javascript.

Babel can compile JSX to Javascript

Layout and Behaviour code merged using JSX
***
### Our First Application
app.jsx
```
function Application() {
    return (
        <div>
            <h1>Hello from React</h1>
            <p>I was rendered from the Application component!</p>
        </div>
    );
}

ReactDOM.render(<Application />, document.getElementById('container'));
```
***
### React Developer Tools
[React Develper Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
***
### Mocking up our Application

***