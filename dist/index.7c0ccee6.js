// attributes for h1 here can be given in the 2nd parameter, object as comma separated key-value pair
// 3rd element here is known as the children and both the 2nd and 3rd comes under props.
// this heading returns an obj created by react with a lot of properties.
// heading can be treated as a react element which becomes HTML that the browser understands
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// this line puts the obj created earlier in the DOM
root.render(heading);
// creating nested elements using above method
/*
<div id="parent">
  <div id="child">
    <h1>I'm H1 tag!</h1>
  </div>
</div>
*/ // creating the above HTML structuring
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I'm h1 tag!")));
// rendering the above react element to the DOM
root.render(parent);
// now, if we want to create more than 1 child ie, give details for more than 1 child in the 3rd parameter, then we can pass an array for creating sibling elements.
/*
<div id="parent">
  <div id="child">
    <h1>I'm H1 tag!</h1>
    <h2>I'm H2 tag!</h2>
  </div>
</div>
*/ const parent2 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I'm h1 tag!"),
    React.createElement("h2", {}, "I'm h2 tag!")
]));
root.render(parent2);
// Now this is getting complex, hence JSX comes into play.
// But this is how core react works (as shown above)
// this render would overwrite the above render.
// applicable to all the other renders
// will replace html content also, if exists under the root.
// also, only the contents of root will be replaced
root.render(parent); // we wrote the above code without using that npm react and all.

//# sourceMappingURL=index.7c0ccee6.js.map
