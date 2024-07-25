import Payment from "./component/Payment";
import { PaymentProvider } from "./contexts/PaymentContext";


function PaymentPage() {
    return (
        <PaymentProvider>
            <div className="PaymentPage">
                <Payment />
            </div>
        </PaymentProvider>
    );
}

export default PaymentPage;
