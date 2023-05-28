import { useSelector } from "react-redux"
import Login from "../components/auth/login"
import { Route, Routes } from "react-router-dom"
import Register from "../components/auth/signup"
import NotFound from "../components/auth/notfound"
import { validateUserType } from "../ValidateUserType"
import DealerHomePage from "../components/dealer/dealerHomePage"
import AddCar from "../components/dealer/addCar"

const AppRoute = () => {

  const { isLoggedIn:isLoggedIn1 } = useSelector(({dealers})=>dealers)
  const { isLoggedIn } = useSelector(({users})=>users)
    return (
      <div style={{height:"100%"}}>
      <Routes >
        {
          isLoggedIn||isLoggedIn1 ?
        <>
        <Route path = "/dealerHomePage" element={<DealerHomePage/>}/>
        <Route path = "/addCar" element={<AddCar/>}/>
        </>:
          <>
          <Route path = "/" element={<Login/>}/>
          <Route path = "/signup" element={<Register/>}/>
          <Route path = "*" element={<NotFound/>}/>
          </>       
        }      
      </Routes>
      </div>
    )
  }
  
  export default AppRoute