class LocalAdapter:
    async def generate(self, prompt, user_id=None, meta=None):
        # DEV: deterministic stub reply
        return f"(dev) Echo: {prompt}"
