import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [amount, setAmount] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    return (
        <PaymentContext.Provider
            value={{ amount, setAmount, promoCode, setPromoCode, discount, setDiscount }}
        >
            {children}
        </PaymentContext.Provider>
    );
};

PaymentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};