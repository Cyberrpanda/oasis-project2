import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-sky-500">
          Tailwind v4 is live!
        </h1>
      </div>
      
    </>
  )
}

export default App
