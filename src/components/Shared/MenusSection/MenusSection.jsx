/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import Container from "../Container/Container";


const MenusSection = ({ category }) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(food => food.category === category);
                setFoods(popularMenu)
            })
    }, [category])

    return (
        <Container>
            <div className="grid grid-cols-2 gap-6 mb-12">
                {
                    foods.map(food => <MenuItems key={food._id} food={food} />)
                }
            </div>
            <div className="text-center mb-11">
                <Link to="/ourMenu">
                    <button className="btn border-0 border-b-[3px] border-[#1F2937] bg-transparent uppercase">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </Container>
    );
};

export default MenusSection;