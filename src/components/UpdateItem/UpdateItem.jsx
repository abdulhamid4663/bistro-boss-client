import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { _id, ...menu } = useLoaderData();
    const navigate = useNavigate()

    const axios = useAxios();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const name = data.name;
        const category = data.category;
        const price = data.price;
        const recipe = data.recipe;
        const imageFile = { image: data.image[0] };
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        const menuItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: res.data.data.display_url
        };

        const menuRes = await axiosSecure.patch(`/menus/${_id}`, menuItem)
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been updated.`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/dashboard/manageItems")
        }
    };

    return (
        <div className="py-8">
            <div className="pb-16">
                <h1 className="text-[#151515] text-[40px] font-normal text-center">UPDATE ITEM</h1>
            </div>
            <div className="bg-white p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" defaultValue={menu?.name} {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered" />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={menu?.category} {...register('category', { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Choose one Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="text" defaultValue={menu?.price} {...register('price', { required: true })} placeholder="Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={menu?.recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="mt-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs " />
                    </div>
                    <div className="mt-6 text-center">
                        <button type="submit" className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Update Recipe Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;