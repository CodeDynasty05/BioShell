export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed">
            Moisture activates BioShell, slowly releasing nutrients and pest repellents while the capsule fully decomposes.
          </p>
          
          {/* Process visualization */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💧</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Moisture Contact</h3>
              <p className="text-sm text-gray-600">Capsule absorbs soil moisture</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔄</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gradual Release</h3>
              <p className="text-sm text-gray-600">Nutrients slowly dissolve into soil</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Soil Revival</h3>
              <p className="text-sm text-gray-600">pH balances, structure improves</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">♻️</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Complete Breakdown</h3>
              <p className="text-sm text-gray-600">Capsule fully biodegrades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
