from sqlalchemy import Column, Integer, String, Text, DateTime
from database import Base
import datetime

class Nota(Base):
    __tablename__ = "notas"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), index=True)
    description = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
