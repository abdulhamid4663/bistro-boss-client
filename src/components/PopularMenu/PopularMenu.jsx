import { useEffect, useState } from "react";
import MenuItems from "../Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(food => food.category === "popular");
                setFoods(popularMenu)
            })
    }, [])

    return (
        <>
            <div className="grid grid-cols-2 gap-6 mb-12">
                {
                    foods.map(food => <MenuItems key={food._id} food={food} />)
                }
            </div>
            <div className="text-center">
                <Link to="/ourMenu">
                    <button className="btn border-0 border-b-[3px] border-[#1F2937] bg-transparent uppercase">View Full Menu</button>
                </Link>
            </div>
        </>
    );
};

export default PopularMenu;