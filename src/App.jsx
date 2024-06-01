
import './App.css'
import Todos from './component/Todos';
import './index.css';

function App() {
  
  return (
    <>
      <div className='title'>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Todo App &nbsp;</span>
          with React Redux and React Toolkit</h1>
      </div>
      <Todos />
    </>
  )
}

export default App
