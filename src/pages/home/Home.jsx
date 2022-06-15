import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Chart from '../../components/chart/Chart';
import '../../index.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className='flex-[6]'>
        <div className='flex flex-row mt-10 p-4 justify-around items-center border-[1px] border-neutral-300 mx-4'>
            <div className='flex flex-col'>
                <h3 className='text-3xl text-slate-700 mb-3'>Revanue</h3>
                <div className='flex flex-row items-center mb-3'>
                    <h4 className='text-3xl text-black mr-4'>$1,240</h4>
                    <p className='mr-2'>$ -11.04</p>
                    <span className='text-red-500'><ArrowDownwardIcon/></span>
                </div>
                <p className='text-slate-800'>compare to last month</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-3xl text-slate-700 mb-3'>Sales</h3>
                <div className='flex flex-row items-center mb-3'>
                    <h4 className='text-3xl text-black mr-4'>$23,240</h4>
                    <p className='mr-2'>$ -2.04</p>
                    <span className='text-red-500'><ArrowDownwardIcon/></span>
                </div>
                <p className='text-slate-800'>compare to last month</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-3xl text-slate-700 mb-3'>Cost</h3>
                <div className='flex flex-row items-center mb-3'>
                    <h4 className='text-3xl text-black mr-4'>$3,240</h4>
                    <p className='mr-2'>$ + 0.5</p>
                    <span className=' text-blue-800'><ArrowUpwardIcon/></span>
                </div>
                <p className='text-slate-800'>compare to last month</p>
            </div>
        </div>
        <Chart data={userData} title="User  Analytics" grid dataKey="Active User"/>
        <div className='flex'>
            <WidgetSm/>
            <WidgetLg/>
        </div>
    </div>
  )
}

export default Home