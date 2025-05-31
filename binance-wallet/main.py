from services.binance_client import get_wallet_data, get_usdt_price
from services.mongo_client import salvar_dados_com_preco

if __name__ == "__main__":
    print("🔍 Consultando carteira Binance...")
    dados = get_wallet_data()

    print("📊 Seus ativos:")
    for ativo in dados:
        symbol = ativo['asset'] + "USDT"
        preco_atual = get_usdt_price(symbol)
        ativo['valor_entrada_usdt'] = preco_atual
        print(f"{ativo['asset']}: {ativo['total']} (Valor entrada: ${preco_atual})")

    salvar_dados_com_preco(dados)
