import imp
from fastapi import FastAPI
from pip import List

from amazonscrap import search_website
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get('/q={query}')
def search(query:str)->List:
    # print(query)
    x = search_website(query)
    return x

@app.get("/items/{item_id}")
async def read_item(item_id: str, q: str | None = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}

origins = ["*"]

app = CORSMiddleware(
    app=app,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)    