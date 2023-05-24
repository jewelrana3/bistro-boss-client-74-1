import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                subHeading='What Our Client Say'
                heading='TESTIMONIALS'
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div >
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="m-24">
                                <p>{review.details}</p>
                                <h3 className="text-orange-400 text-3xl">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;