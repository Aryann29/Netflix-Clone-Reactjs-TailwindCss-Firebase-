import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage.jsx";
import Getstarted from "./pages/Getstarted.jsx";
import Tvshow from "./pages/Tvshow";
import Movies from "./pages/Movies";
import Account from './pages/Account'
import { AuthContextProvider } from "./context/AuthContext.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  

  return (
    
    <div className="">
<AuthContextProvider>
      <Routes>
      <Route path="/" element={<Getstarted/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/signup" element={<Signuppage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute> }/>
        <Route path="/tvshows" element={<Tvshow/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
      </AuthContextProvider>
      
     
    </div>
  );
}

export default App;
