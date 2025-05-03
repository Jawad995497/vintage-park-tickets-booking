
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Ticket, ArrowRight } from "lucide-react";

const Login = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle login with a backend
    console.log("Login attempt with:", formState);
    
    // Show success message
    toast({
      title: "Login Successful",
      description: "Welcome back to Amusement Park!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col vintage-container">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="max-w-md w-full space-y-8 px-4">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center mb-6">
              <Ticket className="h-10 w-10 text-primary" />
              <span className="ml-2 text-2xl font-semibold text-vintage-dark">Amusement Park</span>
            </Link>
            <h1 className="text-3xl font-bold text-vintage-dark mt-4 mb-2">Welcome back</h1>
            <p className="text-vintage-dark/70 text-sm">Sign in to your account to manage bookings</p>
          </div>
          
          <div className="vintage-card shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-vintage-dark mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  className="bg-white border-vintage-peach/30 focus-visible:ring-primary"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-vintage-dark">
                    Password
                  </label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="current-password"
                  className="bg-white border-vintage-peach/30 focus-visible:ring-primary"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-primary text-white hover:bg-primary/80 w-full flex items-center justify-center"
              >
                <span>Sign In</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-vintage-dark/70">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
            
            <Link to="/" className="text-xs text-vintage-dark/60 hover:text-primary inline-block mt-6">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
