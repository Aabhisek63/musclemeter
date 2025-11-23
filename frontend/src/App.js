

import './App.css';
import Navbar from './Elements/Navbar';
import Home from './Mainapp/Home'
import Signup from './Mainapp/Signup'
import Signin from './Mainapp/Signin'
import Ro from './Mainapp/Ro'
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Udash from './Userapp/Udash';
import Adlogin from './Mainapp/Adlogin';
import Notfound from './Mainapp/Notfound';
import Addash from './Adminapp/Addash';
import Viewuser from './Adminapp/Viewuser';
import Feed from './Userapp/Feed';
import ViewFeed from './Userapp/ViewFeed';
import ViewComplain from './Userapp/ViewComplain';
import ViewSuggestion from './Userapp/ViewSuggestion';
import ViewAdFeed from './Adminapp/ViewAdFeed';
import ViewAdComplain from './Adminapp/ViewAdComplain';
import ViewAdSuggestion from './Adminapp/ViewAdSuggestion';
import BeMember from './Userapp/BeMember';
import ViewAdMembership from './Adminapp/ViewAdMembership';
import ViewAdWorkout from './Adminapp/ViewAdWorkout';
import EditProfile from './Userapp/EditProfile';
import EditUser from './Adminapp/EditUser';
import Workout from './Mainapp/Workout';
function App() {
 
  return (   <>
  {/* outer start */}
    <div className="container-fluid"></div>
  

    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Ro' element={<Ro/>}/>
      <Route path='/User' element={<Udash/>}/>
      <Route path='/Workout' element={<Workout/>}/>
      <Route path='/EditProfile' element={<EditProfile/>}/>
      <Route path='/Adlogin' element={<Adlogin/>}/>
      <Route path='/Addash' element={<Addash/>}/>
      <Route path='/Viewuser' element={<Viewuser/>}/>
      <Route path='/Feed' element={<Feed/>}/>
      <Route path='/ViewFeed' element={<ViewFeed/>}/>
      <Route path='/ViewComplain' element={<ViewComplain/>}/>
      <Route path='/ViewSuggestion' element={<ViewSuggestion/>}/>
      <Route path='/ViewAdFeed' element={<ViewAdFeed/>}/>
      <Route path='/ViewAdComplain' element={<ViewAdComplain/>}/>
      <Route path='/ViewAdSuggestion' element={<ViewAdSuggestion/>}/>
      <Route path='/ViewAdMembership' element={<ViewAdMembership/>}/>
      <Route path='/ViewAdWorkout' element={<ViewAdWorkout/>}/>
      <Route path='/BeMember' element={<BeMember/>}/>
      <Route path='/EditUser' element={<EditUser/>}/>
      <Route path='/:404' element={<Notfound/>}/>


     
    </Routes>
    </BrowserRouter>


{/* outer end */}

   </>
  );
}

export default App;
