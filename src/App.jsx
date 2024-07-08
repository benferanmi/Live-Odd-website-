import Header from "./component/Header"
import AmericanFootball from './assets/americanfootball.png'
import Mastercard from './assets/visa.png'
import Bitcoin from './assets/bitcoin.png'
import Basketball from './assets/basketball.png'
import Balls from './assets/balls.png'
import { OddsData } from "./Oddjson"
import { useState } from "react"
import './App.css'
import Footer from "./component/Footer"
import { Star } from "./assets/svgs"
import TeamImageOne from './assets/team1.png'
import TeamImageTwo from './assets/team2.png'
import TeamImageThree from './assets/team3.png'

import Sport1 from './assets/sport1.png'
import Sport2 from './assets/sport2.png'
import Sport3 from './assets/sport3.png'
import Sport4 from './assets/sport4.png'
import Sport5 from './assets/sport5.png'
import Sport6 from './assets/sport6.png'
import Payone from './assets/payicon.png'
import Paytwo from './assets/payicon1.png'


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [oddsData, setoddsData] = useState(OddsData);
  const [star] = useState(Star)

  return (
    <main>


      <section className="herobanners">
      <Header />

        <div className="herobanner">
          <div className="banners">
            <div className="banner">
              <div className="banner-left-image">
                <img className="mt-40" src={AmericanFootball} alt="americanfootballer" />
              </div>
              <div className="banner-content">
                <div className="bcontent">
                  <div className="countdowns">
                    <div className="countdown">
                      <div className="cd-each">
                        <span className="countdown-value">02</span>
                        <span className="countdown-text">days</span>
                      </div>

                      <div className="cd-each">
                        <span className="countdown-value">5</span>
                        <span className="countdown-text">Hours</span>
                      </div>

                      <div className="cd-each">
                        <span className="countdown-value">32</span>
                        <span className="countdown-text">Minutes</span>
                      </div>

                      <div className="cd-each">
                        <span className="countdown-value">56</span>
                        <span className="countdown-text">Seconds</span>
                      </div>
                    </div>
                  </div>

                  <span style={{ height: '25px', display: 'block' }}></span>
                  <h1 className="hsize1">Every Deposit made tO</h1>
                  <h1 className="hsize2">your Account <br />
                    you will get 50%
                  </h1>
                  <p>(Join now to get 50% free discount)</p>
                </div>
              </div>
              <div className="banner-right-image">
                <img className="mt-40" src={Basketball} alt="basketballer" />
              </div>
            </div>

            <div className="banner-button">
              <button >
                Join Now
              </button>
            </div>
          </div>

        </div>
      </section>


      <section className="payments">
        <div className="payment">
          <div className="payment-details">
            <div className="pd-content">
              <p className="cdftt" style={{ color: 'rgba(222, 190, 93, 1)' }}>First time deposit new Players
              </p>
              <p className="mhsiuht" style={{ color: 'var(--button-bg-color)' }}>
                CRYPTO DEPOSIT
              </p>

              <ul className="pd-content-list">
                <li style={{ color: 'rgba(246, 225, 182, 1)' }}>Deposit thousand dollars in crypto get additional $150 freeplay
                </li><li style={{ color: 'rgba(193, 159, 66, 1)' }}>
                  Deposit $2000 in crypto get additional $400 freeplay
                </li><li style={{ color: 'rgba(193, 159, 66, 1)' }}>
                  $5000 in crypto get additional $2000 freeplay
                </li>
                <li style={{ color: 'rgba(222, 190, 93, 1)' }}>Deposit $10,000 in crypto receive additional $5000 freeplay</li>
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

      <section className="section3">
        <div className="sthree">
          <h1>Bet Smart, Win Big!</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquet odio nunc tristique eleifend ultrices nunc.</p>
        </div>
      </section>

      {/* sport one */}
      <section className="odds">
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>BaseBall Team</h1>
              <p>ODD LINES</p>
            </div>
          </div>


          <div className="odd-grid">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Opeaner</th>
                  <th><img src={Sport1} alt="" /> </th>
                  <th><img src={Sport2} alt="" /> </th>
                  <th><img src={Sport3} alt="" /> </th>
                  <th><img src={Sport4} alt="" /> </th>
                  <th><img src={Sport5} alt="" /> </th>
                  <th><img src={Sport6} alt="" /> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sport two */}
      <section className="odds">
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>Football Team</h1>
              <p>ODD LINES</p>
            </div>
          </div>


          <div className="odd-grid">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Opeaner</th>
                  <th><img src={Sport1} alt="" /> </th>
                  <th><img src={Sport2} alt="" /> </th>
                  <th><img src={Sport3} alt="" /> </th>
                  <th><img src={Sport4} alt="" /> </th>
                  <th><img src={Sport5} alt="" /> </th>
                  <th><img src={Sport6} alt="" /> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Mancity vs Bayern</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sport three */}
      <section className="odds">
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>Tennis Team</h1>
              <p>ODD LINES</p>
            </div>
          </div>


          <div className="odd-grid">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Opeaner</th>
                  <th><img src={Sport1} alt="" /> </th>
                  <th><img src={Sport2} alt="" /> </th>
                  <th><img src={Sport3} alt="" /> </th>
                  <th><img src={Sport4} alt="" /> </th>
                  <th><img src={Sport5} alt="" /> </th>
                  <th><img src={Sport6} alt="" /> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">Inaki vs William</div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sport four */}
      <section className="odds odd-bg" >
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>American Football</h1>
              <p>ODD LINES</p>
            </div>
          </div>


          <div className="odd-grid">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Opeaner</th>
                  <th><img src={Sport1} alt="" /> </th>
                  <th><img src={Sport2} alt="" /> </th>
                  <th><img src={Sport3} alt="" /> </th>
                  <th><img src={Sport4} alt="" /> </th>
                  <th><img src={Sport5} alt="" /> </th>
                  <th><img src={Sport6} alt="" /> </th>
                </tr>
              </thead>
              <tbody className="od-body">
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="oddttitle">BOS Vs NYY </div>
                    <div className="oddtline"></div>
                  </td>
                  <td><span>+211 -113</span></td>
                  <td><span>+011 -416</span></td>
                  <td><span>+911 -43</span></td>
                  <td><span>+431 -413</span></td>
                  <td><span>+431 -223</span></td>
                  <td><span>+056 -013</span></td>
                  <td><span>+126 -138</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="teams">
        <div className="team">
          <div className="team-heading">
            <div className="sthree">
              <h1>Winner’s Circle</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Aliquet odio nunc tristique eleifend ultrices nunc.</p>
            </div>
          </div>
          <div className="teamgrid">
            <div className="teamflex">
              <div className="teameach">
                <img src={TeamImageOne} alt=""></img>
                <span>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                </span>

                <div className="teameach-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sociis tempor turpis ultrices varius semper at sed amet pellentesque. Sit turpis accumsan volutpat pellentesque netus. Ac augue ut integer justo maecenas. Egestas aliquam orci cursus eget vel scelerisque egestas ipsum tincidunt.
                  </p>
                </div>

                <div className="teamstars">
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>

              <div className="teameach">
                <img src={TeamImageThree} alt=""></img>
                <span>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                </span>

                <div className="teameach-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sociis tempor turpis ultrices varius semper at sed amet pellentesque. Sit turpis accumsan volutpat pellentesque netus. Ac augue ut integer justo maecenas. Egestas aliquam orci cursus eget vel scelerisque egestas ipsum tincidunt.
                  </p>
                </div>

                <div className="teamstars">
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>

              <div className="teameach">
                <img src={TeamImageTwo} alt=""></img>
                <span>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                </span>

                <div className="teameach-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sociis tempor turpis ultrices varius semper at sed amet pellentesque. Sit turpis accumsan volutpat pellentesque netus. Ac augue ut integer justo maecenas. Egestas aliquam orci cursus eget vel scelerisque egestas ipsum tincidunt.
                  </p>
                </div>

                <div className="teamstars">
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="payicons">
        <div className="payicon">
          <img src={Payone} alt="" />
          <img src={Paytwo} alt="" />
        </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App