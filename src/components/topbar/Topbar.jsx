import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
  return (
    <div className='flex flex-row w-full justify-between items-center p-4   shadow-xl '>
        <div className=' text-3xl flex flex-row justify-center items-center'>
          <h2>Admin</h2>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-row text-4xl   justify-center items-center relative  text-gray-700'>
                <NotificationsIcon className='mx-2'/>
                <span className=' absolute w-8 h-7 -top-2 bg-red-600 rounded-full overflow-hidden left-4 text-sm flex justify-center items-center text-white p-1'>+100</span>
                <LanguageIcon  className='mx-2'/>
                <span className=' absolute w-8 h-7 -top-2 bg-red-600 rounded-full overflow-hidden left-14 text-sm flex justify-center items-center text-white p-1'>+100</span >
                <SettingsIcon  className='mx-2'/>
                <div className='w-12 h-12 rounded-full bg-slate-700 mx-2'></div>
            </div>
        </div>
    </div>
  )
}

export default Topbar