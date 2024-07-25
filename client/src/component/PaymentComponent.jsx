import Mastercard from './assets/visa.png';
import Bitcoin from './assets/bitcoin.png';
import Balls from './assets/balls.png';
import './css/paymentcomponent.css'

const PaymentComponent = () => {
    return (
        <section className="payments">
            <div className="payment">
                <div className="payment-details">
                    <div className="pd-content">
                        <p className="cdftt" style={{ color: '#ffffff' }}>First time deposit new Players
                        </p>
                        <p className="mhsiuht" style={{ color: 'var(--button-bg-color)' }}>
                            CRYPTO DEPOSIT
                        </p>

                        <ul className="pd-content-list">
                            <li style={{ color: '#ffffff' }}>Deposit thousand dollars in crypto get additional $150 freeplay
                            </li><li style={{ color: '#ffffff' }}>
                                Deposit $2000 in crypto get additional $400 freeplay
                            </li><li style={{ color: '#ffffff' }}>
                                $5000 in crypto get additional $2000 freeplay
                            </li>
                            <li style={{ color: '#ffffff' }}>Deposit $10,000 in crypto receive additional $5000 freeplay</li>
                        </ul>
                    </div>
                </div>
                <div className="payment-cards">
                    <div className="payment-card">
                        <div className="pc-content">
                            <div style={{ background: 'linear-gradient(180deg, rgba(223, 195, 255, 0.75) 0%, #7323ac, #6617a0, rgba(58, 23, 93, 0) 69.9%)', borderRadius: '33px', paddingTop: '20px' }}>
                                <div className="width-80">
                                    <h1>Payment Information</h1>

                                    <div className="pc-prices">
                                        <div className="pcp-content">
                                            <h4>Payment amount</h4>
                                            <h2 style={{ color: '' }}>$500</h2>
                                        </div>

                                        <div className="pcp-logos">
                                            <div className="pcp-logo">
                                                <img src={Bitcoin} alt="Bitcoin" />
                                                <hr />
                                                <img src={Mastercard} alt="Mastercard" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-form">
                                        <form action="" method="">
                                            <div className="pf-each">
                                                <label className="pf-label">Name on Card</label>
                                                <input type="text" className="pf-input" name="name" placeholder="james smith" />
                                            </div>

                                            <div className="pf-fields">
                                                <div className="pf-each">
                                                    <label className="pf-label">Card Number</label>
                                                    <input type="number" className="pf-input" name="cardNumber" placeholder="XXX XXX XXX" />
                                                </div>

                                                <div className="pf-each">
                                                    <label className="pf-label">Expiry Date</label>
                                                    <input type="number" className="pf-input" name="Expiry Date" placeholder="MM/YY" />
                                                </div>

                                                <div className="pf-each">
                                                    <label className="pf-label">Security Code</label>
                                                    <input type="number" className="pf-input" name="CCV" placeholder="123" />
                                                </div>
                                            </div>

                                            <div className="pf-button"><button>Pay now</button></div>



                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="pf-bg2">
                                <img src={Balls} alt="" />
                                <div className="bg-overlay"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentComponent