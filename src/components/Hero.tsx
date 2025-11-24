import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-turquoise/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="text-7xl sm:text-8xl font-bold text-gradient">Q</div>
            <div className="absolute inset-0 blur-xl text-7xl sm:text-8xl font-bold text-gradient opacity-50" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-gradient">AI-Driven Intelligence</span>
          <br />
          <span className="text-foreground">for Modern Businesses</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Automated insights, unified dashboards, and real-time clarity powered by next-gen AI.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-turquoise to-violet hover:opacity-90 hover-glow-turquoise group"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 gradient-border bg-card/50 backdrop-blur-sm hover:bg-card"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-turquoise to-violet rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
