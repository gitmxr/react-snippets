import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white">
        <button onClick={() => setColor('Red')}
         className='text-white outline-none rounded-2xl p-2 m-2 gap-2'
         style={{backgroundColor: "Red"}}>Red</button>
        <button onClick={() => setColor('Green')}
         className='text-white outline-none rounded-2xl p-2 m-2 gap-2'
         style={{backgroundColor: "Green"}}>Green</button>
        <button onClick={() => setColor('Blue')}
         className='text-white outline-none rounded-2xl p-2 m-2 gap-2'
         style={{backgroundColor: "Blue"}}>Blue</button>
        <button onClick={() => setColor('Gold')}
         className='text-white outline-none rounded-2xl p-2 m-2 gap-2'
         style={{backgroundColor: "Gold"}}>Gold</button>
        <button onClick={() => setColor('Purple')}
         className='text-white outline-none rounded-2xl p-2 m-2 gap-2'
         style={{backgroundColor: "Purple"}}>Purple</button>
       </div>
      </div>
    </>
  )
}

export default App

// import { useState } from "react"


// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           onClick={() => setColor("red")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button>
//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >Green</button>
//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >Blue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App