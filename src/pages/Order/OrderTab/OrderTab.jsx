import OrderCard from "../../../components/OrderCard/OrderCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
    return (
        <div>
            <Swiper
                pagination={Pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid sm:grid-cols-3 gap-10 mt-20 mb-10">
                        {
                            items.map(item => <OrderCard
                                key={item._id}
                                item={item}
                            ></OrderCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;