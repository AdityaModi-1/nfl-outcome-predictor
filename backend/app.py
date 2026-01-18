from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app) 


print("Loading model...")
model = joblib.load('nfl_model.pkl')
print("Model loaded successfully!")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    

    try:
        features = pd.DataFrame([{
            'home_avg_points': float(data['home_avg_points']),
            'away_avg_points': float(data['away_avg_points'])
        }])
        
       
        prediction_prob = model.predict_proba(features)[0][1]
        
        return jsonify({'win_probability': prediction_prob})
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)