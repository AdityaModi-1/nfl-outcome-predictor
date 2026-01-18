# NFL Outcome Predictor (Full-Stack AI Application)
- A machine learning-powered web application that predicts NFL game winners based on average team scoring.
- This project takes a trained Logistic Regression model (built in Python/Scikit-Learn) and deploys it to the web using a Flask and React.js frontend.

Tech Stack:
Frontend: React.js
Backend: Python Flask
Machine Learning: Scikit-Learn, Pandas, Joblib
Model Serialization: Pickle (.pkl)

How It Works:
1. User inputs team stats into React UI.
2. Frontend sends a 'POST' request with JSON payload into Flask API.
3. Flask deserializes the pre-trained Machine Learning Model.
4. Model computes the win probability.
5. Result is returned to the UI and displayed dynamically.
