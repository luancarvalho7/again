export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-16">
          The 5 Minute{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-cormorant italic">
            AI Growth
          </span>{" "}
          Audit
          <br />
          That See What Works, What Fails
          <br />
          What to Do Next
        </h1>

        {/* Start Button */}
        <button className="bg-white text-black px-12 py-4 rounded-full text-xl font-medium hover:bg-gray-100 transition-colors duration-200">
          Start
        </button>
      </div>
    </div>
  )
}