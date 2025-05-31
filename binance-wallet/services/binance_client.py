import os
from dotenv import load_dotenv
from binance.client import Client

load_dotenv()

api_key = os.getenv("BINANCE_API_KEY")
api_secret = os.getenv("BINANCE_API_SECRET")

client = Client(api_key, api_secret)

def get_wallet_data():
    account = client.get_account()
    ativos = [
        {
            "asset": b["asset"],
            "free": float(b["free"]),
            "locked": float(b["locked"]),
            "total": float(b["free"]) + float(b["locked"])
        }
        for b in account["balances"]
        if float(b["free"]) > 0 or float(b["locked"]) > 0
    ]
    return ativos

import requests

def get_usdt_price(symbol):
    url = f"https://api.binance.com/api/v3/ticker/price?symbol={symbol}"
    try:
        response = requests.get(url)
        data = response.json()
        return float(data["price"])
    except:
        return 0.0
