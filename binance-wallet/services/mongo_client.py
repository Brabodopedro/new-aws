import os
from dotenv import load_dotenv
from pymongo import MongoClient
from datetime import datetime

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("MONGO_DB")]
collection = db[os.getenv("MONGO_COLLECTION")]

def salvar_dados(dados):
    doc = {
        "data_coleta": datetime.utcnow(),
        "carteira": dados
    }
    collection.insert_one(doc)
    print("💾 Dados salvos no MongoDB.")
    
def salvar_dados_com_preco(dados):
    for ativo in dados:
        existente = collection.find_one({"carteira.asset": ativo["asset"]})
        if not existente:
            doc = {
                "asset": ativo["asset"],
                "quantidade": ativo["total"],
                "valor_entrada_usdt": ativo["valor_entrada_usdt"],
                "data_coleta": datetime.utcnow()
            }
            collection.insert_one(doc)
            print(f"💾 Ativo {ativo['asset']} salvo com valor de entrada.")
        else:
            print(f"🔁 Ativo {ativo['asset']} já registrado. Ignorado.")
