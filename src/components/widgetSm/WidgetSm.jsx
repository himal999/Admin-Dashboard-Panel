import VisibilityIcon from '@mui/icons-material/Visibility';
const WidgetSm = () => {
  return (
    <div className='flex-[2]  mx-4  mt-10  border-r-[1px] border-gray-500'>
      <h2 className='text-xl border-neutral-800 font-bold mb-4'>Recent New Members</h2>
      <div className='overflow-y-auto h-[30vh]'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <div className='flex flex-row'>
          <div className='w-14 h-14 bg-zinc-800 rounded-full'></div>
          <div className='flex flex-col'>
            <h3 className='text-black text-2xl mx-3'>Himal S</h3>
            <p className='mx-3 text-gray-500'>Softweare Engineer</p>
          </div>
        </div>
        <div className='flex flex-row  text-gray-500'>
            <VisibilityIcon className='mr-1'/>
            <p className='mr-4'>Display</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between mb-4'>
        <div className='flex flex-row'>
          <div className='w-14 h-14 bg-zinc-800 rounded-full'></div>
          <div className='flex flex-col'>
            <h3 className='text-black text-2xl mx-3'>Ranil Wichramasinghe S</h3>
            <p className='mx-3 text-gray-500'>Softweare Engineer</p>
          </div>
        </div>
        <div className='flex flex-row  text-gray-500'>
            <VisibilityIcon className='mr-1'/>
            <p className='mr-4'>Display</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between mb-4'>
        <div className='flex flex-row'>
          <div className='w-14 h-14 bg-zinc-800 rounded-full'></div>
          <div className='flex flex-col'>
            <h3 className='text-black text-2xl mx-3'>Manind Rajapaksha</h3>
            <p className='mx-3 text-gray-500'>Softweare Engineer</p>
          </div>
        </div>
        <div className='flex flex-row  text-gray-500'>
            <VisibilityIcon className='mr-1'/>
            <p className='mr-4'>Display</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between mb-4'>
        <div className='flex flex-row'>
          <div className='w-14 h-14 bg-zinc-800 rounded-full'></div>
          <div className='flex flex-col'>
            <h3 className='text-black text-2xl mx-3'>Namal Rajapaksh</h3>
            <p className='mx-3 text-gray-500'>Softweare Engineer</p>
          </div>
        </div>
        <div className='flex flex-row  text-gray-500'>
            <VisibilityIcon className='mr-1'/>
            <p className='mr-4'>Display</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between mb-4'>
        <div className='flex flex-row'>
          <div className='w-14 h-14 bg-zinc-800 rounded-full'></div>
          <div className='flex flex-col'>
            <h3 className='text-black text-2xl mx-3'>Gotabaya Rajapaksha</h3>
            <p className='mx-3 text-gray-500'>Softweare Engineer</p>
          </div>
        </div>
        <div className='flex flex-row  text-gray-500'>
            <VisibilityIcon className='mr-1'/>
            <p className='mr-4'>Display</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default WidgetSm