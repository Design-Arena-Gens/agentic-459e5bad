'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-void-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">PRISM</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#tech" className="text-zinc-400 hover:text-white transition-colors text-sm">Technology</a>
            <button className="bg-prism-yellow text-void-black px-6 py-2.5 rounded-full font-semibold hover:glow-yellow transition-all text-sm">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Background Grid */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-prism-yellow opacity-10 blur-3xl rounded-full animate-pulse"
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-ai opacity-10 blur-3xl rounded-full animate-pulse"
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-neon-pink opacity-10 blur-3xl rounded-full animate-pulse"
             style={{ animationDuration: '5s', animationDelay: '2s' }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block glass-effect border border-white/10 rounded-full px-6 py-2 mb-8">
            <span className="text-cyan-ai text-sm font-medium">⚡ AI-Powered Photo Intelligence</span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-none">
            Share Your
            <br />
            <span className="gradient-text">Moments</span>
            <br />
            Intelligently
          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
            The next-generation photo platform that understands context, organizes automatically,
            and protects your privacy with Face ID intelligence.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="bg-prism-yellow text-void-black px-8 py-4 rounded-full font-bold hover:glow-yellow transition-all text-lg">
              Start Free Trial
            </button>
            <button className="glass-effect border border-white/10 px-8 py-4 rounded-full font-semibold hover:border-white/30 transition-all text-lg">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-4xl">
            <div className="glass-effect border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-deep-surface rounded-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-prism-yellow/20 via-neon-pink/20 to-cyan-ai/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white/20 rounded-full" />
                    </div>
                    {i === 2 && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-neon-pink rounded-full px-3 py-1 text-xs font-semibold glow-pink">
                          Face ID
                        </div>
                      </div>
                    )}
                    {i === 4 && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-cyan-ai text-void-black rounded-full px-3 py-1 text-xs font-semibold glow-cyan">
                          AI Tagged
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Intelligence That
              <br />
              <span className="gradient-text">Understands</span>
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Powered by advanced AI to make your photos smarter, safer, and more organized
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass-effect border border-white/10 rounded-2xl p-8 hover:border-neon-pink/50 transition-all group">
              <div className="w-14 h-14 bg-neon-pink/20 rounded-full flex items-center justify-center mb-6 glow-pink">
                <svg className="w-7 h-7 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Face ID Recognition</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automatically organize and tag photos by face. Privacy-first technology that keeps
                your data secure and encrypted.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect border border-white/10 rounded-2xl p-8 hover:border-cyan-ai/50 transition-all group">
              <div className="w-14 h-14 bg-cyan-ai/20 rounded-full flex items-center justify-center mb-6 glow-cyan">
                <svg className="w-7 h-7 text-cyan-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Auto-Tagging</h3>
              <p className="text-zinc-400 leading-relaxed">
                AI analyzes scene context, objects, and locations. Search by anything - "sunset beach"
                or "coffee with friends."
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect border border-white/10 rounded-2xl p-8 hover:border-prism-yellow/50 transition-all group">
              <div className="w-14 h-14 bg-prism-yellow/20 rounded-full flex items-center justify-center mb-6 glow-yellow">
                <svg className="w-7 h-7 text-prism-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy Shield</h3>
              <p className="text-zinc-400 leading-relaxed">
                End-to-end encryption with on-device processing. Your photos never leave your control.
                Share with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="relative py-32 px-6 bg-deep-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Built With
                <br />
                <span className="gradient-text">Neural Tech</span>
              </h2>
              <p className="text-zinc-400 text-xl mb-8 leading-relaxed">
                Prism leverages cutting-edge machine learning models trained on billions of images
                to provide instant, accurate recognition and organization.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-cyan-ai rounded-full mt-2 glow-cyan" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">On-Device ML Processing</h4>
                    <p className="text-zinc-400">Zero server-side analysis. All intelligence runs locally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-neon-pink rounded-full mt-2 glow-pink" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Real-Time Face Detection</h4>
                    <p className="text-zinc-400">Instant recognition with 99.8% accuracy rate.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-prism-yellow rounded-full mt-2 glow-yellow" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Contextual Understanding</h4>
                    <p className="text-zinc-400">Scene analysis understands mood, setting, and composition.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect border border-white/10 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="glass-effect rounded-xl p-4 border border-cyan-ai/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-zinc-400">Neural Network Status</span>
                      <span className="text-cyan-ai text-xs font-semibold">ACTIVE</span>
                    </div>
                    <div className="h-2 bg-void-black rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-ai to-prism-yellow w-3/4 glow-cyan" />
                    </div>
                  </div>

                  <div className="glass-effect rounded-xl p-4 border border-neon-pink/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-zinc-400">Face Recognition</span>
                      <span className="text-neon-pink text-xs font-semibold">99.8%</span>
                    </div>
                    <div className="h-2 bg-void-black rounded-full overflow-hidden">
                      <div className="h-full bg-neon-pink w-11/12 glow-pink" />
                    </div>
                  </div>

                  <div className="glass-effect rounded-xl p-4 border border-prism-yellow/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-zinc-400">Scene Analysis</span>
                      <span className="text-prism-yellow text-xs font-semibold">PROCESSING</span>
                    </div>
                    <div className="h-2 bg-void-black rounded-full overflow-hidden">
                      <div className="h-full bg-prism-yellow w-5/6 glow-yellow" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-ai mb-1">2.4B</div>
                        <div className="text-xs text-zinc-400">Training Images</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neon-pink mb-1">50ms</div>
                        <div className="text-xs text-zinc-400">Processing Time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-prism-yellow mb-1">Zero</div>
                        <div className="text-xs text-zinc-400">Cloud Uploads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Ready To Experience
            <br />
            <span className="gradient-text">The Future?</span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of early adopters already using Prism to revolutionize
            how they capture and share memories.
          </p>

          <div className="glass-effect border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-void-black border border-white/10 rounded-full px-6 py-4 mb-4 focus:outline-none focus:border-prism-yellow transition-colors"
            />
            <button className="w-full bg-prism-yellow text-void-black px-8 py-4 rounded-full font-bold hover:glow-yellow transition-all">
              Join Waitlist
            </button>
            <p className="text-zinc-400 text-xs mt-4">
              No credit card required. Early access launching Q1 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold tracking-tight">
              <span className="gradient-text">PRISM</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
            <div className="text-sm text-zinc-400">
              © 2025 Prism AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
