
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";
import { Ticket, ArrowRight } from "lucide-react";

const Signup = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formState.password !== formState.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically handle signup with a backend
    console.log("Signup with:", formState);
    
    // Show success message
    toast({
      title: "Account Created",
      description: "Your account has been successfully created!",
    });
  };

  return (
    <div className="flex flex-1 items-center justify-center py-12">
      <div className="max-w-md w-full space-y-8 px-4">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center mb-6">
            <Ticket className="h-10 w-10 text-primary" />
            <span className="ml-2 text-2xl font-semibold text-vintage-dark">Amusement Park</span>
          </Link>
          <h1 className="text-3xl font-bold text-vintage-dark mt-4 mb-2">Create an Account</h1>
          <p className="text-vintage-dark/70 text-sm">Sign up to book tickets and manage your visits</p>
        </div>
        
        <div className="vintage-card shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-vintage-dark mb-1">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                className="bg-white border-vintage-peach/30 focus-visible:ring-primary"
              />
            </div>
            
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
              <label htmlFor="password" className="block text-sm font-medium text-vintage-dark mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleInputChange}
                required
                className="bg-white border-vintage-peach/30 focus-visible:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-vintage-dark mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formState.confirmPassword}
                onChange={handleInputChange}
                required
                className="bg-white border-vintage-peach/30 focus-visible:ring-primary"
              />
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit"
                className="bg-primary text-white hover:bg-primary/80 w-full flex items-center justify-center"
              >
                <span>Create Account</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-vintage-dark/70">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
          
          <Link to="/" className="text-xs text-vintage-dark/60 hover:text-primary inline-block mt-6">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
