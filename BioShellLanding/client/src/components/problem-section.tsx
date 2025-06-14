export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Why BioShell?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed">
            Post-conflict and climate-hit soils are lifeless, costly to farm, and dependent on chemicals. BioShell gives soil a new breath naturally.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl mb-4">💥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Degraded Land</h3>
              <p className="text-gray-600">Post-conflict and climate-damaged soils lack essential nutrients and structure</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expensive Chemicals</h3>
              <p className="text-gray-600">Traditional fertilizers and pesticides create costly dependencies for farmers</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pest Pressure</h3>
              <p className="text-gray-600">Weakened soils are vulnerable to pests and crop diseases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
