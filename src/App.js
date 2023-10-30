import { ToastContainer } from 'react-toastify'
import './App.css'
import { Routes } from './routes'

const App = () => {
  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes />
    </div>
  )
}

export default App