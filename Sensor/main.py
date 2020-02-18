import os
import time
import sys
import requests
import json
from datetime import datetime

tagLastSeenDictionary = {}

dapr_port = os.getenv("DAPR_HTTP_PORT", 3500)
dapr_host = os.getenv("DAPR_HOST", "localhost")
deviceId = os.getenv("BALENA_DEVICE_UUID")
dapr_url = "http://{}:{}/v1.0/publish/rabbit".format(dapr_host, dapr_port)
headers = {'Content-type': 'application/json', 'Accept': 'application/json'}

n = 0
while True:
    n += 1
    payload = { "data": {"orderId": n}}
    print(payload, flush=True)
    try:
        response = requests.post(dapr_url, data=json.dumps(payload), headers=headers)
        print(response.text, flush=True)

    except Exception as e:
        print(e)

    time.sleep(1)