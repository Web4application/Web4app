import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = req.query.address as string;
  if (!address) return res.status(400).json({ error: "address required" });

  try {
    const rpcRes = await fetch(`http://localhost:8545`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBalance",
        params: [address, "latest"]
      })
    });
    const rpcJson = await rpcRes.json();
    const balanceWei = parseInt(rpcJson.result, 16);
    return res.status(200).json({ balance: (balanceWei / 1e18).toString() });
  } catch (e:any) {
    return res.status(500).json({ error: e.message });
  }
}
