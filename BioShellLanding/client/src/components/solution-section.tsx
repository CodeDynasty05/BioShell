export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Solution
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="grid gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Restores soil pH & structure</h3>
                    <p className="text-gray-600">Natural minerals rebalance soil chemistry and improve texture</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural pest protection</h3>
                    <p className="text-gray-600">Neem and beneficial microorganisms provide organic defense</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fully biodegradable</h3>
                    <p className="text-gray-600">PVA coating completely dissolves, leaving no environmental trace</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable for small farmers</h3>
                    <p className="text-gray-600">Cost-effective solution reduces long-term chemical dependency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">BioShell Capsule Structure</h3>
              <div className="relative">
                {/* Capsule diagram */}
                <div className="w-full h-64 bg-gradient-to-br from-green-200 to-green-300 rounded-full relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full">
                    <div className="absolute inset-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <div className="text-white font-semibold text-center">
                        <div className="text-sm">CORE</div>
                        <div className="text-xs mt-1">Nutrients & Protection</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Labels */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-200 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700"><strong>Coating:</strong> Biodegradable PVA film</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700"><strong>Core:</strong> Seashell powder, limestone, neem, Trichoderma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
