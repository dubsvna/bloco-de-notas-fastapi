from sqlalchemy.orm import Session
from datetime import datetime
import models, schemas

def get_notas(db:Session, skip: int = 0, limit: int = 100):
    return db.query(models.Nota).offset(skip).limit(limit).all()

def create_nota(db:Session, nota: schemas.NotaCreate):
    db_nota = models.Nota(
        title=nota.title,
        description=nota.description,
        created_at=datetime.now()
    )
    db.add(db_nota)
    db.commit()
    db.refresh(db_nota)
    return db_nota

def get_nota(db: Session, id: int):
    notas = db.query(models.Nota).filter(models.Nota.id == id)
    return notas.first()

def update_nota(db: Session, id: int, nota: schemas.NotaUpdate):
    db_nota = get_nota(db, id)
    db_nota.title = nota.title
    db_nota.description = nota.description
    db.commit()
    db.refresh(db_nota)
    return db_nota

def delete_nota(db: Session, id: int):
    notas = db.query(models.Nota).filter(models.Nota.id == id)
    db.delete(notas)
    db.commit()
