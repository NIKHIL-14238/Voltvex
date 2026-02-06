import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import joblib

# Step 1: Generate slightly random training data
np.random.seed(None)  # This gives different results every time

# 200 rows of fake but realistic data
data = pd.DataFrame({
    'hour': np.random.randint(0, 24, 200),
    'day_of_week': np.random.randint(0, 7, 200),
    'historical_price': np.random.uniform(30, 70, 200),
    'energy_demand': np.random.randint(500, 3000, 200)
})

# Step 2: Make base_price based on a pattern + noise
data['base_price'] = (
    data['historical_price'] * 0.6 +
    data['energy_demand'] * 0.015 +
    data['hour'] * 0.3 +
    np.random.normal(0, 3, 200)  # add some randomness
)

# Step 3: Split and train the model
X = data[['hour', 'day_of_week', 'historical_price', 'energy_demand']]
y = data['base_price']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=None)

model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

# Step 4: Save the model
joblib.dump(model, 'base_price_model.pkl')
print("✅ Model trained with random data and saved as base_price_model.pkl")
