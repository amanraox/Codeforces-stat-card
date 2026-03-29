import ConfigForm from "@/components/ConfigForm";
import Footer from "@/components/Footer";
import FloatingCode from "@/components/FloatingCode";
import RatingBar from "@/components/RatingBar";
import EasterEgg from "@/components/EasterEgg";
import AnimatedSection from "@/components/AnimatedSection";
import RotatingFunFact from "@/components/RotatingFunFact";

export default function Home() {
  return (
    <main className="flex-1 relative">
      <FloatingCode />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--cf-blue) 1px, transparent 1px), linear-gradient(90deg, var(--cf-blue) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--cf-blue)" }} />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full opacity-10 blur-[80px]"
          style={{ background: "var(--cf-cyan)" }} />

        <div className="relative max-w-2xl mx-auto text-center z-10">
          {/* Terminal prompt badge */}
          <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-light bg-surface/80 backdrop-blur-sm mb-8">
            <span className="font-mono text-xs text-accent-green">$</span>
            <span className="font-mono text-xs text-text-secondary tracking-wide">
              curl codeforces-stat-card.vercel.app/api/tourist
            </span>
            <span className="w-2 h-4 bg-cf-cyan ml-1" style={{ animation: "blink 1s step-end infinite" }} />
          </div>

          {/* Title with easter egg zone */}
          <div className="relative">
            <EasterEgg />
            <h1 className="animate-slide-up stagger-1 font-bold text-5xl md:text-7xl tracking-tight leading-[1.05] mb-4">
              <span className="text-text-primary">Codeforces</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-cf-blue via-cf-cyan to-cf-blue bg-clip-text text-transparent">
                  Stat Card
                </span>
                {/* Underline glow */}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cf-cyan to-transparent" />
              </span>
            </h1>
          </div>

          <p className="animate-slide-up stagger-2 text-lg text-text-secondary max-w-lg mx-auto leading-relaxed mt-6">
            SVG stats cards for your CF profile.
            <br />
            <span className="text-text-muted">28 themes · rating history · heatmaps · fully customizable</span>
          </p>

          {/* Terminal-style code example */}
          <div className="animate-slide-up stagger-3 mt-10 text-left max-w-lg mx-auto">
            <div className="rounded-lg border border-border overflow-hidden">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-surface border-b border-border">
                <div className="w-3 h-3 rounded-full bg-accent-red/70" />
                <div className="w-3 h-3 rounded-full bg-accent-gold/70" />
                <div className="w-3 h-3 rounded-full bg-accent-green/70" />
                <span className="ml-2 text-xs font-mono text-text-muted">README.md</span>
              </div>
              <div className="code-block rounded-none border-0">
                <span className="text-text-muted">{"<!-- "}</span>
                <span className="text-text-secondary">paste in your README</span>
                <span className="text-text-muted">{" -->"}</span>
                <br />
                <span className="text-cf-cyan">{"![Codeforces Stats]"}</span>
                <span className="text-text-secondary">{"(https://codeforces-stat-card.vercel.app/api/"}</span>
                <span className="text-accent-green font-bold">tourist</span>
                <span className="text-text-secondary">{")"}</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in stagger-5 mt-16 flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-cf-blue/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Rating bar — scroll triggered */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-xs font-mono text-text-muted mb-4 tracking-wider uppercase">
            Rank colors rendered accurately
          </p>
          <RatingBar />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </div>

      {/* Config Section */}
      <AnimatedSection>
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-accent-green">~/config</span>
              <span className="font-mono text-xs text-text-muted">$</span>
              <h2 className="font-bold text-2xl text-text-primary">Build your card</h2>
            </div>
            <p className="text-text-secondary text-sm mb-8 pl-[72px]">
              pick a theme, tweak colors, hit generate.
            </p>
            <ConfigForm />
          </div>
        </section>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection staggerChildren staggerDelay={150}>
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-bold text-2xl text-text-primary text-center mb-12">
              <span className="text-cf-cyan font-mono text-lg mr-2">&gt;</span>
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                  title: "28 Themes",
                  desc: "Gradients, dark modes, solids. Full custom color builder.",
                  tag: "aesthetic",
                },
                {
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  title: "Extensions",
                  desc: "Submission heatmap + rating history chart.",
                  tag: "data viz",
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "CF API",
                  desc: "Official Codeforces API. No scraping. Fast & reliable.",
                  tag: "O(1)",
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  data-animate-child
                  className="group p-5 rounded-xl border border-border hover:border-cf-blue/30
                    bg-surface/50 hover:bg-surface transition-all duration-300
                    hover:shadow-lg hover:shadow-cf-blue/5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <svg className="w-5 h-5 text-cf-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                    </svg>
                    <span className="text-[10px] font-mono text-text-muted border border-border rounded px-1.5 py-0.5">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1 group-hover:text-cf-cyan transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* API Reference — terminal style */}
      <AnimatedSection>
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bold text-2xl text-text-primary mb-8 text-center">
              <span className="text-accent-green font-mono text-lg mr-2">$</span>
              API
            </h2>
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface border-b border-border">
                <div className="w-3 h-3 rounded-full bg-accent-red/70" />
                <div className="w-3 h-3 rounded-full bg-accent-gold/70" />
                <div className="w-3 h-3 rounded-full bg-accent-green/70" />
                <span className="ml-2 text-xs font-mono text-text-muted">api-reference.sh</span>
              </div>
              <div className="code-block rounded-none border-0 text-sm leading-loose">
                <span className="text-accent-green">GET</span>{" "}
                <span className="text-cf-cyan">/api/&#123;handle&#125;</span>
                <br /><br />
                <span className="text-text-muted"># params</span><br />
                <span className="text-cf-cyan">?theme</span>
                <span className="text-text-secondary">=dark|dracula|gradient-neon|...</span><br />
                <span className="text-cf-cyan">?ext</span>
                <span className="text-text-secondary">=heatmap|contest</span><br />
                <span className="text-cf-cyan">?hide</span>
                <span className="text-text-secondary">=currentRating,maxRating,...</span><br />
                <span className="text-cf-cyan">?font</span>
                <span className="text-text-secondary">=roboto+mono|fira+code|...</span><br />
                <span className="text-cf-cyan">?width</span>
                <span className="text-text-secondary">=300..800</span><br />
                <br />
                <span className="text-text-muted"># colors (hex, no #)</span><br />
                <span className="text-cf-cyan">?bg</span>
                <span className="text-text-secondary">=0d1117</span>{" "}
                <span className="text-cf-cyan">?accent</span>
                <span className="text-text-secondary">=00ff88</span><br />
                <br />
                <span className="text-text-muted"># background image</span><br />
                <span className="text-cf-cyan">?bg_image</span>
                <span className="text-text-secondary">=https://...</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Rotating fun fact */}
      <RotatingFunFact />

      <Footer />
    </main>
  );
}
