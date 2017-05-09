#!/usr/bin/env python
# coding: utf-8

import json
import requests

BASE = "http://localhost:8080/api/"

ENTITY = "list/{0}/task"

# set the ids according to the lists ids created in the listsSeed
lists_ids = ['5066549580791808',
                '5629499534213120',
                    '6192449487634432'];


data = [
    {
        'title': 'Task 01',
        'description': 'Very importat task 01',
        'priority': 'high'
    },
    {
        'title': 'Task 02',
        'description': 'Important task 02',
        'priority': 'medium'        
    },
    {
        'title': 'Task 03',
        'description': 'Not so much important task 03',
        'priority': 'low'       
    },
]

for id in lists_ids:
    for d in data:
        post = requests.post(BASE + ENTITY.format(id),
                            data=json.dumps(d))
        print post.text
