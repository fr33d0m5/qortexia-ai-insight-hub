import { Target, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-gradient">Purpose</span>
          </h2>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 hover-glow-turquoise transition-all duration-300 hover:scale-105 h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise/20 to-violet/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-turquoise" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make business intelligence <span className="text-foreground font-semibold">effortless and accessible</span> for every company, regardless of size or technical expertise.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="bg-card border border-border rounded-2xl p-8 hover-glow-violet transition-all duration-300 hover:scale-105 h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise/20 to-violet/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-violet" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the <span className="text-foreground font-semibold">intelligence layer</span> every business relies on to make smarter, faster decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Additional statement */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that <span className="text-gradient font-semibold">powerful insights shouldn't require a team of data scientists</span>. With Qortexia, every decision-maker can harness the power of AI to understand their business deeply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
