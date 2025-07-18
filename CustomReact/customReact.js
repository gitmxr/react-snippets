// function customRender(reactElement, container) {

//     // const domElement = document.createElement
//     // (reactElement.type);
//     // domElement.innerHTML =  reactElement.Children
//     // domElement.setAttribute('href', reactElement.props.href);
//     // domElement.setAttribute('target', reactElement.props.target);

//     // container.appendChild(domElement);

//     const domElement = document.createElement(reactElement.type);

//     domElement.innerHTML = reactElement.Children;
//     for(const prop in reactElement.props) {
//         if( prop === 'Children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop]);
//     } 

//     container.appendChild(domElement);

// }
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     Children: 'Click me to visit Google',
// } 

// // const mainContainer = document.getElementById('root')
// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)


const reactElement = {
    type: "dev",
    props: {
      
    },
}


const mainContainer = doccument.querrySelector('#root')
