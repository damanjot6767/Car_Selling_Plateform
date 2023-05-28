import './App.css';
import { BrowserRouter } from "react-router-dom"
import { useSelector } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import AppRoute from './routes';
import Dashboard from './components/sidenav';
import { validateUserType } from './ValidateUserType';


function App() {
  const { isLoggedIn:isLoggedIn1 } = useSelector(({dealers})=>dealers)
  const { isLoggedIn } = useSelector(({users})=>users)
  return (
     <>        
    <BrowserRouter>  
     {isLoggedIn||isLoggedIn1?<Dashboard/>:<AppRoute/>}                            
      <NotificationContainer />    
      </BrowserRouter>   
</>
  );
}

export default App;
