from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Any
import os
import uvicorn
import asyncio

app = FastAPI(title="Web4 Assistant")

LLM_ADAPTER = os.getenv("LLM_ADAPTER", "local")

# --- Models ---
class ChatRequest(BaseModel):
    user_id: str
    message: str
    meta: Dict[str, Any] = {}

class ChatResponse(BaseModel):
    text: str
    meta: Dict[str, Any] = {}

# --- Adapter loader (pluggable) ---
def get_llm_adapter():
    if LLM_ADAPTER == "openai":
        from adapters.openai_adapter import OpenAIAdapter
        return OpenAIAdapter()
    elif LLM_ADAPTER == "google":
        from adapters.google_adapter import GoogleAdapter
        return GoogleAdapter()
    else:
        from adapters.local_adapter import LocalAdapter
        return LocalAdapter()

llm = get_llm_adapter()

@app.post("/assistant/chat", response_model=ChatResponse)
async def assistant_chat(req: ChatRequest):
    # basic rate-limit / safety check could be here
    try:
        reply = await llm.generate(req.message, user_id=req.user_id, meta=req.meta)
        return ChatResponse(text=reply, meta={})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/assistant/health")
def health():
    return {"ok": True, "adapter": LLM_ADAPTER}

# Run with: uvicorn main:app --host 0.0.0.0 --port 8000
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
