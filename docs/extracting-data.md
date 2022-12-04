---
id: extracting-data
title: Extracting Data from Cozie
sidebar_label: Extracting Data from Cozie
---


## Extracting Data
Data can be extracted via our API

| Parameter     | Description / Value                                                          | 
|---------------|------------------------------------------------------------------------------|
|API URL        |https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx                                                            |
| API Key       | bUiB1HqmrK2eDBNqhsuGmaxrUKL1od8c3Qo6LJij                                     |
| experiment-id &zwnj; &zwnj; &zwnj; | The name you set in the cozie settings above (required) |
| user-id       | The user-id set above (optional, if not included all users are extracted)    |
| weeks         | Weeks of data (optional, default is 2 weeks)                                 |

### Extracting Data with Python

```python
# Import Python modules
import requests
import pandas as pd
import json

# Config
EXPERIMENT_ID = 'alpha'
PARICIPANT_ID = 'alpha01'
NO_WEEKS = 30
YOUR_TIMEZONE = 'Asia/Singapore'

# Assemble request
payload = {'experiment_id': EXPERIMENT_ID, 'weeks': NO_WEEKS, 'user_id': PARICIPANT_ID}
headers = {"Accept": "application/json", 'x-api-key': 'bUiB1HqmrK2eDBNqhsuGmaxrUKL1od8c3Qo6LJij'} # Test API key limited to 200 requests per day

# Query data
response = requests.get('https://6uc3obiy9f.execute-api.ap-southeast-1.amazonaws.com/default/cozie-fitbit-researcher-read-influx', params=payload, headers=headers)

# Convert response to Pandas dataframe
my_json = response.content.decode('utf8').replace("'", '"')
data = json.loads(my_json)
df = pd.read_json(data[1]['data']).T
df.index = df.index.tz_localize('UTC').tz_convert(YOUR_TIMEZONE)

df.head()
```