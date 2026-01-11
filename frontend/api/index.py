from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from upstash_redis import Redis
import os
from dotenv import load_dotenv

load_dotenv()

redis = Redis(
    url=os.getenv("KV_REST_API_URL"),
    token=os.getenv("KV_REST_API_TOKEN"),
)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/views")
def get_views():
    # Dummy implementation, replace with actual logic to get views
    print("Incrementing view count")
    count = redis.incr("portfolio_views")
    return {"views": count}