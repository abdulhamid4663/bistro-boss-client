import { FaTrashCan } from "react-icons/fa6";
import SectionHeading from "../Shared/Section_Heading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data
        }
    });

    const handleAdminUser = user => {
        const userInfo = {
            name: user.name,
            email: user.email,
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, appoint as a admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`, userInfo)
                    .then(res => {
                        console.log(res.data);
                        refetch()

                        Swal.fire({
                            title: "Appointed as Admin!",
                            text: `${user.name} is Admin Now!`,
                            icon: "success"
                        });
                    })
            }
        });
    }

    const handleDeleteUser = id => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch()

                        Swal.fire({
                            title: "Deleted!",
                            text: `Users is Deleted Successfully`,
                            icon: "success"
                        });
                    })
            }
        });
    };

    return (
        <div className="py-8">
            <div>
                <SectionHeading subTitle='---How many??---' title='MANAGE ALL USERS' />
            </div>
            <div className="bg-white p-12">
                <div>
                    <h1 className="text-[#151515] text-[32px] font-bold uppercase">Total users: {users?.length}</h1>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) =>
                                        <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {
                                                    user?.role === 'admin' ? "Admin"
                                                        :
                                                        <button onClick={() => handleAdminUser(user)} className="btn bg-[#D1A054] text-xl text-white">
                                                            <FaUsers />
                                                        </button>
                                                }
                                            </td>
                                            <td>
                                                <button onClick={() => handleDeleteUser(user?._id)} className="btn btn-error text-white">
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

export default Users;