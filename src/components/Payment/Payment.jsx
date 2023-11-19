import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="pb-16">
                <h1 className="text-[#151515] text-[40px] font-normal text-center">PAYMENT</h1>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;