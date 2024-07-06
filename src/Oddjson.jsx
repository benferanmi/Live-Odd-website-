export const OddsData = [
    {
      gameId: "G001",                  // Unique identifier for the game
      gameName: "Team A vs Team B",    // Description of the game
      gameTime: "2024-07-10 18:00",    // Date and time of the game
      platforms: [
        {
          platformName: "SportyBet",   // Name of the platform
          odds: {
            homeWin: 2.45,             // Odds for home team win
            draw: 3.15,                // Odds for draw
            awayWin: 2.90              // Odds for away team win
          },
          betTypes: [
            {
              type: "1X2",             // Bet type (e.g., "1X2")
              options: {
                home: { label: "1", odds: 2.45 },
                draw: { label: "X", odds: 3.15 },
                away: { label: "2", odds: 2.90 }
              }
            },
            {
              type: "Over/Under",      // Bet type for over/under
              options: {
                over: { label: "Over 2.5", odds: 1.95 },
                under: { label: "Under 2.5", odds: 1.85 }
              }
            },
            // Additional bet types can be added here
          ]
        },
        {
          platformName: "Bet365",      // Another platform
          odds: {
            homeWin: 2.50,
            draw: 3.20,
            awayWin: 2.85
          },
          betTypes: [
            {
              type: "1X2",
              options: {
                home: { label: "1", odds: 2.50 },
                draw: { label: "X", odds: 3.20 },
                away: { label: "2", odds: 2.85 }
              }
            },
            {
              type: "Over/Under",
              options: {
                over: { label: "Over 2.5", odds: 1.90 },
                under: { label: "Under 2.5", odds: 1.95 }
              }
            },
          ]
        },
        // Add more platforms here
      ]
    },
    {
      gameId: "G002",                  // Another game
      gameName: "Team C vs Team D",
      gameTime: "2024-07-11 20:00",
      platforms: [
        {
          platformName: "SportyBet",
          odds: {
            homeWin: 1.80,
            draw: 3.60,
            awayWin: 4.20
          },
          betTypes: [
            {
              type: "1X2",
              options: {
                home: { label: "1", odds: 1.80 },
                draw: { label: "X", odds: 3.60 },
                away: { label: "2", odds: 4.20 }
              }
            },
            {
              type: "Over/Under",
              options: {
                over: { label: "Over 3.5", odds: 2.10 },
                under: { label: "Under 3.5", odds: 1.70 }
              }
            },
          ]
        },
        {
          platformName: "Bet365",
          odds: {
            homeWin: 1.85,
            draw: 3.55,
            awayWin: 4.00
          },
          betTypes: [
            {
              type: "1X2",
              options: {
                home: { label: "1", odds: 1.85 },
                draw: { label: "X", odds: 3.55 },
                away: { label: "2", odds: 4.00 }
              }
            },
            {
              type: "Over/Under",
              options: {
                over: { label: "Over 3.5", odds: 2.05 },
                under: { label: "Under 3.5", odds: 1.75 }
              }
            },
          ]
        },
      ]
    },
    // Additional games can be added here
  ];
  