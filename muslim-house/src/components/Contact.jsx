import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream dark:bg-[#0F1F17] relative">
      <div className="absolute inset-0 star-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-gold font-arabic text-xl mb-3">تواصل معنا</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-deep dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto">
            Have a question, want to volunteer, or need assistance? We&rsquo;re here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="fade-up space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-emerald-deep dark:text-white mb-6">
                Reach Out to Us
              </h3>
              <p className="text-muted dark:text-white/60 leading-relaxed mb-8">
                Whether you&rsquo;re a longtime member or visiting for the first time, we welcome you
                with open arms. As the Imam says — &ldquo;Brother, pull back and rest your camel.&rdquo;
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+18105135422"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted dark:text-white/40">Phone</p>
                  <p className="text-emerald-deep dark:text-white font-bold">(810) 513-5422</p>
                </div>
              </a>

              <a
                href="mailto:themuslimhouseflint@gmail.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted dark:text-white/40">Email</p>
                  <p className="text-emerald-deep dark:text-white font-bold">themuslimhouseflint@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gold/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted dark:text-white/40">Address</p>
                  <p className="text-emerald-deep dark:text-white font-bold">804 MLK Drive, Flint, MI 48503</p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/The-Muslim-House-148159981880787/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted dark:text-white/40">Facebook</p>
                  <p className="text-emerald-deep dark:text-white font-bold">Follow us on Facebook</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="fade-up">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gold/10 shadow-xl">
              {submitted && (
                <div className="mb-6 bg-emerald-deep/10 text-emerald-deep dark:bg-gold/10 dark:text-gold rounded-xl p-4 text-center text-sm font-medium">
                  Thank you for reaching out! We&rsquo;ll get back to you soon, insha&rsquo;Allah.
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-emerald-deep dark:text-white/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-white/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-dark dark:text-white placeholder-muted"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-deep dark:text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-white/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-dark dark:text-white placeholder-muted"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-deep dark:text-white/80 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-white/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-dark dark:text-white placeholder-muted"
                    placeholder="(810) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-deep dark:text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-white/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-dark dark:text-white placeholder-muted resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-deep hover:bg-emerald-medium text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
