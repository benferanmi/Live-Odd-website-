import React, { useEffect, useRef, useState } from 'react';
import './css/rotatingcont.css'; // Make sure to import the CSS file
import axios from 'axios';

const HorizontalScroll = () => {
    const scrollRef = useRef(null);
    const apiKey = '0079a4e08ebfce72b40aac3ad3d36110';
    const [soccerOdds, setSoccerOdds] = useState([]);
    const [soccerLoading, setSoccerLoading] = useState(true);
    const [soccerError, setSoccerError] = useState(null);

    useEffect(() => {
        const fetchOdds = async () => {
            try {
                const response = await axios.get(`https://api.the-odds-api.com/v4/sports/soccer/odds`, {
                    params: {
                        apiKey: apiKey,
                        regions: 'us',
                        markets: 'h2h',
                        oddsFormat: 'decimal'
                    },
                });
                setSoccerOdds(response.data);
                setSoccerLoading(false);
            } catch (err) {
                setSoccerError(err);
                setSoccerLoading(false);
            }
        };

        fetchOdds();
    }, [apiKey]);

    if (soccerLoading) {
        return <div>Loading...</div>;
    }

    if (soccerError) {
        return <div>Error: {soccerError.message}</div>;
    }

    return (
        <div className="horizontal-scroll-container">
            <div className="scroll-wrapper">
                <div className="horizontal-scroll" ref={scrollRef}>
                    {soccerOdds.slice(0, 10).map((game) => (
                        <div key={game.id} className="horizontal-scroll-item">
                            <span className="live-odd-time">{new Date(game.commence_time).toLocaleString()}</span>
                            <div className="live-odd-sgrids">
                                <div className="live-odd-sgrid">
                                    <div className="los-team">
                                        <span>{game.home_team}</span>
                                        <span>{game.away_team}</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
