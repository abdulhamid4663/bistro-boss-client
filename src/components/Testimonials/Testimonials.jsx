import SectionHeading from "../Shared/Section_Heading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import Container from "../Shared/Container/Container";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <Container>
            <div>
                <SectionHeading title="TESTIMONIALS" subTitle="---What Our Clients Say---" />
            </div>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div>
                                    <Rating style={{ maxWidth: 250 }} className="mx-auto" value={review.rating} />
                                    <FaQuoteLeft className="mx-auto text-6xl my-10" />
                                    <p className="max-w-[1096px] mx-auto text-center pb-2">{review.details}</p>
                                    <h1 className="text-center text-3xl text-[#CD9003] font-medium">{review.name}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </>
        </Container>
    );
};

export default Testimonials;