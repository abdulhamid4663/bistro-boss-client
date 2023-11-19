import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import SectionHeading from "../Shared/Section_Heading/SectionHeading";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div className="py-8">
            <div>
                <SectionHeading subTitle='---At a Glance!---' title='PAYMENT HISTORY' />
            </div>
            <div className="bg-white p-12">
                <div>
                    <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total Payments: {payments?.length}</h1>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>EMAIL</th>
                                    <th>TOTAL PRICE</th>
                                    <th>PAYMENT DATE</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments?.map((payment, index) =>
                                        <tr key={payment._id}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {payment.email}
                                            </td>
                                            <td>
                                                ${payment.price}
                                            </td>
                                            <td>
                                                {payment.date}
                                            </td>
                                            <td>
                                                {payment.status}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;