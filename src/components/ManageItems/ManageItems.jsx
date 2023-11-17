import { FaTrashCan } from "react-icons/fa6";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../Shared/Section_Heading/SectionHeading";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const { menus, refetch } = useMenu();

    const handleDeleteMenu = menu => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menus/${menu._id}`)
                .then(res => {
                    refetch()
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${menu.name} has been deleted.`,
                            icon: "success"
                        });
                    }
                });
            }
        });
    }

    return (
        <div className="py-8">
            <div>
                <SectionHeading subTitle='---Hurry Up!---' title='MANAGE ALL ITEMS' />
            </div>
            <div className="bg-white p-12">
                <div>
                    <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total users: {menus?.length}</h1>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menus?.map((menu, index) =>
                                        <tr key={menu._id}>
                                            <th>{index + 1}</th>
                                            <th>
                                                <img src={menu.image} alt={`image of ${menu.name}`} className="w-24 h-20 object-cover" />
                                            </th>
                                            <td>{menu.name}</td>
                                            <td>${menu.price}</td>
                                            <td>
                                                {
                                                    <Link to={`/dashboard/updateItem/${menu._id}`}>
                                                        <button className="btn bg-[#D1A054] text-white">
                                                            <FiEdit />
                                                        </button>
                                                    </Link>
                                                }
                                            </td>
                                            <td>
                                                <button onClick={() => handleDeleteMenu(menu)} className="btn btn-error text-white">
                                                    <FaTrashCan />
                                                </button>
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

export default ManageItems;