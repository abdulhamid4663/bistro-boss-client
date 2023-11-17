import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
import SectionHeading from "../Shared/Section_Heading/SectionHeading";
import { FaTrashCan } from "react-icons/fa6";

const MyCart = () => {
    const { cart, refetch } = useCart();
    const axios = useAxios();

    const handleDeleteCart = id => {

        axios.delete(`/carts/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.error(error.message);
            })

    }

    const totalPrice = cart?.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="py-8">
            <div>
                <SectionHeading subTitle='---My Cart---' title='WANNA ADD MORE?' />
            </div>
            <div className="bg-white p-12">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[#151515] text-[32px] font-bold">Total orders: {cart?.length}</h1>
                    <h1 className="text-[#151515] text-[32px] font-bold">total price: ${totalPrice}</h1>
                    <button className="btn bg-[#D1A054] rounded-lg text-xl font-bold text-white">PAY</button>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054]">
                                <tr className="text-white py-6 rounded-t-xl">
                                    <th className="py-6">
                                        #
                                    </th>
                                    <th className="py-6">ITEM IMAGE</th>
                                    <th className="py-6">ITEM NAME</th>
                                    <th className="py-6">PRICE</th>
                                    <th className="py-6">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map((item, index) =>
                                        <tr key={item?._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item?.name}
                                            </td>
                                            <td>
                                                {item?.price}
                                            </td>
                                            <th>
                                                <button onClick={() => handleDeleteCart(item?._id)} className="btn btn-error text-white">
                                                    <FaTrashCan />
                                                </button>
                                            </th>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;