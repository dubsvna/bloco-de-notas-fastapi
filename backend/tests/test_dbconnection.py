from backend.database import  engine
from sqlalchemy import text

def test_connection():
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT version()"))
            version = result.scalar()
            print(f"Conexão bem-sucedida! PostgreSQL version: {version}")
            connection.execute(text("CREATE TABLE IF NOT EXISTS test_connection (id SERIAL PRIMARY KEY, message TEXT)"))
            print("Tabela de teste criada/comprovada")
    except Exception as e:
        print(f"Erro de conexão: {e}")

if __name__ == '__main__':
    test_connection()