import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"

const Categories = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide1} alt="" className='w-full ' />
                        <h1 className='uppercase text-[32px] text-white font-normal absolute bottom-4 text-center w-full'>Salads</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <img src={slide2} alt="" className='w-full ' />
                        <h1 className='uppercase text-[32px] text-white font-normal absolute bottom-4 text-center w-full'>Pizzas</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <img src={slide3} alt="" className='w-full ' />
                        <h1 className='uppercase text-[32px] text-white font-normal absolute bottom-4 text-center w-full'>Soups</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <img src={slide4} alt="" className='w-full ' />
                        <h1 className='uppercase text-[32px] text-white font-normal absolute bottom-4 text-center w-full'>Desserts</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <img src={slide5} alt="" className='w-full ' />
                        <h1 className='uppercase text-[32px] text-white font-normal absolute bottom-4 text-center w-full'>Salads</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Categories;