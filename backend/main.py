from fastapi import FastAPI
app = FastAPI()


from routes import router
app.include_router(router, prefix='/notes')

#@app.get("/")
#def root():
 #   return {"message": "API do Bloco de Notas funcionando!"}
