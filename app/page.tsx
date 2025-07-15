import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] border-b border-[#404040]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity" href="/">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1a1a2e] rounded-sm"></div>
            </div>
            <span className="text-white font-semibold text-lg">Cognition</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-[#4a90e2] transition-colors">
                <span>DEVIN</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
            <a className="text-white hover:text-[#4a90e2] transition-colors" href="/blog">BLOG</a>
            <a className="text-white hover:text-[#4a90e2] transition-colors" href="/contact">CONTACT US</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-[#4a90e2] transition-colors">
                <span>CAREERS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <a className="bg-[#4a90e2] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#357abd] transition-colors" href="/try-devin">TRY DEVIN</a>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative bg-[#1a1a2e] min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a2e]">
          <div className="absolute inset-0 opacity-40"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-grid-pattern bg-repeat"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-dark/50 border border-border">
              <span className="text-sm font-medium text-accent-blue">COGNITION IS AN APPLIED AI LAB</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            WE&apos;RE THE MAKERS OF
          </h1>
          <div className="mb-12">
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-blue">[ DEVIN</span>
              <span className="text-lg md:text-xl text-text-secondary ml-4">The AI software engineer</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-blue ml-2">]</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-accent-blue text-text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 min-w-[200px]">
              GET STARTED WITH DEVIN
            </button>
            <button className="border border-accent-blue text-accent-blue px-8 py-3 rounded-lg font-medium hover:bg-accent-blue hover:text-text-primary transition-colors duration-300 min-w-[200px]">
              LEARN MORE ABOUT DEVIN
            </button>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[var(--text-section-heading)] font-[var(--font-weight-section-heading)] leading-[var(--leading-section-heading)] text-[var(--color-text-primary)] mb-4">
              more about our work &amp; recent news
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card Component */}
            <div className="group cursor-pointer">
              <div className="bg-[#2d2d3e] rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder-image.jpg"
                    alt="Placeholder"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    sizes="100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">2025-07-14</span>
                    <span className="text-sm text-[#4a90e2] px-2 py-1 bg-[#1a1a2e] rounded">Acquisition</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-tight">
                    Cognition&apos;s acquisition of Windsurf
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">
                    Strategic acquisition expanding AI development capabilities
                  </p>
                  <div className="text-sm text-gray-400 font-medium">Scott Wu</div>
                </div>
              </div>
            </div>
            {/* Add more news cards here */}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-[#4a90e2] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300">
              See more projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
