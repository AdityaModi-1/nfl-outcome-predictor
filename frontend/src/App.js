import React, { useState } from 'react';
import './App.css';

function App() {
  const [homePoints, setHomePoints] = useState('');
  const [awayPoints, setAwayPoints] = useState('');
  const [probability, setProbability] = useState(null);
  const [error, setError] = useState('');

  const predictGame = async () => {
    setError('');
    setProbability(null);

    const payload = {
      home_avg_points: parseFloat(homePoints),
      away_avg_points: parseFloat(awayPoints)
    };

    try {
      const response = await fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        // Convert decimal (0.75) to percentage (75%)
        setProbability((data.win_probability * 100).toFixed(1));
      }
    } catch (err) {
      setError("Failed to connect to server. Is Python running?");
    }
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>🏈 NFL Game Predictor</h1>
      
      <div style={{ margin: '20px auto', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h3>Enter Team Stats</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Home Team Avg Points:</label><br/>
          <input 
            type="number" 
            value={homePoints}
            onChange={e => setHomePoints(e.target.value)}
            style={{ padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Away Team Avg Points:</label><br/>
          <input 
            type="number" 
            value={awayPoints}
            onChange={e => setAwayPoints(e.target.value)}
            style={{ padding: '8px', width: '100%' }}
          />
        </div>

        <button 
          onClick={predictGame} 
          style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Predict Winner
        </button>
      </div>

      {probability !== null && (
        <div style={{ marginTop: '30px', padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '5px' }}>
          <h2>Home Win Probability: {probability}%</h2>
          {parseFloat(probability) > 50 
            ? <p>✅ The Home Team is favored to win!</p> 
            : <p>❌ The Home Team will likely lose.</p>
          }
        </div>
      )}

      {error && (
        <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
      )}
    </div>
  );
}

export default App;