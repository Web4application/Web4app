import Link from "next/link";
export default function Home(){return <h1>Web4</h1>}
  return (
    <div style={{ padding: 20 }}>
      <h1>Web4 — The Intelligent Internet</h1>
      <ul>
        <li><Link href="/wallet">Wallet</Link></li>
        <li><Link href="/assistant">Assistant (demo)</Link></li>
      </ul>
    </div>
  )
}
