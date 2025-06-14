export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-16">
            Our Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">450,000</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hectares Targeted</h3>
              <p className="text-gray-600">150,000 ha in Karabakh + 300,000 ha in Punjab</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">UN SDGs Aligned</h3>
              <p className="text-gray-600">Zero Hunger, Climate Action, Life on Land</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">UN Sustainable Development Goals</h3>
            <div className="flex justify-center space-x-8 text-4xl">
              <div title="Zero Hunger">🌾</div>
              <div title="Climate Action">🌍</div>
              <div title="Life on Land">🌿</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
