import './index.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'

function App() {
  return (
   <div>
    <Topbar/>
    <div className='flex flex-row relative top-20'>
       <Sidebar/>
      <Home/>
    </div>

   

   </div>
  );
}

export default App;
