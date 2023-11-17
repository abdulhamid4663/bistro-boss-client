import SectionHeading from "../Shared/Section_Heading/SectionHeading";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const axios = useAxios();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
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

        const menuRes = await axiosSecure.post("/menus", menuItem)
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been added to menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    };

    return (
        <div className="py-8">
            <div>
                <SectionHeading subTitle="---What's new?---" title='ADD AN ITEM' />
            </div>
            <div className="bg-white p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered" />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })} className="select select-bordered w-full">
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
                            <input type="text" {...register('price', { required: true })} placeholder="Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="mt-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs " />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Add Item <ImSpoonKnife /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;