import { Link } from 'react-router'
import './App.css'
import Kit from './components/home/Kit'


function App() {
  return (
    <div className='flex flex-col gap-5'>
      {/* <Link to='/ui' className='flex flex-col text-2xl text-blue-600 text-center justify-center'>See UI</Link> */}
      <div>
        <Kit/>
      </div>
    </div>
  )
}

export default App
