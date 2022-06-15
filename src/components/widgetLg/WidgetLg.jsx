

const WidgetLg = () => {
  return (
    <div className='flex-[4] mr-4 mt-10'>
       <h2 className='text-xl border-neutral-800 font-bold mb-4'>Recent Transtractions</h2>
      <div className='h-[30vh] overflow-y-auto'>
      <table class=" table-auto">
  <thead>
    <tr className='item-start'>
      <th className='w-[500px]'>Customer</th>
      <th className='w-[200px]'>Date</th>
      <th className='w-[200px]'> Amount</th>
      <th className='w-[200px]'>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='text-2xl pb-4'>
        <div className='flex flex-row items-center '>
        <div className='w-10 h-10 bg-red-500 rounded-full mr-4'></div>Namala Rajapaksha
        </div>
      </td>
      <td className='text-xl'>2022/06/13</td>
      <td className='text-xl'>$12,000.00</td>
      <td><button className='bg-sky-100 p-2 rounded-full text-sky-600'>Pending</button></td>
    </tr>
    <tr>
      <td className='text-2xl pb-4'>
        <div className='flex flex-row items-center '>
        <div className='w-10 h-10 bg-red-500 rounded-full mr-4'></div>Nimal Perera
        </div>
      </td>
      <td className='text-xl'>2022/06/13</td>
      <td className='text-xl'>$1,000.00</td>
      <td><button className=' bg-yellow-200 p-2 rounded-full text-yellow-600'>Accept</button></td>
    </tr>
    <tr>
      <td className='text-2xl pb-4'>
        <div className='flex flex-row items-center '>
        <div className='w-10 h-10 bg-red-500 rounded-full mr-4'></div>Sunil Aththanayake
        </div>
      </td>
      <td className='text-xl'>2022/06/13</td>
      <td className='text-xl'>$100.00</td>
      <td><button className=' bg-red-200 p-2 rounded-full text-red-600'>Decined</button></td>
    </tr>
    <tr>
      <td className='text-2xl pb-4'>
        <div className='flex flex-row items-center '>
        <div className='w-10 h-10 bg-red-500 rounded-full mr-4'></div>Kavisk gimhan
        </div>
      </td>
      <td className='text-xl'>2022/06/13</td>
      <td className='text-xl'>$20.00</td>
      <td><button className=' bg-green-200 p-2 rounded-full text-green-600'>Refund</button></td>
    </tr>
    <tr>
      <td className='text-2xl pb-4'>
        <div className='flex flex-row items-center '>
        <div className='w-10 h-10 bg-red-500 rounded-full mr-4'></div>Nuwan Lakshan
        </div>
      </td>
      <td className='text-xl'>2022/06/14</td>
      <td className='text-xl'>$560.00</td>
      <td><button className='bg-sky-100 p-2 rounded-full text-sky-600'>Pending</button></td>
    </tr>
    <tr>
      <td className='text-2xl pb-4'>
        <div className='flex flex-row items-center '>
        <div className='w-10 h-10 bg-red-500 rounded-full mr-4'></div>Nethmi Piers
        </div>
      </td>
      <td className='text-xl'>2022/06/13</td>
      <td className='text-xl'>$450.00</td>
      <td><button className=' bg-yellow-200 p-2 rounded-full text-yellow-600'>Accept</button></td>
    </tr>
   
    
  </tbody>
</table>
      </div>
    </div>
  )
}

export default WidgetLg