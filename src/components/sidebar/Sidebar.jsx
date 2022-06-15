import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReportIcon from '@mui/icons-material/Report';
import EmailIcon from '@mui/icons-material/Email';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
const Sidebar = () => {
  return (
    <div className=" flex-[1]  text-stone-700 overflow-y-auto h-[91.7vh]">
      <div className='flex flex-col mx-4 mt-6'>
        <h2 className=' text-gray-700 text-2xl'>Dashboard</h2>
        <ul className=' mx-4 text-xl flex flex-col items-start mt-1'>
          <li className='mt-2 flex flex-row justify-center items-center'><HomeIcon className='mr-1'/><a>Home</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><InsightsIcon className='mr-1'/><a>Analytics</a></li>
          <li className='mt-2 flex flex-row justify-center items-center mb-3'><BarChartIcon className='mr-1'/><a>Sales</a></li>
        </ul>
      </div>
      <div className='flex flex-col mx-4'>
        <h2 className=' text-gray-700 text-2xl'>Quick Menu</h2>
        <ul className=' mx-4 text-xl flex flex-col items-start mt-1'>
          <li className='mt-2 flex flex-row justify-center items-center'><PersonIcon className='mr-1'/><a>Users</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><StorefrontIcon className='mr-1'/><a>Products</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><CurrencyExchangeIcon className='mr-1'/><a>Transtractions</a></li>
          <li className='mt-2 flex flex-row justify-center items-center mb-3'><ReportIcon className='mr-1'/><a>Reports</a></li>
        </ul>
      </div>
      <div className='flex flex-col mx-4'>
        <h2 className=' text-gray-700 text-2xl'>Notifications</h2>
        <ul className=' mx-4 text-xl flex flex-col items-start mt-1'>
          <li className='mt-2 flex flex-row justify-center items-center'><EmailIcon className='mr-1'/><a>Mail</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><ThumbUpAltIcon className='mr-1'/><a>Feedbacks</a></li>
          <li className='mt-2 flex flex-row justify-center items-center mb-3'><ChatIcon className='mr-1'/><a>Messages</a></li>
        </ul>
      </div>
      <div className='flex flex-col mx-4'>
        <h2 className=' text-gray-700 text-2xl'>Staff</h2>
        <ul className=' mx-4 text-xl flex flex-col items-start mt-1'>
          <li className='mt-2 flex flex-row justify-center items-center'><ManageAccountsIcon className='mr-1'/><a>Manage</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><CandlestickChartIcon className='mr-1'/><a>Analytics</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><ReportIcon className='mr-1'/><a>Reports</a></li>
        </ul>
      </div>
      <div className='flex flex-col mx-4'>
        <h2 className=' text-gray-700 text-2xl'>Staff</h2>
        <ul className=' mx-4 text-xl flex flex-col items-start mt-1'>
          <li className='mt-2 flex flex-row justify-center items-center'><ManageAccountsIcon className='mr-1'/><a>Manage</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><CandlestickChartIcon className='mr-1'/><a>Analytics</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><ReportIcon className='mr-1'/><a>Reports</a></li>
        </ul>
      </div>
      <div className='flex flex-col mx-4'>
        <h2 className=' text-gray-700 text-2xl'>Staff</h2>
        <ul className=' mx-4 text-xl flex flex-col items-start mt-1'>
          <li className='mt-2 flex flex-row justify-center items-center'><ManageAccountsIcon className='mr-1'/><a>Manage</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><CandlestickChartIcon className='mr-1'/><a>Analytics</a></li>
          <li className='mt-2 flex flex-row justify-center items-center'><ReportIcon className='mr-1'/><a>Reports</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar