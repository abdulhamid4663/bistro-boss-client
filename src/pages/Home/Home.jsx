import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Container from "../../components/Shared/Container/Container";
import SectionHeading from "../../components/Shared/Section_Heading/SectionHeading";
import backgroundImg from "../../assets/home/chef-service.jpg"
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import featureImage from "../../assets/home/featured.jpg";
import { Link } from "react-router-dom";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    const bgStyle = {
        backgroundImage: `url('${backgroundImg}')`,
        width: '100%',
        height: "572px"
    };

    return (
        <div>
            {/* Banner */}
            <Banner />
            <Container>
                {/* Categories Section */}
                <div>
                    <div>
                        <SectionHeading subTitle="---From 11:00am to 10:00pm---" title='ORDER ONLINE' />
                    </div>
                    <div className="mb-24">
                        <Categories />
                    </div>
                </div>
                {/* Home Bistro Boss Banner Section */}
                <div className="mb-24">
                    <div style={bgStyle}>
                        <div className={`flex justify-center items-center min-h-[572px]`}>
                            <div className="bg-white py-20 w-[1096px] mx-auto text-center">
                                <h1 className='text-[45px] font-normal text-[#151515]'>Bistro Boss</h1>
                                <p className='text-base font-normal max-w-[762px] mx-auto text-[#151515]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popular Section */}
                <div>
                    <div>
                        <SectionHeading subTitle="---Check it out---" title='FROM OUR MENU' />
                    </div>
                    <div className="mb-32">
                        <PopularMenu />
                    </div>
                </div>
                {/* Home Call Section */}
                <div className="flex justify-center items-center bg-[#151515] h-[250px] mb-32">
                    <h1 className="text-white text-5xl font-semibold">Call Us: +88 0192345678910</h1>
                </div>
            </Container>
            {/* Feature Section */}
            <div
                style={{ backgroundImage: `url('${featureImage}')`, height: "848px", width: "100%", backgroundColor: "#151515B2", backgroundBlendMode: "multiply" }}
                className="mb-32"
            >
                <Container>
                    <div className="flex flex-col h-[848px] items-center justify-center">
                        <div className="mb-12">
                            <div className="max-w-md mx-auto text-center">
                                <h3 className="text-[#D99904] text-xl italic pb-4">---Check it out---</h3>
                                <h1 className="text-white text-[40px] py-2 border-y-2 border-white">FROM OUR MENU</h1>
                            </div>
                        </div>
                        <div className="flex gap-16 items-center">
                            <div>
                                <img src={featureImage} alt="" />
                            </div>
                            <div className="text-white font-normal">
                                <h5 className="text-2xl">March 20, 2023</h5>
                                <h4 className="text-2xl">WHERE CAN I GET SOME?</h4>
                                <p className="text-xl pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <Link to="/ourMenu">
                                    <button className="btn border-0 border-b-[3px] border-white text-white bg-transparent uppercase">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Testimonials Section */}
            <div className="mb-32">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;