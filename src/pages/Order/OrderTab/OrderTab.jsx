import OrderCard from "../../../components/OrderCard/OrderCard";



const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid sm:grid-cols-3 gap-10 mt-20 mb-10">
                {
                    items.map(item => <OrderCard
                        key={item._id}
                        item={item}
                    ></OrderCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;