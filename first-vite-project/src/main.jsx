import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Hello, World!</h1> 
      <p>This is my first Vite project!</p>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     Children: 'Click me to visit Google',
// } 

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to visit Google
  </a>
)

const anotherUser ="Code with chai"
const ReactElement =React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
