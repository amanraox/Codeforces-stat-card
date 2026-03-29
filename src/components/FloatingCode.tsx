"use client";

import { useEffect, useState } from "react";

const SNIPPETS = [
  "if(n==1) return 0;",
  "sort(a,a+n);",
  "dp[i][j]=INF;",
  "while(t--){",
  "ans=max(ans,x);",
  "#include<bits/stdc++.h>",
  "int main(){",
  "cin>>n>>m;",
  "MOD=1e9+7;",
  "return 0;}",
  "for(int i=0;i<n;i++)",
  "memset(vis,0,sizeof vis);",
  "priority_queue<int> pq;",
  "cout<<ans<<endl;",
  "gcd(a,b)",
  "dfs(u,par);",
  "BIT[i]+=val;",
  "segtree.update(l,r);",
];

interface Particle {
  id: number;
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
}

export default function FloatingCode() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 15 + Math.random() * 25,
      opacity: 0.04 + Math.random() * 0.06,
      size: 10 + Math.random() * 4,
    }));
    setParticles(items);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute font-mono whitespace-nowrap text-cf-cyan"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.speed}s ease-in-out infinite`,
            animationDelay: `${-p.id * 2}s`,
          }}
        >
          {p.text}
        </div>
      ))}
    </div>
  );
}
