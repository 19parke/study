1. What is a React component?

A function that returns React elements. (UI)

A React Component is a "block" of one thing that can do one function.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The function name needs to be in Pascal Case. MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
Instead of Header() , for a react component , you need to use the angle brackets like this <Header />