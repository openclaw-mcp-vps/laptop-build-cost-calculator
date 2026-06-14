export default function Home() {
  const faqs = [
    {
      q: 'How does real-time pricing work?',
      a: 'We pull live data from verified supplier APIs so your cost estimates reflect current market prices, not outdated catalogs.'
    },
    {
      q: 'Can I save and share my build configurations?',
      a: 'Yes. Subscribers can save unlimited builds, revisit them anytime, and share a link with teammates or clients.'
    },
    {
      q: 'Which suppliers are in the database?',
      a: 'We index major distributors including Digi-Key, Mouser, and regional OEM partners, with automated daily price refreshes.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Hardware DIY
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Custom Laptop Build<br />
          <span className="text-[#58a6ff]">Cost Calculator</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Estimate real costs, discover verified suppliers, and store your configurations — built for hardware enthusiasts, small manufacturers, and educational labs.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Building — $19/mo
        </a>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', title: 'Live Pricing', desc: 'Supplier APIs updated daily' },
          { icon: '🗄️', title: 'Save Builds', desc: 'Unlimited saved configurations' },
          { icon: '🔍', title: 'Supplier DB', desc: 'Verified global distributors' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Real-time supplier pricing',
              'Unlimited saved builds',
              'Full supplier database access',
              'Automated price alerts',
              'CSV export',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Laptop Build Cost Calculator. All rights reserved.
      </footer>
    </main>
  )
}
