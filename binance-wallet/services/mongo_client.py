import os
from pymongo import MongoClient
from datetime import datetime  # Não esquecer esse import!

MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongo:27017")
DB_NAME = os.getenv("MONGO_DB", "binance")
COLLECTION = os.getenv("MONGO_COLLECTION", "carteira")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
carteira_collection = db[COLLECTION]

def salvar_dados(dados):
    doc = {
        "data_coleta": datetime.utcnow(),
        "carteira": dados
    }
    carteira_collection.insert_one(doc)
    print("💾 Dados salvos no MongoDB.")
    
def salvar_dados_com_preco(dados):
    for ativo in dados:
        existente = carteira_collection.find_one({"carteira.asset": ativo["asset"]})
        if not existente:
            doc = {
                "asset": ativo["asset"],
                "quantidade": ativo["total"],
                "valor_entrada_usdt": ativo["valor_entrada_usdt"],
                "data_coleta": datetime.utcnow()
            }
            carteira_collection.insert_one(doc)
            print(f"💾 Ativo {ativo['asset']} salvo com valor de entrada.")
        else:
            print(f"🔁 Ativo {ativo['asset']} já registrado. Ignorado.")
