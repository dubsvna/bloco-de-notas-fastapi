from fastapi import FastAPI
from backend.database import engine, Base
app = FastAPI()


Base.metadata.create_all(bind=engine)

from backend.routes import router
app.include_router(router, prefix='/notes')

@app.get("/")
def root():
    return {"message": "API do Bloco de Notas funcionando!"}