# -*- coding: utf-8 -*-
import json
import time



def store(data):
    with open('data.json', 'w') as json_file:
        json_file.write(json.dumps(data))

def load():
    with open('record.json') as json_file:
        data = json.load(json_file)
        da=data['data']
        for i in range(0,len(da)):
            print da[i]['title']



if __name__ == "__main__":

    # data = {}
    # data["last"]=time.strftime("%Y%m%d")
    # store(data)

    load()
    # print data