# NFL Game Outcome Predictor 
A Machine Learning project that predicts the winner of NFL games for the 2025 season.
This model uses historical play-by-play data (2024-2025) to engineer performance features and trains a Logistic Regression classifier to forecast game outcomes.

How It Works:
1. Collects data by pulling real-time play-by-play data using the 'nfl_data_py' library
2. Calculates rolling averages for **Points Scored** and **Points ALlowed** for every team
3. Trains a model to determine the weight of offensive vs. defensive perforamnce
4. Outputs a probability confidence score

Created by Aditya Modi - https://www.linkedin.com/in/aditya-modi1/
