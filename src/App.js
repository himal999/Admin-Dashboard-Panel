import './index.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
   <div>
    <Topbar/>
    <div className='flex flex-row relative top-20'>
       <Sidebar/>
       <div className='flex-[6] bg-sky-500'>other</div>
    </div>

   

   </div>
  );
}

export default App;
