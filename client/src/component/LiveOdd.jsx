/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/liveodd.css'

const LiveOdds = () => {
    const [soccerOdds, setSoccerOdds] = useState([]);
    const [soccerLoading, setSoccerLoading] = useState(true);
    const [soccerError, setSoccerError] = useState(null);

    const [basketballOdds, setBasketballOdds] = useState([]);
    const [basketballLoading, setBasketballLoading] = useState(true);
    const [basketballError, setBasketballError] = useState(null);

    const [footballOdds, setFootballOdds] = useState([]);
    const [footballLoading, setFootballLoading] = useState(true);
    const [footballError, setFootballError] = useState(null);

    const [baseballOdds, setBaseballOdds] = useState([]);
    const [baseballLoading, setBaseballLoading] = useState(true);
    const [baseballError, setBaseballError] = useState(null);
    const [noGameFound, setNoGameFound] = useState(null)

    const apiKey = '0079a4e08ebfce72b40aac3ad3d36110';

    useEffect(() => {
        const fetchOdds = async (sport, setOddsFunc, setLoadingFunc, setErrorFunc) => {
            try {
                const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/odds`, {
                    params: {
                        apiKey: apiKey,
                        regions: 'us',
                        markets: 'h2h',
                        oddsFormat: 'decimal'
                    },
                });
                setOddsFunc(response.data);
                setLoadingFunc(false);
            } catch (err) {
                setErrorFunc(err);
                setLoadingFunc(false);
            }
        };

        fetchOdds('soccer', setSoccerOdds, setSoccerLoading, setSoccerError);
        fetchOdds('	basketball_euroleague', setBasketballOdds, setBasketballLoading, setBasketballError);
        fetchOdds('americanfootball_nfl', setFootballOdds, setFootballLoading, setFootballError);
        fetchOdds('baseball_mlb', setBaseballOdds, setBaseballLoading, setBaseballError);
    }, [apiKey]);

    const renderOdds = (odds, loading, error) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return odds.slice(0, 5).map((game) => (
            <div key={game.id} className='live-odd-each'>
                <span className='live-odd-time'>{new Date(game.commence_time).toLocaleString()}</span>
                <div className='live-odd-sgrids'>
                    <div className='live-odd-sgrid'>
                        <div className='los-team'><span>{game.home_team}</span> <span>{game.away_team}</span></div>
                        {game.bookmakers
                            .filter((bookmaker) => bookmaker.key === 'draftkings')
                            .map((bookmaker) => (
                                <div key={bookmaker.key} className="los-bookmaker">
                                    <span> {bookmaker.markets[0].outcomes[0].price}</span>
                                    <span>0</span>
                                    <span>{bookmaker.markets[0].outcomes[1].price}</span>
                                </div>
                            ))}
                    </div>
                </div>
                <hr />
            </div>
        ));
    };

    return (
        <div className="live-odds">
            <section className="odlivegshty_uty">
                <div className='odd-heads'>
                    <div className='odd-head'>
                        <h1>SOCCER ODDS</h1>
                        <p>Odd Lines</p>
                    </div>
                </div>
                <br /><br />
                <div className='live-odd-hgrids'>
                    <div className='live-odd-hgrid'>
                        <div></div>
                        <div>1</div>
                        <div>X</div>
                        <div>2</div>
                    </div>
                </div>
                {renderOdds(soccerOdds, soccerLoading, soccerError)}
            </section>
            <br></br>
            <section className="odlivegshty_uty">
                <div className='odd-heads'>
                    <div className='odd-head'>
                        <h1>Football ODDS</h1>
                        <p>Odd Lines</p>
                    </div>
                </div>
                <br /><br />
                <div className='live-odd-hgrids'>
                    <div className='live-odd-hgrid'>
                        <div></div>
                        <div>1</div>
                        <div>X</div>
                        <div>2</div>
                    </div>
                </div>
                {renderOdds(footballOdds, footballLoading, footballError)}

            </section>
            <section className="odlivegshty_uty">
                <div className='odd-heads'>
                    <div className='odd-head'>
                        <h1>BASKETBALL ODDS</h1>
                        <p>Odd Lines</p>
                    </div>
                </div>
                <br /><br />
                <div className='live-odd-hgrids'>
                    <div className='live-odd-hgrid'>
                        <div></div>
                        <div>1</div>
                        <div>X</div>
                        <div>2</div>
                    </div>
                </div>
                {renderOdds(basketballOdds, basketballLoading, basketballError)}

            </section>

            <section className="odlivegshty_uty">
                <div className='odd-heads'>
                    <div className='odd-head'>
                        <h1>BASEBALL ODDS</h1>
                        <p>Odd Lines</p>
                    </div>
                </div>
                <br /><br />
                <div className='live-odd-hgrids'>
                    <div className='live-odd-hgrid'>
                        <div></div>
                        <div>1</div>
                        <div>X</div>
                        <div>2</div>
                    </div>
                </div>
                {renderOdds(baseballOdds, baseballLoading, baseballError)}
            </section>

        </div>
    );
};

export default LiveOdds;
