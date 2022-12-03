import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
export const ItemChart = (props: any) => {

    const data = [
        {
            name: 'A',
            uv: 4000,
            pv: 2400,
        },
        {
            name: 'B',
            uv: 3000,
            pv: 1398,
        },
        {
            name: 'C',
            uv: 2000,
            pv: 9800,
        },
        {
            name: 'D',
            uv: 2780,
            pv: 3908,
        },
        {
            name: 'E',
            uv: 1890,
            pv: 10000, 
        },
        {
            name: 'F',
            uv: 2390,
            pv: 3800,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
        },
    ];
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
    </div>
    )
}
