from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from backend import service, schemas
from backend.database import get_db


router = APIRouter()

@router.get('/hello')
def root():
    return {'message': 'Hello World'}

@router.get('/', response_model=List[schemas.NotasResponse])
def list_notas(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notas = service.get_notas(db, skip=skip, limit=limit)
    return notas

@router.get('/{id}', response_model=schemas.NotasResponse)
def get_nota(id: int, db: Session = Depends(get_db)):
    nota = service.get_nota(db, id=id)
    return nota

@router.post('/create_nota', response_model=schemas.NotasResponse)
def create_nota(note: schemas.NotaCreate, db: Session = Depends(get_db)):
    return service.create_notas(db, nota=note)