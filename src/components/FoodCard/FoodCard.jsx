/* eslint-disable react/prop-types */

import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";


const FoodCard = ({ food }) => {
    const { user } = useAuth();
    const axios = useAxios();
    const { refetch } = useCart();

    const handleAddCart = () => {
        const cart = {
            menuId: food._id,
            email: user.email,
            name: food.name,
            image: food.image,
            recipe: food.recipe,
            price: food.price,
            category: food.category,
        };

        axios.post('/cart', cart)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="bg-[#F3F3F3]">
            <figure><img src={food?.image} alt="" className="w-full" /></figure>
            <div className="h-[250px] flex flex-col p-8">
                <h2 className="text-[#151515] text-2xl font-semibold text-center pb-2">{food?.name}</h2>
                <p className="text-[#737373] text-base flex-grow">{food?.recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddCart} className="btn border-0 border-b-[3px] border-[#BB8506] text-[#BB8506] bg-[#E8E8E8] uppercase hover:bg-[#111827]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;