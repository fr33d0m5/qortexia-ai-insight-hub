import { TrendingUp, DollarSign, AlertCircle, MessageSquare, LineChart, Settings } from "lucide-react";

const features = [
  {
    icon: BarChart,
    title: "Automated KPI Reporting",
    description: "Track your key metrics automatically with real-time updates and intelligent alerts.",
  },
  {
    icon: DollarSign,
    title: "Financial + Operational Dashboards",
    description: "Unified view of financial health and operational performance in one place.",
  },
  {
    icon: TrendingUp,
    title: "Trend Detection",
    description: "AI identifies patterns and trends before they become critical to your business.",
  },
  {
    icon: AlertCircle,
    title: "Anomaly Alerts",
    description: "Get instant notifications when something unusual happens in your data.",
  },
  {
    icon: MessageSquare,
    title: "AI Agent Q&A",
    description: "Ask questions about your business data in natural language, get instant answers.",
  },
  {
    icon: LineChart,
    title: "Forecasting & Scenarios",
    description: "Plan ahead with AI-powered forecasts and what-if scenario modeling.",
  },
];

// Import the actual icon component
import { BarChart } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-turquoise/5 to-violet/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform data into actionable business intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-turquoise/50 transition-all duration-300 h-full hover-glow-turquoise hover:scale-105">
                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-turquoise/20 to-violet/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-turquoise" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
