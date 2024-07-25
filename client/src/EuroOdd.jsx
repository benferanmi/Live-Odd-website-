import axios from 'axios';
import { useState, useEffect } from 'react';

const EuroOdd = () => {
  const [soccerOdds, setSoccerOdds] = useState([]);
  const [soccerLoading, setSoccerLoading] = useState(true);
  const [soccerError, setSoccerError] = useState(null);

  const apiKey = 'your_api_key_here';

  useEffect(() => {
    const fetchOdds = async (sport, setOddsFunc, setLoadingFunc, setErrorFunc) => {
      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/odds`, {
          params: {
            apiKey: apiKey,
            regions: 'eu',
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

    // Fetch odds for specific leagues
    const leagues = [
      'soccer_epl',
      'soccer_germany_bundesliga',
      'soccer_italy_serie_a',
      'soccer_uefa_champs_league',
      'soccer_uefa_europa_league'
    ];

    leagues.forEach(league => {
      fetchOdds(league, setSoccerOdds, setSoccerLoading, setSoccerError);
    });

  }, [apiKey]);

  if (soccerLoading) return <div>Loading...</div>;
  if (soccerError) return <div>Error: {soccerError.message}</div>;

  return (
    <div>
      {soccerOdds.map((odds, index) => (
        <div key={index}>
          <h2>{odds.sport_title}</h2>
          {/* Display odds details */}
        </div>
      ))}
    </div>
  );
};

export default EuroOdd;
