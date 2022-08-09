import pandas as pd
import json

df = pd.read_csv('data.csv')
df_dict = df.to_dict(orient='records')
final_json = json.dumps(df_dict)

with open('usable-data.json', 'w') as file:
    file.write(final_json)
