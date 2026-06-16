import { useState } from 'react';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';

const plans = [
  { months: 3, label: '3 Months', interest: 0 },
  { months: 6, label: '6 Months', interest: 5 },
  { months: 12, label: '12 Months', interest: 8 },
  { months: 24, label: '24 Months', interest: 12 },
];

const perks = [
  'Zero processing fees',
  'No hidden charges',
  'Instant approval',
  'Flexible repayment',
];

const banks = ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'SBI', 'Bajaj Finance', 'Kotak Bank'];

export default function EMI() {
  const [amount, setAmount] = useState(100000);
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);

  const totalPayable = amount + (amount * selectedPlan.interest) / 100;
  const monthly = totalPayable / selectedPlan.months;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Flexible Financing</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Easy EMI Plans</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            World-class robotic surgery shouldn't be a financial burden. Choose a payment plan that works for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Calculator card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                <Calculator size={18} className="text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">EMI Calculator</h3>
            </div>

            {/* Amount slider */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700">Treatment Amount</label>
                <span className="text-teal-600 font-bold text-lg">
                  &#8377;{amount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={1000000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                <span>&#8377;10,000</span>
                <span>&#8377;10,00,000</span>
              </div>
            </div>

            {/* Plan selection */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Select Tenure</p>
              <div className="grid grid-cols-4 gap-3">
                {plans.map((plan) => (
                  <button
                    key={plan.months}
                    onClick={() => setSelectedPlan(plan)}
                    className={`rounded-2xl py-3 px-2 text-center transition-all duration-200 border-2 ${
                      selectedPlan.months === plan.months
                        ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/25'
                        : 'border-gray-200 text-gray-600 hover:border-teal-300 hover:bg-teal-50'
                    }`}
                  >
                    <p className="font-bold text-sm">{plan.months}</p>
                    <p className="text-xs opacity-80">months</p>
                    {plan.interest === 0 ? (
                      <p className="text-xs font-semibold mt-1 text-yellow-400">0% interest</p>
                    ) : (
                      <p className={`text-xs mt-1 ${selectedPlan.months === plan.months ? 'text-teal-200' : 'text-gray-400'}`}>
                        {plan.interest}% p.a.
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-teal-200 text-xs mb-1">Monthly EMI</p>
                  <p className="text-2xl font-black">&#8377;{Math.round(monthly).toLocaleString('en-IN')}</p>
                </div>
                <div className="border-x border-white/20">
                  <p className="text-teal-200 text-xs mb-1">Total Payable</p>
                  <p className="text-2xl font-black">&#8377;{Math.round(totalPayable).toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-teal-200 text-xs mb-1">Interest</p>
                  <p className="text-2xl font-black">{selectedPlan.interest}%</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/30 flex items-center justify-center gap-2 group">
              Apply for EMI
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/60">
              <h3 className="font-bold text-gray-900 text-lg mb-6">Why Choose Our EMI Plans?</h3>
              <ul className="space-y-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/60">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Partner Banks &amp; Lenders</h3>
              <p className="text-gray-500 text-sm mb-6">We work with 15+ trusted financial institutions for seamless approval.</p>
              <div className="grid grid-cols-3 gap-3">
                {banks.map((bank) => (
                  <div key={bank} className="bg-gray-50 rounded-xl py-3 px-2 text-center text-xs font-semibold text-gray-600 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">
                    {bank}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-600/50 rounded-full" />
              <div className="relative z-10">
                <p className="text-yellow-400 font-bold text-4xl mb-2">0% EMI</p>
                <p className="text-teal-100 text-sm leading-relaxed mb-4">
                  Available on select procedures for up to 3 months. Speak to our financial counselor to check eligibility.
                </p>
                <button className="text-white font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Check Eligibility <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
