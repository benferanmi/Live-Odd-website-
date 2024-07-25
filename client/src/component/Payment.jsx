import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { PaymentContext } from '../contexts/PaymentContext';
import './Payment.css';
import { useAuth } from '../contexts/useAuth';


const stripePromise = loadStripe('pk_test_51LFGx8HRxabJIYD0XqJgpj8jld0sGfj20tQw9kavLfp0k3iV4aqjlRm2tJaMSeCFh69YtefQwdwQ463iNUYm9rV700N5E4XmBo');

const CheckoutForm = ({ userId }) => {
    const { amount, promoCode, discount } = useContext(PaymentContext);
    const [finalAmount, setFinalAmount] = useState(amount - (amount * discount / 100));
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        setFinalAmount(amount - (amount * discount / 100));
    }, [amount, discount]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post('http://localhost:3000/api/auth/payment', {
                    amount: finalAmount * 100, // Amount in cents
                    id,
                    userId,
                });

                if (response.data.success) {
                    console.log('Payment successful');
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            console.log(error.message);
        }
    };

    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={cardElementOptions} />
            <button type="submit" disabled={!stripe}>Pay ${finalAmount}</button>
        </form>
    );
};

CheckoutForm.propTypes = {
    userId: PropTypes.string.isRequired,
};

const Payment = () => {
    const { amount, setAmount, promoCode, setPromoCode, setDiscount } = useContext(PaymentContext);
    const [finalAmount, setFinalAmount] = useState(amount);
    const { userData } = useAuth()


    const handlePromoCode = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/promo', { promoCode });
            if (response.data.success) {
                setDiscount(response.data.discount);
                setFinalAmount(amount - (amount * response.data.discount / 100));
            } else {
                setDiscount(0);
                setFinalAmount(amount);
            }
        } catch (error) {
            console.log('Invalid Promo Code');
            setDiscount(0);
            setFinalAmount(amount);
        }
    };

    useEffect(() => {
        setFinalAmount(amount);
    }, [amount]);

    return (
        <Elements stripe={stripePromise}>
            <div className="payment-container">
                <h2>Payment Form</h2>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Amount"
                />
                <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter Promo Code"
                />
                <button onClick={handlePromoCode}>Apply Promo Code</button>
                <CheckoutForm userId={userData._id} />
            </div>
        </Elements>
    );
};

export default Payment;
