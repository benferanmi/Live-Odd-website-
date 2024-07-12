import Header from "./component/Header"
import AmericanFootball from './assets/americanfootball.png'
import Basketball from './assets/basketball.png'
// import { OddsData } from "./Oddjson"
import { useEffect, useState } from "react"
import './App.css'
import Footer from "./component/Footer"
import TeamImageOne from './assets/sportsbook.png'
// import TeamImageTwo from './assets/fantasy.png'
import TeamImageThree from './assets/casino.jpg'
import TeamImageFour from './assets/pick6.jpg'
import TeamImageFive from './assets/reignmarkets.png'
import TeamImageSix from './assets/marketplace.png'
import { Star } from "./assets/svgs"

import Sport1 from './assets/sport1.png'
import Sport2 from './assets/sport2.png'
import Sport3 from './assets/sport3.png'
import Sport4 from './assets/sport4.png'
import Sport5 from './assets/sport5.png'
import Sport6 from './assets/sport6.png'
import Payone from './assets/payicon.png'
import Paytwo from './assets/payicon1.png'
import TeamFlex from "./component/TeamFlex"
import axios from 'axios'
import Bookmakers from "./component/sports/Bookmarker"


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [star] = useState(Star)
  const [soccerOdds, setSoccerOdds] = useState([]);
  const [soccerLoading, setSoccerLoading] = useState(true);
  const [soccerError, setSoccerError] = useState(null);
  
  const [basketballOdds, setBasketballOdds] = useState([]);
  const [basketballLoading, setBasketballLoading] = useState(true);
  const [basketballError, setBasketballError] = useState(null);
  
  const [footballOdds, setFootballOdds] = useState([]);
  const [footballLoading, setFootballLoading] = useState(true);
  const [footballError, setFootballError] = useState(null);
  
  const [rugbyOdds, setRugbyOdds] = useState([]);
  const [rugbyLoading, setRugbyLoading] = useState(true);
  const [rugbyError, setRugbyError] = useState(null);
  
  const apiKey = 'ef9f27ac7b2093fc381686d461234539';
  
  useEffect(() => {
    const fetchOdds = async (sport, setOddsFunc, setLoadingFunc, setErrorFunc) => {
        try {
            const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/odds`, {
                params: {
                    apiKey: apiKey,
                    regions: 'us',       // Specify the region
                    markets: 'h2h',      // Specify the market type
                    oddsFormat: 'decimal' // Specify the odds format
                },
            });
            setOddsFunc(response.data);
            setLoadingFunc(false);
        } catch (err) {
            setErrorFunc(err);
            setLoadingFunc(false);
        }
    };

    // Fetch odds for soccer
    fetchOdds('soccer', setSoccerOdds, setSoccerLoading, setSoccerError);
    // Fetch odds for basketball
    fetchOdds('basketball', setBasketballOdds, setBasketballLoading, setBasketballError);
    // Fetch odds for football
    fetchOdds('americanfootball_nfl', setFootballOdds, setFootballLoading, setFootballError); // Adjust sport key as per API documentation for football
    // Fetch odds for rugby
    fetchOdds('rugby', setRugbyOdds, setRugbyLoading, setRugbyError);
}, [apiKey]);


  if (soccerLoading) return <div>Loading...</div>;
  if (soccerError) return <div>Error: {soccerError.message}</div>;

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
              <button >
                SIGN UP NOW.
              </button>
            </div>
          </div>

        </div>
      </section>



      <section className="sports-bar">
        <div className="sport-bar">
          <div className="sportbar-eachs">
            <div className="sportbar-each">
              <a href="#" className="spe-content">
                <p>NFL</p>
                <svg height="30px" width="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M402.105 23.23c-7.135.02-14.64.307-22.437.872 40.125 28.894 79.33 68.1 108.227 108.224 1.316-18.198 1.093-34.787-.348-48.912-2.398-23.496-9.092-40.233-13.91-45.05-4.818-4.82-21.555-11.513-45.05-13.91-5.875-.6-12.173-.99-18.835-1.147-2.498-.06-5.05-.086-7.647-.078zm-92.53 12.63c-58.62 15.315-122.552 45.856-175.186 98.48C81.94 187.202 51.592 251.473 36.4 310.324c34.234 47.728 118.68 132.105 166.024 165.815 58.63-15.317 122.572-45.864 175.21-98.503 52.64-52.64 83.187-116.582 98.503-175.21-33.886-47.59-118.976-132.68-166.566-166.566zm-9.6 20.09l8.05 16.1c-11.915 5.958-23.11 11.755-33.668 17.47l5.94 12.242-16.195 7.857-5.498-11.33c-13.5 7.696-25.94 15.33-37.448 23.097l6.725 10.095-14.98 9.98-6.463-9.702c-12.19 8.987-23.36 18.27-33.796 28.154l9.723 9.723-12.726 12.726-9.723-9.722c-9.86 10.414-19.125 21.552-28.092 33.71l10.19 6.578-9.764 15.12-10.805-6.976c-7.575 11.217-15.02 23.32-22.52 36.424l13.266 6.154-7.573 16.33-14.49-6.722c-5.914 10.885-11.908 22.43-18.076 34.767l-16.1-8.05c6.045-12.092 11.97-23.495 17.853-34.288l-10.24-4.75 7.574-16.328 11.496 5.33c7.924-13.797 15.84-26.587 23.93-38.473l-12.334-7.965 9.762-15.12 12.996 8.39c9.726-13.15 19.805-25.223 30.543-36.514l-9.893-9.895 12.726-12.726 9.895 9.894c11.258-10.705 23.293-20.757 36.396-30.456L187.81 103.8l14.98-9.98 8.548 12.83c12.162-8.283 25.268-16.382 39.437-24.496l-6.43-13.25 16.194-7.857 5.974 12.312c10.55-5.737 21.673-11.517 33.46-17.41zM24.76 380.583c-1.275 17.855-1.087 34.14.26 48.047 2.277 23.475 8.798 40.26 13.418 45.065 4.892 4.814 21.572 11.464 44.976 13.852 14.125 1.44 30.713 1.664 48.912.348C92.506 459.22 53.59 420.39 24.76 380.585z" /></svg>
              </a>
            </div>


            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>NBA</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" version="1.1" id="Capa_1" height="30px" width="30px" viewBox="0 0 31.118 31.119">
                  <g>
                    <g>
                      <path d="M11.939,8.819c-0.42-0.06-0.834-0.104-1.239-0.136c-0.914,1.908-1.53,3.981-1.794,6.168    c2.799-0.01,7.457,1.146,8.943,8.518c0.731,3.649,2.479,5.508,5.408,5.713c2.418-1.377,4.426-3.386,5.809-5.797    C26.671,15.833,20.206,10.006,11.939,8.819z" />
                      <path d="M7.483,16.269c-2.133,0.324-3.621,1.168-4.422,2.504c-1.134,1.89-0.675,4.371-0.339,5.58    c2.164,3.154,5.462,5.472,9.307,6.363c-2.882-3.611-4.57-8.258-4.57-13.457C7.458,16.927,7.469,16.599,7.483,16.269z" />
                      <path d="M9.932,7.334c0.589-1.104,1.269-2.152,2.038-3.134c-1.835-0.64-2.397-1.984-2.453-2.979    C5.762,2.808,2.754,5.825,1.188,9.595C3.576,8.108,6.31,7.323,9.321,7.323C9.522,7.325,9.728,7.33,9.932,7.334z" />
                      <path d="M7.586,14.941c0.244-2.226,0.833-4.35,1.712-6.316c-3.495,0.007-6.413,1.1-8.791,2.99C0.175,12.874,0,14.196,0,15.562    c0,1.98,0.37,3.879,1.045,5.625c0.06-1.024,0.309-2.098,0.894-3.08C2.989,16.355,4.891,15.291,7.586,14.941z" />
                      <path d="M12.888,3.112c1.029-1.149,2.184-2.187,3.439-3.087c-0.256-0.013-0.513-0.02-0.767-0.02c-2.982,0-4.725,0.814-4.725,0.814    C10.804,1.003,10.618,2.593,12.888,3.112z" />
                      <path d="M28.184,6.471l-0.027,0.019c-2.914-3.642-7.619-1.747-7.668-1.728c-1.279,0.53-3.613,0.456-7.125-0.224    c-0.751,0.9-1.424,1.869-2.008,2.898c0.254,0.026,0.512,0.056,0.772,0.093c5.934,0.851,11.178,3.966,14.771,8.761    c1.25,1.67,2.248,3.474,2.979,5.364c0.8-1.87,1.24-3.932,1.24-6.092C31.115,12.167,30.029,9.027,28.184,6.471z" />
                      <path d="M19.99,3.56c1.086-0.452,2.943-0.836,4.865-0.47c-1.889-1.416-4.113-2.403-6.529-2.839    c-1.447,0.883-2.771,1.944-3.946,3.154C17.811,4.004,19.324,3.835,19.99,3.56z" />
                      <path d="M16.574,23.626c-1.293-6.422-5.12-7.531-7.781-7.479c-0.021,0.367-0.031,0.735-0.031,1.106    c0,5.353,1.922,10.207,5.259,13.783c0.506,0.047,1.02,0.075,1.541,0.075c2.023,0,3.961-0.387,5.739-1.092    C18.85,29.208,17.266,27.07,16.574,23.626z" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>PGA</p>
                <svg height="30px" width="30px" fill="#ffffff" version="1.1" id="Capa_1" viewBox="0 0 40.451 40.451" >
                  <g>
                    <g>
                      <g>
                        <path d="M20.222,0.002C9.058,0.002,0,9.057,0,20.226c0,11.167,9.058,20.223,20.222,20.223     c11.174,0,20.229-9.055,20.229-20.223C40.45,9.057,31.396,0.002,20.222,0.002z M35.186,20.988c1.271,0,2.31-0.942,2.482-2.164     c0.016,0.116,0.036,0.232,0.036,0.353c0,1.354-1.099,2.449-2.45,2.449c-1.318,0-2.391-1.045-2.441-2.353     C33.148,20.267,34.079,20.988,35.186,20.988z M34.531,23.451c0.015,0.115,0.033,0.23,0.033,0.352c0,1.354-1.097,2.45-2.449,2.45     c-1.319,0-2.389-1.045-2.441-2.353c0.338,0.994,1.268,1.713,2.372,1.713C33.32,25.613,34.355,24.672,34.531,23.451z      M28.591,20.988c1.272,0,2.308-0.942,2.483-2.164c0.015,0.116,0.033,0.232,0.033,0.353c0,1.354-1.096,2.449-2.449,2.449     c-1.318,0-2.389-1.045-2.441-2.353C26.555,20.267,27.482,20.988,28.591,20.988z M27.159,29.048c1.271,0,2.31-0.942,2.481-2.163     c0.014,0.116,0.032,0.23,0.032,0.352c0,1.354-1.096,2.451-2.45,2.451c-1.316,0-2.387-1.045-2.438-2.354     C25.122,28.328,26.055,29.048,27.159,29.048z M24.779,36.22c-1.315,0-2.389-1.046-2.438-2.354     c0.337,0.995,1.269,1.714,2.374,1.714c1.27,0,2.309-0.942,2.482-2.163c0.016,0.116,0.031,0.231,0.031,0.353     C27.229,35.123,26.135,36.22,24.779,36.22z M30.359,33.418c-1.314,0-2.387-1.045-2.437-2.354     c0.336,0.996,1.267,1.715,2.374,1.715c1.268,0,2.309-0.942,2.48-2.164c0.016,0.115,0.033,0.231,0.033,0.353     C32.813,32.32,31.717,33.418,30.359,33.418z M35.254,29.055c-1.318,0-2.391-1.045-2.441-2.353     c0.336,0.995,1.268,1.714,2.373,1.714c1.271,0,2.31-0.943,2.482-2.164c0.016,0.116,0.036,0.232,0.036,0.354     C37.704,27.959,36.605,29.055,35.254,29.055z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>NBL</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" version="1.1" id="Capa_1" height="30px" width="30px" viewBox="0 0 31.118 31.119">
                  <g>
                    <g>
                      <path d="M11.939,8.819c-0.42-0.06-0.834-0.104-1.239-0.136c-0.914,1.908-1.53,3.981-1.794,6.168    c2.799-0.01,7.457,1.146,8.943,8.518c0.731,3.649,2.479,5.508,5.408,5.713c2.418-1.377,4.426-3.386,5.809-5.797    C26.671,15.833,20.206,10.006,11.939,8.819z" />
                      <path d="M7.483,16.269c-2.133,0.324-3.621,1.168-4.422,2.504c-1.134,1.89-0.675,4.371-0.339,5.58    c2.164,3.154,5.462,5.472,9.307,6.363c-2.882-3.611-4.57-8.258-4.57-13.457C7.458,16.927,7.469,16.599,7.483,16.269z" />
                      <path d="M9.932,7.334c0.589-1.104,1.269-2.152,2.038-3.134c-1.835-0.64-2.397-1.984-2.453-2.979    C5.762,2.808,2.754,5.825,1.188,9.595C3.576,8.108,6.31,7.323,9.321,7.323C9.522,7.325,9.728,7.33,9.932,7.334z" />
                      <path d="M7.586,14.941c0.244-2.226,0.833-4.35,1.712-6.316c-3.495,0.007-6.413,1.1-8.791,2.99C0.175,12.874,0,14.196,0,15.562    c0,1.98,0.37,3.879,1.045,5.625c0.06-1.024,0.309-2.098,0.894-3.08C2.989,16.355,4.891,15.291,7.586,14.941z" />
                      <path d="M12.888,3.112c1.029-1.149,2.184-2.187,3.439-3.087c-0.256-0.013-0.513-0.02-0.767-0.02c-2.982,0-4.725,0.814-4.725,0.814    C10.804,1.003,10.618,2.593,12.888,3.112z" />
                      <path d="M28.184,6.471l-0.027,0.019c-2.914-3.642-7.619-1.747-7.668-1.728c-1.279,0.53-3.613,0.456-7.125-0.224    c-0.751,0.9-1.424,1.869-2.008,2.898c0.254,0.026,0.512,0.056,0.772,0.093c5.934,0.851,11.178,3.966,14.771,8.761    c1.25,1.67,2.248,3.474,2.979,5.364c0.8-1.87,1.24-3.932,1.24-6.092C31.115,12.167,30.029,9.027,28.184,6.471z" />
                      <path d="M19.99,3.56c1.086-0.452,2.943-0.836,4.865-0.47c-1.889-1.416-4.113-2.403-6.529-2.839    c-1.447,0.883-2.771,1.944-3.946,3.154C17.811,4.004,19.324,3.835,19.99,3.56z" />
                      <path d="M16.574,23.626c-1.293-6.422-5.12-7.531-7.781-7.479c-0.021,0.367-0.031,0.735-0.031,1.106    c0,5.353,1.922,10.207,5.259,13.783c0.506,0.047,1.02,0.075,1.541,0.075c2.023,0,3.961-0.387,5.739-1.092    C18.85,29.208,17.266,27.07,16.574,23.626z" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>NHL</p>

                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" version="1.1" id="Capa_1" viewBox="0 0 32.96 32.96">
                  <g>
                    <g>
                      <g>
                        <path fill="#ffffff" d="M16.48,18.084c-9.101,0-16.479-2.964-16.479-6.622v10.742h0.05c0,3.916,7.357,7.093,16.429,7.093     c9.077,0,16.432-3.177,16.432-7.093h0.048V11.462C32.961,15.12,25.582,18.084,16.48,18.084z" />
                        <ellipse fill="#ffffff" cx="16.48" cy="10.285" rx="16.48" ry="6.622" />
                      </g>
                    </g>
                  </g>
                </svg>

              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>MMA</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" version="1.1" x="0px" y="0px" viewBox="0 0 256 256" >
                  <g><g><g><path fill="#ffffff" d="M67.9,26.4c-12.7,1.5-22.8,5-30.3,10.4C18.4,50.9,6.2,78.6,11,97c2.4,9.3,8.8,18.4,17.9,25.4c2.1,1.6,6.2,4.9,9.1,7.3c8.9,7.2,12.6,10.2,12.7,10.1c0-0.1-0.1-1.7-0.3-3.6c-0.7-5.4-0.1-18.3,1-23.8c2.8-13.3,7.8-22.4,17.3-31.9c4.8-4.7,8.8-8,14.8-12c14.3-9.5,33.8-17.3,48.1-19.2c2.4-0.3,4.2-0.7,4.2-0.9c-0.3-0.8-6-5.4-9.5-7.7c-9.4-6.1-25.9-12.3-37.3-13.9C84.1,26.2,72.4,25.9,67.9,26.4z" /><path fill="#ffffff" d="M139.6,54.1c-21.7,3-50.9,16.3-64.9,29.6c-4,3.9-8.9,9.8-8.4,10.3c0.1,0.1,2.8,1.2,5.9,2.5c9.5,3.7,29.1,9.7,31.8,9.7c0.5,0,1.8-0.7,2.9-1.7c21.4-18,60.8-31.9,90.8-32h4.8l-1.2-0.9c-2.2-1.8-15.9-8.2-21.5-10.2c-7.7-2.6-16.3-4.8-24.2-6.2C147.4,53.9,143.5,53.6,139.6,54.1z" /><path fill="#ffffff" d="M191.5,80c-25.2,2.1-46.6,8.3-62.3,18.2c-5.6,3.6-8.4,5.7-13.5,10.5c-2.4,2.3-5.3,4.5-6.5,5.1c-4.2,1.9-5.6,1.6-27.3-5.2c-10.8-3.3-19.8-5.9-19.9-5.7c-0.7,0.8-3.3,8.9-4,12.8c-1.2,6.1-1,17.8,0.2,24.7c1.4,7.5,2.1,9.6,4.5,12.6c3,3.8,7.1,6.6,16.8,11.4c9.6,4.8,15,7.9,17.9,10.3c3.6,3.1,3.6,3.2,5.6,26.8l1.9,21.2l1.9,1.7c6.3,5.6,15.5,6.9,25.5,3.6c8.7-2.8,14.6-6.1,16.1-9.1c0.3-0.7,3-8.7,5.9-17.8c2.9-9,5.4-16.5,5.6-16.5c0.9,0,1.4,4.2,1.2,9.9c-0.2,6.4-1.8,13.6-4.2,20.2l-1.2,3.1h2c6.9,0,16.3-4.8,20.5-10.2c1.6-2.2,2.4-4.3,6.9-18.3c2.8-8.7,5.2-15.7,5.4-15.6c0.9,0.3,1.3,3.5,1.1,9.8c-0.2,6.6-1.6,13.2-4,19.6c-0.6,1.3-0.8,2.6-0.7,2.7c0.1,0.1,1.7,0,3.3-0.2c6.4-1.1,12.5-5.3,16.7-11.6c3.2-4.8,5.1-9.6,7.8-20.4c1.7-6.4,1.8-6.6,2.4-5.5c1.1,1.9,0.8,13.6-0.4,18.6c-0.6,2.3-1,4.2-0.9,4.2c0.3,0.3,4-0.9,6.5-2.3c7.2-3.8,15.9-17.1,20.6-31.7c2.5-7.6,3-10.8,3-18.5c0-7.7-0.7-11.6-3.5-20.1c-5-15.2-13.7-27.7-24.1-34.8c-5.6-3.9-6.9-4.2-15.2-4.2C199.3,79.6,194.1,79.8,191.5,80z" /><path fill="#ffffff" d="M57.6,161.9c-0.4,2.7-1.1,5.2-2.2,7.7c-3,6.8-3.2,7.4-2.3,9.7c0.4,1.1,2.2,3.7,4,5.9c5.1,6.1,10.5,15.5,13.4,23c1.3,3.5,3.4,6.1,5.7,7.2c0.9,0.4,4.3,1.2,7.6,1.8c3.2,0.6,7.6,1.6,9.7,2.3c2.1,0.7,4,1.2,4.1,1.1c0.4-0.5-3.2-38.1-3.8-39.9c-1.4-3.9-6.2-7-16.3-10.7c-8.4-3.1-11.9-5.1-16.9-9.8l-2.3-2.2L57.6,161.9z" /></g></g></g>
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>SOCCER</p>
                <svg fill="#ffffff" height="30px" width="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>soccer</title>
                  <path d="M28.789 10.153c-0.006-0.015-0.014-0.030-0.021-0.046l0.029 0.005-0.008 0.041zM25.25 22.217l-4.668 0.194-2.438-4.285 2.523-4.556 4.887 0.162 2.086 4.259-2.39 4.226zM12.708 18.065l-2.449-4.431 2.56-4.271 5.221-0.080 2.564 4.253-2.52 4.547-5.376-0.018zM12.816 9.29l-1.93-3.323 2.564-3.128 4.475-0.143 2.385 2.954-2.283 3.56-5.211 0.080zM10.374 22.249l-4.135-0.404-1.992-3.983 1.738-4.038 4.205-0.161 2.45 4.433-2.266 4.153zM24.811 6.159l0.396-0.787c1.5 1.301 2.717 2.912 3.561 4.735l-1.482-0.236-2.475-3.712zM20.385 5.625l-2.389-2.957c0.059-0.072 0.377-0.459 0.383-0.465-2.141-0.358-4.094-0.175-5.381 0.127 0.009 0.006 0.319 0.398 0.383 0.479l-2.565 3.128-3.825 0.644-0.341-1.043-0.059 0.018c2.494-2.248 5.786-3.629 9.409-3.629 3.498 0 6.689 1.283 9.15 3.395l-0.404 0.804-4.361-0.501zM4.639 10.222l-1.608 0.379 0.018 0.070 1.58-0.372 1.3 3.472-1.744 4.053c-0.236-0.023-2.061-0.198-2.061-0.087 0.32 2.685 1.339 5.021 3.094 7.206l1.030-3.023 4.128 0.403 2.607 3.956-1.8 2.931c-5.395-1.971-9.256-7.133-9.256-13.21 0-4.146 1.803-7.86 4.655-10.436l0.346 1.062-2.289 3.596zM17.859 26.435l2.146 3.005 0.061-0.043-2.133-2.983 2.65-3.93 4.664-0.193c0.094 0.211 1.289 2.898 1.281 2.898 1.967-2.303 2.955-4.611 3.312-7.242-0.004 0-1.914 0.008-2.139 0.010l-2.088-4.268 1.684-3.741 1.486 0.237 0.004-0.031c0.816 1.782 1.283 3.758 1.283 5.847 0 7.772-6.301 14.073-14.072 14.073-1.669 0-3.262-0.306-4.747-0.839l1.797-2.925 4.811 0.125zM11.234 29.267l-0.062-0.038 0.012-0.020c0.023 0.009 0.047 0.017 0.070 0.025l-0.020 0.033zM6.581 5.56l0.011-0.004c-0.004 0.003-0.007 0.006-0.009 0.008l-0.002-0.004zM25.164 5.295l0.064 0.032-0.021 0.045c-0.020-0.017-0.037-0.034-0.057-0.051l0.014-0.026z"></path>
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>NASCAR</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#ffffff" />
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>TENNIS</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 24 24" fill="none">
                  <path d="M12.4508 2.75947C10.7345 2.67403 8.97514 3.06532 7.37533 3.98897C5.77628 4.91218 4.55715 6.24074 3.77282 7.76992C4.13802 8.00339 4.63846 8.35339 5.2146 8.83716C6.39095 9.82491 7.88509 11.3723 9.18554 13.6247C10.486 15.8772 11.079 17.9448 11.3462 19.4575C11.4771 20.1984 11.53 20.8068 11.5496 21.2398C13.2661 21.3252 15.0263 20.9337 16.6253 20.0104C18.2251 19.0868 19.4437 17.7588 20.2278 16.2297C19.8626 15.9962 19.3621 15.6462 18.7858 15.1623C17.6094 14.1746 16.1152 12.6272 14.8147 10.3747C13.5142 8.12228 12.9213 6.05461 12.6541 4.54197C12.5232 3.80099 12.4704 3.1925 12.4508 2.75947ZM13.965 2.96066C13.9899 3.30979 14.0386 3.7565 14.1312 4.28105C14.3731 5.65031 14.9142 7.54708 16.1137 9.62474C17.3133 11.7024 18.6854 13.1194 19.7503 14.0136C20.1583 14.3561 20.5208 14.6216 20.8107 14.8177C21.5767 12.4208 21.3675 9.72406 20.0111 7.37471C18.6547 5.02535 16.4239 3.49581 13.965 2.96066ZM10.0354 21.0387C10.0105 20.6896 9.96178 20.2429 9.86912 19.7184C9.6272 18.3492 9.08605 16.4524 7.8865 14.3747C6.68696 12.2971 5.31489 10.88 4.25003 9.9859C3.8422 9.64345 3.47976 9.378 3.18991 9.18186C2.42446 11.5776 2.63301 14.275 3.9896 16.6247C5.34617 18.9744 7.57793 20.5037 10.0354 21.0387ZM6.62533 2.68993C8.72041 1.48034 11.0555 1.05591 13.2864 1.32632C16.5261 1.71902 19.5514 3.57847 21.3101 6.62471C23.0689 9.67094 23.1666 13.2206 21.8868 16.2227C21.0055 18.2898 19.4704 20.0999 17.3753 21.3095C12.2337 24.278 5.65909 22.5164 2.69056 17.3747C-0.277974 12.2331 1.48369 5.65846 6.62533 2.68993Z" fill="#ffffff" />
                </svg>
              </a>
            </div>
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>CFB</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 24 24" fill="none">
                  <path d="M21.9127 5.93144C21.7537 3.85169 20.1483 2.24627 18.0686 2.08725C17.0016 2.00568 15.7566 1.96613 14.4449 2.03623L21.9638 9.55515C22.0339 8.24345 21.9943 6.99837 21.9127 5.93144Z" fill="#ffffff" />
                  <path d="M2.08725 18.0686C2.24627 20.1483 3.85169 21.7537 5.93144 21.9127C6.99862 21.9943 8.24403 22.0339 9.55607 21.9637L2.03628 14.4439C1.96611 15.756 2.00566 17.0014 2.08725 18.0686Z" fill="#ffffff" />
                  <path d="M2.22237 12.5087C2.59084 9.91642 3.48404 7.27724 5.38064 5.38064C7.27745 3.48383 9.917 2.59064 12.5095 2.22225L21.7777 11.4905C21.4094 14.083 20.5162 16.7225 18.6194 18.6194C16.7228 20.516 14.0836 21.4092 11.4913 21.7776L2.22237 12.5087ZM11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0723 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0723 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z" fill="#ffffff" />
                </svg>
              </a>
            </div>
            {/* <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>ESPORTS</p>
              </a>
            </div> */}
            <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>F1</p>

                <svg height="30px" width="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                  <path d="M62 45.283l-2.047-4.159l-5.036 2.913l-.159-.149c.04-.025.081-.045.12-.073c0 0 4.599-2.725 4.713-2.807c1.647-1.193 1.566-4.324-.18-6.994c-1.748-2.672-4.503-3.869-6.15-2.678l-4.36 2.6c-.122.06-.24.129-.353.21c-.767.554-.936 1.824-.755 3.19l-.141-.133V33.39l-4.379-6.938l-2.547-1.684s.364-.201.497-.294c1.899-1.377 1.808-4.986-.208-8.066c-2.015-3.077-5.191-4.462-7.091-3.086l-8.839 5.271l.068 1.134l-.608.333l-5.519-2.142v-1.245l7.669-4.047L22.72 9L2 16.758l6.138 5.664l6.857-3.619v1.766l3.641 2.727l-1.768.967l-2.34-.535l-3.629 2.072v.605l-5.439 3.24c-.16.077-.315.169-.463.275c-1.976 1.43-.915 6.5.712 8.988c1.706 2.604 3.879 4.22 5.768 4.22a3 3 0 0 0 1.791-.579l5.689-3.389a3.09 3.09 0 0 0 .465-.276a3.3 3.3 0 0 0 .85-.929l4.949 3.72l6.562 1.486c-.1.055-.2.109-.294.178c-1.746 1.262-.81 5.739.627 7.937C33.622 53.574 35.541 55 37.207 55c.564 0 1.099-.163 1.579-.511l4.761-2.836l5.355 2.406L62 45.283m-3.375-3.018l1.709 3.667l-1.1.736l-1.9-3.633l1.291-.77M21.098 9.972l3.455 3.378l-1.318.696l-3.797-3.453l1.66-.621m-10.199 10.53l-5.712-4.456l2.443-.915l5.052 4.431l-1.783.94m38.236 14.453a1.5 1.5 0 0 1 .903-.272c1.028 0 2.609.832 3.823 2.688c1.557 2.378 1.477 4.877.43 5.634c-.097.07-.199.116-.305.156l-1.467-1.379a1.21 1.21 0 0 0 .877-.229c.878-.634.834-2.3-.096-3.719c-.93-1.423-2.395-2.059-3.271-1.425c-.611.441-.611 1.377-.245 2.384l1.464-.826c.893-.452 2.078.783 1.481 1.701l-1.484.915l-2.183-2.053c-.457-1.549-.494-3.166.073-3.575m-.151 12.751l-3.84 2.375c.561-1.172.577-2.793.029-4.48l3.811 2.105m-3.96-3.555l-.347.213a10.361 10.361 0 0 0-.664-1.173a10.679 10.679 0 0 0-.516-.714l.045-.025c.894-.453 2.079.783 1.482 1.699M28.391 17.155l14.33 9.553l4.391 6.933l-1.172.709l-4.473-6.99l-14.306-9.476l1.23-.729m9.069 13.62c.116-.009.216-.085.303-.204c-.421 1.755-1.562 2.642-3.746 2.642c-2.859 0-6.415-1.51-6.415-4.516c0-3.007 2.318-5.443 5.178-5.443c2.496 0 4.578 1.855 5.069 4.325c-.095-.139-.211-.225-.355-.214c-2.879.209-6.68.181-6.801 1.261c-.122 1.082 2.234 2.476 6.767 2.149M16.107 19.884v-1.668l1.92-1.013v1.402l11.594 4.498l-3.39 1.625l-10.124-4.844m-1.559 6.01c-.778-.25-1.535-.305-2.223-.153l1.078-.616l1.145.769m-3.071 16.234c-1.52 0-3.41-1.443-4.931-3.767c-1.493-2.284-2.256-6.695-.962-7.632c.379-.274.836-.414 1.359-.414c1.712 0 3.823 1.467 5.25 3.648c1.958 2.992 2.182 6.552.488 7.774a1.974 1.974 0 0 1-1.204.391m13.744-6.291l-4.71-3.332a11.527 11.527 0 0 0-2.563-4.325l9.594 6.45l10.876 4.349l-1.645.994l-11.552-4.136M37.207 54c-1.281 0-2.952-1.284-4.255-3.271c-1.407-2.152-1.899-5.841-.878-6.579c.314-.228.694-.342 1.131-.342c1.475 0 3.297 1.271 4.536 3.164c1.694 2.592 1.905 5.662.458 6.708c-.298.216-.623.32-.992.32m10.064-4.81l4.064 2.818l-1.127.756l-4.271-2.75l1.334-.824" fill="#ffffff"></path>
                  <path d="M6.933 32.876c-1.145.827-.673 2.974.542 4.83c1.215 1.855 2.713 2.718 3.857 1.889c1.145-.828 1.088-3.003-.125-4.858c-1.216-1.858-3.129-2.689-4.274-1.861" fill="#ffffff"></path><path d="M33.197 45.95c-1.013.729-.595 2.624.476 4.265c1.072 1.638 2.395 2.397 3.405 1.666c1.012-.731.962-2.651-.11-4.289c-1.073-1.64-2.76-2.372-3.771-1.642" fill="#ffffff">
                  </path>
                </svg>
              </a>
            </div>
            {/* <div className="sportbar-each">
              <a href="#" className="spe-content">

                <p>USFL</p>
              </a>
            </div> */}
          </div>
        </div>
      </section>

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



      {/* <section className="section3">
        <div className="sthree">
          <h1>Bet Smart, Win Big!</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquet odio nunc tristique eleifend ultrices nunc.</p>
        </div>
      </section> */}

      <div className="odds">
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>Basketball</h1>
              <p>ODD LINES</p>
            </div>
          </div>
          {basketballOdds.length > 0 && <Bookmakers bookmakers={basketballOdds[0].bookmakers} />}
          {basketballOdds.map((match, index) => (
            <div key={index} className="match-container">
              {match.bookmakers[0] && (
                <div className="grid-container">
                  <div className="match-teams">
                    <div className="grid-item oddttitle">
                      <p>{match.away_team}</p> <strong style={{padding: '0px 5px'}}>VS</strong>
                      <p>{match.home_team}</p>
                      <p>Draw</p>
                      <span className="oddtline"></span>
                    </div>
                  </div>
                  {match.bookmakers.map((bookmaker, index) => (
                    <div key={index} className="grid-item align-center">
                      <div className="match-odd">
                        {bookmaker.markets[0].outcomes.map((outcome, index) => (
                          <>
                            <p key={index}>{outcome.price}</p>
                          </>
                        ))}
                      </div>
                      <span style={{ height: '15px' }}></span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="odds">
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>Football</h1>
              <p>ODD LINES</p>
            </div>
          </div>
          {footballOdds.length > 0 && <Bookmakers bookmakers={footballOdds[0].bookmakers} />}
          {footballOdds.map((match, index) => (
            <div key={index} className="match-container">
              {match.bookmakers[0] && (
                <div className="grid-container">
                  <div className="match-teams">
                    <div className="grid-item oddttitle">
                      <p>{match.away_team}</p> <strong style={{padding: '0px 5px'}}>VS</strong>
                      <p>{match.home_team}</p>
                      <p>Draw</p>
                      <span className="oddtline"></span>
                    </div>
                  </div>
                  {match.bookmakers.map((bookmaker, index) => (
                    <div key={index} className="grid-item align-center">
                      <div className="match-odd">
                        {bookmaker.markets[0].outcomes.map((outcome, index) => (
                          <>
                            <p key={index}>{outcome.price}</p>
                          </>
                        ))}
                      </div>
                      <span style={{ height: '15px' }}></span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* sport two */}
      <section className="odds">
        <div className="odd">
          <div className="odd-heads">
            <div className="odd-head">
              <h1>Soccer Team</h1>
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

export default App