import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { DashBoard } from './pages/dashboard'
import { SendMoney } from './pages/sendmoney' 

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/send' element={<SendMoney/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
