import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import moment from "moment/moment";

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId]= useState('')
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { cart } = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if(totalPrice) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }
        })

        if(confirmError) {
            console.log("confirm Error", confirmError);
        } else {
            console.log("payment intent", paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)

                // save the payment in database
                const paymentInfo = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    cartIds: cart?.map(cart => cart?._id),
                    menuItemIds: cart?.map(cart => cart?.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', paymentInfo);
                console.log('paymentInfo saved', res.data);
            }
        }

    }

    return (
        <form className="text-center max-w-xl mx-auto" onSubmit={handleSubmit}>
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
            <p className="text-start text-red-600 mt-2">{error}</p>
            <p className="text-start text-green-600 mt-2">{transactionId && `Your Transaction Id: ${transactionId}`}</p>
            <button className="w-full max-w-sm btn btn-primary mt-8" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;