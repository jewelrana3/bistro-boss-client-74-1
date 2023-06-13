import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
// import { Elements } from "@stripe/react-stripe-js";

// TODO : provide published key
const stripePromise = loadStripe(import.meta.env.VITE_Gateway_Payment_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=>sum+item.price,0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="my-7">
            <SectionTitle heading='payment' subHeading='please provide'></SectionTitle>
            <h2 className="text-2xl">Payment pay</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;