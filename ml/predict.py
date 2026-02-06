import pandas as pd
import joblib

# Load the trained model correctly using joblib
model = joblib.load("base_price_model.pkl")

# Load the new data
new_data = pd.read_csv("new_data.csv")

# Make predictions
predictions = model.predict(new_data)

# Show predictions
print("Predictions:")
print(predictions)
