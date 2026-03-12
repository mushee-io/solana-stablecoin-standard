import Link from "next/link";

const links = [["Dashboard", "/dashboard"],["Compliance", "/compliance"],["Policies", "/policies"],["Audit", "/audit"],["Operations", "/operations"]];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Stablecoin OS</h1>
          <p className="text-zinc-300 mt-3 max-w-2xl">Issuer operating system for Solana stablecoins with SSS-1 and SSS-2 presets, policy-aware actions, audit exports, and operator workflows.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-zinc-800 p-5 hover:border-zinc-600 transition">
              <div className="text-xl font-semibold">{label}</div>
              <div className="text-zinc-400 mt-2">Open {label.toLowerCase()} panel</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
