import { Database, Brain, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Connect Your Data",
    description: "Seamlessly integrate CSV files or connect your favorite business tools in seconds.",
  },
  {
    icon: Brain,
    title: "AI Organizes & Analyzes",
    description: "Our next-gen AI automatically structures, cleans, and analyzes your business data.",
  },
  {
    icon: BarChart3,
    title: "Insights Delivered Instantly",
    description: "Access beautiful dashboards and actionable insights in real-time, anywhere.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-light/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            How <span className="text-gradient">Qortexia</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform raw data into intelligence in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-turquoise via-violet to-turquoise opacity-30" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover-glow-turquoise transition-all duration-300 hover:scale-105 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-turquoise to-violet rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-turquoise/20 to-violet/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-turquoise" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
