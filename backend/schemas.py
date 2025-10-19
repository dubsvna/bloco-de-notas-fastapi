from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class NotaBase(BaseModel):
    title: str
    description: str

class NotaCreate(NotaBase):
    pass  # Herda todos os campos como obrigatórios

class NotaResponse(BaseModel):
    id: int
    title: str
    description: str
    created_at: datetime

class Nota(NotaBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True ## Isso permite que o Pydantic leia dados ORM

class NotaUpdate(NotaBase):
    title: Optional[str] = None
    description: Optional[str] = None

    class Config:
        extra = 'forbid' #impede campos extra



