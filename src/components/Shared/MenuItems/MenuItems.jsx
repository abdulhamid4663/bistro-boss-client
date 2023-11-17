/* eslint-disable react/prop-types */


const MenuItems = ({ food }) => {
    const { name, image, recipe, price } = food;

    return (
        <div className="flex gap-8 items-center">

            <img src={image} alt="" className="w-full max-w-[128px] h-[100px] rounded-bl-[50%] rounded-br-[50%] rounded-tr-[50%]" />

            <div className="flex">
                <div>
                    <h1 className="text-xl text-[#151515] font-normal">{name} ------------------</h1>
                    <p className="text-base font-normal text-[#737373]">{recipe}</p>
                </div>
                <div>
                    <strong className="text-[#BB8506] text-xl font-normal">${price}</strong>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;