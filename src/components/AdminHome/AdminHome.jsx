/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })

    // custom shape for the barChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pieChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.name, value: data.totalRevenue }
    })

    return (
        <div className="py-[50px]">
            <div className="pb-6">
                <h1 className="text-3xl text-[#151515] font-semibold">Hi, Welcome {user?.displayName ? user?.displayName : "Back"}</h1>
            </div>

            <div className="flex gap-6 items-center">
                <div className="grid grid-cols-4 gap-6">
                    {/* Revenue Card */}
                    <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-14 py-8 text-white rounded-lg">
                        <div>
                            <IoWalletSharp className="text-5xl" />
                        </div>
                        <div>
                            <h1 className="text-[40px] font-extrabold">${stats.totalRevenue}</h1>
                            <h3 className="text-2xl font-normal">Revenue</h3>
                        </div>
                    </div>
                    {/* Customer Card */}
                    <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-14 py-8 text-white rounded-lg">
                        <div>
                            <FaUsers className="text-5xl" />
                        </div>
                        <div>
                            <h1 className="text-[40px] font-extrabold">{stats.users}</h1>
                            <h3 className="text-2xl font-normal">Customers</h3>
                        </div>
                    </div>
                    {/* Products Card */}
                    <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-14 py-8 text-white rounded-lg">
                        <div>
                            <LuChefHat className="text-5xl" />
                        </div>
                        <div>
                            <h1 className="text-[40px] font-extrabold">{stats.menus}</h1>
                            <h3 className="text-2xl font-normal">Products</h3>
                        </div>
                    </div>
                    {/* Orders Card */}
                    <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] px-14 py-8 text-white rounded-lg">
                        <div>
                            <TbTruckDelivery className="text-5xl" />
                        </div>
                        <div>
                            <h1 className="text-[40px] font-extrabold">{stats.orders}</h1>
                            <h3 className="text-2xl font-normal">Orders</h3>
                        </div>
                    </div>

                </div>
            </div>

            {/* Charts */}
            <div className="flex bg-white p-8 my-8">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div>
                    <PieChart width={700} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend verticalAlign="top"/>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;