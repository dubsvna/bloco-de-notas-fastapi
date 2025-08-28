from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()
db_host = os.getenv("PGHOST")
db_port = os.getenv("PGPORT")
db_user = os.getenv("PGUSER")
db_password = os.getenv("PGPASSWORD")
db_name = os.getenv("PGDATABASE")


engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}', echo=True)
Base = declarative_base()

sessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)