import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
export const ItemChart = (props: any) => {
    const data = props.grap;
    return (<div className='flex pt-6 justify-center'>
            <LineChart
                width={300}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pointName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="before" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="after" stroke="#82ca9d" />
            </LineChart>
    </div>
    )
}
