import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Sparkles } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as Qortexia launches.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-background to-charcoal-light/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-turquoise/10 to-violet/10 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-12 hover-glow-turquoise transition-all duration-500 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-violet rounded-2xl flex items-center justify-center animate-pulse">
              <Sparkles className="w-8 h-8 text-foreground" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Join the <span className="text-gradient">Early Waitlist</span>
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-8">
            Be among the first to experience the future of business intelligence
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-turquoise transition-colors" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 h-12 bg-background border-border focus:border-turquoise transition-colors rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="h-12 px-8 bg-gradient-to-r from-turquoise to-violet hover:opacity-90 transition-opacity rounded-xl font-semibold"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>

          {/* Social proof */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-gradient">2,000+</span> forward-thinking businesses already on the list
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
