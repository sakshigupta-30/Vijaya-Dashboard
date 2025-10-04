import React from "react";

const plans = [
  {
    name: "Basic",
    price: 9,
    features: ["Access to basic videos", "Limited support"],
    popular: false,
  },
  {
    name: "Standard",
    price: 19,
    features: ["Access to all static videos", "Priority support"],
    popular: true,
  },
  {
    name: "Premium",
    price: 29,
    features: ["Access to all premium videos", "1-on-1 coaching", "Exclusive content"],
    popular: false,
  },
];

export default function Upgrade() {
  const handleUpgrade = (plan) => {
    console.log("Upgrade to:", plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex flex-col items-center py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-4 text-white">Choose Your Plan</h1>
      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Upgrade your account to unlock more Zumba videos and exclusive content. Pick the plan that fits you best.
      </p>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-2xl p-8 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300
              ${plan.popular ? "border-white bg-gray-800" : "border-gray-700 bg-gray-900"}
            `}
          >
            {plan.popular && (
              <div className="bg-white font-bold text-black text-xs uppercase px-3 py-1 rounded-full mb-4 w-max">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-4 text-white">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6 text-white">₹ {plan.price}/month</p>
            <ul className="mb-6 space-y-2 text-gray-300">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2 text-green-500 font-bold">✔</span> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade(plan.name)}
              className={`w-full py-3 rounded-xl font-semibold transition-colors duration-200
                ${plan.popular ? "bg-white text-black hover:bg-white" : "bg-gray-700 hover:bg-gray-800 text-white"}
              `}
            >
              Upgrade to {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
