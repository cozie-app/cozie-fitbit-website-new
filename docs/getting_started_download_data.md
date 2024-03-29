---
id: download-data
title: Download Cozie-Fitbit data
sidebar_label: Download Cozie Data
---


## Extracting Data
Data can be extracted via our web API:

| Parameter     | Description / Value                                                                                    | 
|---------------|--------------------------------------------------------------------------------------------------------|
| API URL       | https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx|
| API key       | Reach out to cozie.app@gmail.com for an API key                                                        |
| experiment_id &zwnj; &zwnj; &zwnj; | Value entered in the Cozie settings                                               |
| user_id       | Value entered in the Cozie settings (optional, if not included all users are extracted)                |
| weeks         | Weeks of data (optional, default is 2 weeks, time frame 2 weeks from now until now)                    |

### Extracting Data with Python

The Python script below is all you need to download data logged with the Cozie clock face. Make sure to configure at least `ID_EXPERIMENT`, `ID_PARTICIPANT`, and `API_KEY` before executing the script.

```python
import requests
import json
import pandas as pd
import matplotlib.pyplot as plt

# Settings
YOUR_TIMEZONE = 'Asia/Singapore'
ID_PARTICIPANT = 'alpha'
ID_EXPERIMENT = 'alpha01'
WEEKS = "100"  # Number of weeks from which the data is retrieved, starting from now
API_KEY = '' # reach out to cozie.app@gmail.com for an API_KEY
API_URL = 'https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx'

# Assemble request
payload = {'experiment_id': ID_EXPERIMENT, 'weeks': WEEKS, 'user_id':ID_PARTICIPANT}
headers = {"Accept": "application/json", 'x-api-key': API_KEY}

# Query data
response = requests.get(API_URL, params=payload, headers=headers)

# Convert response to Pandas dataframe
my_json = response.content.decode('utf8').replace("'", '"')
data = json.loads(my_json, )
df = pd.read_json(data[1]['data']).T

df.index = pd.to_datetime(df['index'], unit='ms')
df = df.tz_localize('UTC').tz_convert(YOUR_TIMEZONE)
df = df.drop(columns=['index'])

# Display dataframe
df.head()
```

### Some mild data processing
The raw data has the watch survey responses encoded as numbers between 9 and 12. These values can be converted back into the words shown on the clock face with the code snippet below.
```python
# Translate integer values into strings for main question flow
translation_table = {'comfort':      { 9: 'Not Comfy',
                                      10: 'Comfy'},
                     'thermal':      { 9: 'No change',
                                      10: 'Warmer',
                                      11: 'Cooler',
                                      12: 'Something else'},
                     'indoorOutdoor':{10: 'Outdoor',
                                      11: 'Indoor'},
                     'location':     { 9: 'Neither',
                                      10: 'Office',
                                      11: 'Home'},
                     'clothing':     { 9: 'Medium',
                                      10: 'Heavy',
                                      11: 'Light'},
                     'airSpeed':     {10: 'Yes',
                                      11: 'No'},
                     'met':          { 9: 'Sitting',
                                      10: 'Standing',
                                      11: 'Resting'},
                     'anyChange':    {10: 'No',
                                      11: 'Yes'},
                     'mood':         { 9: 'Neutral',
                                      10: 'Bad',
                                      11: 'Good'},
                     'noise':        { 9: 'No Change',
                                      10: 'Louder',
                                      11: 'Quieter'},
                     'light':        { 9: 'No Change',
                                      10: 'Brighter',
                                      11: 'Dimmer'}
                     }

df = df.replace(translation_table)
```

Additionally, the column names can also be replaced with the question show on the clock face:
```python
# Change column names
df = df.rename(columns={'comfort':'Clock face',
                        'thermal':'Would you prefer to be?',
                        'indoorOutdoor':'Are you?', 
                        'location':'Where are you?', 
                        'clothing':'What are you wearing?', 
                        'airSpeed':'Can you perceive air movement around you?', 
                        'met':'Activity, lat 10-min?', 
                        'anyChange':'Any changes in clo, loc, or met past 10-m?', 
                        'mood':'What mood are you in?', 
                        'noise':'Sound preference', 
                        'light':'Light preference'})

df.head()
```
