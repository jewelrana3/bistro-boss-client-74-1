import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-jewelrana3.vercel.app/reviews')
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
                           
                            <div className="flex flex-col items-center m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.Rating}
                                readOnly
                            />
                                <p className="py-5">{review.details}</p>
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