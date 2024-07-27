import Header from "./component/Header"
import AmericanFootball from './assets/americanfootball.png'
import Basketball from './assets/basketball.png'
import { useState } from "react"
import './App.css'
import Footer from "./component/Footer"
import TeamImageOne from './assets/sportsbook.png'
import TeamImageThree from './assets/casino.jpg'
import TeamImageFour from './assets/pick6.jpg'
import TeamImageFive from './assets/reignmarkets.png'
import TeamImageSix from './assets/marketplace.png'
import { Star } from "./assets/svgs"
import SportList from './component/SportList'
import Payone from './assets/payicon.png'
import Paytwo from './assets/payicon1.png'
import TeamFlex from "./component/TeamFlex"
import LiveOdds from "./component/LiveOdd"
import { Link } from "react-router-dom"
import RotatingContainer from "./component/RotatingContainer"



const Home = () => {
  const [star] = useState(Star)
  return (
    <main>
      <section className="herobanners">
        <Header />
        <div style={{ background: '#67456a7d' }}>
          <RotatingContainer />
        </div>
        <div className="herobanner">
          <div className="banners">
            <div className="banner">
              <div className="banner-left-image">
                <img className="mt-40" src={AmericanFootball} alt="americanfootballer" />
              </div>
              <div className="banner-content">
                <div className="bcontent">

                  <span className="spacer-wide"></span>
                  <h1 className="roboto-con hsize3" style={{ color: 'var(--orange-text)' }}>New Customers</h1>
                  {/* <h1 className="hsize1 roboto-con">EVERY DEPOSIT MADE TO</h1> */}
                  <h1 className="hsize2 roboto-con bcontent-des ">Deposits will recieve up to $5000 freeplay
                  </h1>

                  <p>(Join now to get 50% free discount)</p>
                </div>
              </div>
              <div className="banner-right-image">
                <img className="mt-40" src={Basketball} alt="basketballer" />
              </div>
            </div>

            <div className="banner-button">
              <button>
                <Link to='/auth/signup' >
                  SIGN UP NOW.
                </Link>
              </button>
            </div>
          </div>

        </div>
      </section>
      <SportList />
      <section className="snags">
        <div className="snag">
          <div className="snag-heading">
            <h2>Snag Your Play-Through Bonus</h2>
          </div>


          <div className="snag-contents">
            <div className="snag-content">
              <div className="snag-c-each">
                <span>1</span>
                <h3>Deposit</h3>
                <p>Make your first deposit of $5 or more and score a bonus up to 50% free play of what you put in. See terms for details.</p>
              </div>

              <div className="snag-c-each">
                <span>2</span>
                <h3>100% Bonus!</h3>
                <p>
                  Make your first deposit of $50 and get $50 freeplay as first time customer !</p>
              </div>

              <div className="snag-c-each">
                <span>3</span>
                <h3>Coupon + 10% Free Play</h3>
                <p>Use our exclusive promo code to get a 50% discount on your first deposit and enjoy an additional 10% in free play!</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="odds">
        <div className="odd" style={{ boxShadow: "0px 7px 8px 3px rgba(0, 4, 9, 0.25)" }}>
          <LiveOdds />
        </div>
      </div>

      <section className="teams">
        <div className="team">
          <div className="team-heading">
            <div className="sthree">
              <h1>Winner’s Circle</h1>
              <p>You deserve it all, so Vip Sport Bet has it all</p>
            </div>
          </div>



          <TeamFlex>
            <div className="teameachs">
              <div className="teameach">
                <img src={TeamImageOne} alt="" />
                <span>
                  <h2>SportsBook</h2>
                </span>
                <div className="teameach-content">
                  <p>Get in on the action and bet on all your favorite sports</p>
                </div>
                <div className="teamstars">  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>
            </div>
            <div className="teameachs">
              <div className="teameach">
                <img src={TeamImageThree} alt="" />
                <span>
                  <h2>Daily Fantasy Sports.</h2>
                </span>
                <div className="teameach-content">
                  <p>Play your favorite fantasy sports for huge cash prizes</p>
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
            <div className="teameachs">
              <div className="teameach">
                <img src={TeamImageFour} alt="" />
                <span>
                  <h2>Pick 6</h2>
                </span>
                <div className="teameach-content">
                  <p>Pick more or less of player stats in our fantasy game</p>
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
            <div className="teameachs">
              <div className="teameach">
                <img src={TeamImageFive} alt="" />
                <span>
                  <h2>MarketPlace</h2>
                </span>
                <div className="teameach-content">
                  <p>Buy, sell, and trade to grow your Reignmakers collections</p>
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
            <div className="teameachs">
              <div className="teameach">
                <img src={TeamImageSix} alt="" />
                <span>
                  <h2>ReignMakers</h2>
                </span>
                <div className="teameach-content">
                  <p>Own your fantasy team and compete for cash prizes all season</p>
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
          </TeamFlex>

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

export default Home