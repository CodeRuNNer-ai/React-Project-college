import React from 'react';

const pricingPlans = [
  { name: 'Free', price: '$0/mo', features: ['Basic Access', 'Limited Support'], popular: false },
  { name: 'Pro', price: '$19/mo', features: ['Unlimited Access', 'Priority Support', 'Advanced Tools'], popular: true },
  { name: 'Enterprise', price: '$99/mo', features: ['Custom Solutions', '24/7 Support', 'API Access'], popular: false },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">Simple Pricing</h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that works best for you.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`
                bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl 
                hover:shadow-3xl transition-all duration-300 hover:-translate-y-2
                ${plan.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''}
                relative overflow-hidden
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h2 className="text-3xl font-bold text-white mb-2">{plan.name}</h2>
              <div className="text-4xl font-black text-white mb-8">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-white/80 flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default Pricing;
