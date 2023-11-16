import PageBanner from "../../components/Shared/PageBanner/PageBanner";
import bannerImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import FoodCard from "../../components/FoodCard/FoodCard";

const OurShop = () => {
    const [foods, setFoods] = useState([])
    const salads = foods.filter(food => food.category === "salad")
    const pizzas = foods.filter(food => food.category === "pizza")
    const soups = foods.filter(food => food.category === "soup")
    const desserts = foods.filter(food => food.category === "dessert")
    const drinks = foods.filter(food => food.category === "drinks")

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
    }, [])

    return (
        <div>
            <div className="mb-32">
                <PageBanner bgImage={bannerImg} title="OUR SHOP" />
            </div>
            <Container>
                <div className="mb-32">
                    <Tabs>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUP</Tab>
                            <Tab>DESSERT</Tab>
                            <Tab>DRINK</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                                {
                                    salads.map(salad => <FoodCard key={salad._id} food={salad} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                                {
                                    pizzas.map(pizza => <FoodCard key={pizza._id} food={pizza} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                                {
                                    soups.map(soup => <FoodCard key={soup._id} food={soup} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                                {
                                    desserts.map(dessert => <FoodCard key={dessert._id} food={dessert} />)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                                {
                                    drinks.map(drink => <FoodCard key={drink._id} food={drink} />)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </Container>
        </div>
    );
};

export default OurShop;