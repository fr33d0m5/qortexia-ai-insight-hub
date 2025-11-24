import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Core KPIs",
    price: { monthly: 49, yearly: 470 },
    description: "Essential metrics for growing teams",
    features: [
      "Up to 5 data sources",
      "Core KPI tracking",
      "Basic dashboards",
      "7-day data history",
      "Email support",
    ],
  },
  {
    name: "Advanced Dashboards",
    price: { monthly: 149, yearly: 1430 },
    description: "Comprehensive analytics for scaling businesses",
    features: [
      "Unlimited data sources",
      "Advanced KPI tracking",
      "Custom dashboards",
      "90-day data history",
      "Trend detection",
      "Anomaly alerts",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Full BI Suite",
    price: { monthly: 399, yearly: 3830 },
    description: "Complete intelligence platform",
    features: [
      "Everything in Advanced",
      "Forecasting & scenarios",
      "Advanced analytics",
      "1-year data history",
      "Custom integrations",
      "White-label reports",
      "Dedicated support",
    ],
  },
  {
    name: "AI Agent + Enterprise",
    price: { monthly: 999, yearly: 9590 },
    description: "Ultimate AI-powered intelligence",
    features: [
      "Everything in Full BI",
      "AI Agent for Q&A",
      "Unlimited data history",
      "Custom AI models",
      "API access",
      "Multi-team support",
      "24/7 premium support",
      "On-premise options",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-light/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-lg ${!isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-muted rounded-full transition-colors hover:bg-muted-foreground/20"
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-turquoise to-violet rounded-full transition-transform ${
                isYearly ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-lg ${isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
            Yearly
            <span className="ml-2 text-sm text-turquoise">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative group animate-fade-in ${
                tier.popular ? 'lg:-mt-4' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-turquoise to-violet text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div
                className={`bg-card border rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${
                  tier.popular
                    ? 'border-turquoise/50 hover-glow-turquoise scale-105'
                    : 'border-border hover:border-turquoise/30 hover-glow-turquoise'
                }`}
              >
                {/* Tier Name */}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gradient">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={
                    tier.popular
                      ? 'w-full bg-gradient-to-r from-turquoise to-violet hover:opacity-90'
                      : 'w-full gradient-border bg-card/50 hover:bg-card'
                  }
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
