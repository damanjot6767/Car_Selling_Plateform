import './App.css';
import { BrowserRouter } from "react-router-dom"
import { useSelector } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


function App() {
 
  return (
     <>        
    <BrowserRouter>                          
      <NotificationContainer />             
      </BrowserRouter>   
</>
  );
}

export default App;
