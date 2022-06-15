import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title,data,dataKey,grid}) => {
   
  return (
    <div className='mx-4 mt-10'>
        <h2 className='text-xl border-neutral-800 font-bold'>{title}</h2>
        <ResponsiveContainer className="" width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
              
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart