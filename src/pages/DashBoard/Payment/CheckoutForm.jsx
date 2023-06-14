import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './Checkout.css'

const CheckoutForm = ({ cart,price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [proccess,setProccess] = useState(false)
    const [transactionId,setTransactionId] = useState('')

    useEffect(() => {
       if(price > 0){
        axiosSecure.post('/payment-create', { price })
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
       }
    }, [price,axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('payment Method', paymentMethod)
        }
        setProccess(true)

        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                       email:user?.email || 'anonymous',
                       name:user?.displayName || 'anonymous'
                    },
                },
            }
        )
            if(confirmError){
                console.log(confirmError)
            }
            console.log('payment intent',paymentIntent)

            setProccess(false)

            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)
                // save payment information to the server 
                const payment = {
                    email:user?.email,
                    transactionId:transactionId.id,
                    price,
                    quantity:cart.length,
                    date:new Date(),
                    cartItems:cart.map(item => item._id),
                    menuItem:cart.map(item => item.menuItem),
                    itemsName:cart.map(item => item.name),
                    status:'service pending'
                }
                axiosSecure.post('/payments',payment)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.insertedId){
                        // display name
                    }
                })    
                
            }
         
    }
    return (
        <>
            <form className="m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary  border mt-4 btn-sm" type="submit"
                    disabled={!stripe || !clientSecret || proccess}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 ml-4">{cardError}</p>}
            {transactionId && <p className="text-green-500 ml-4">Transaction complete with TransactionId:{transactionId}</p>}
        </>
    );
};

export default CheckoutForm;