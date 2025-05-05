
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This is a simple mock authentication
    // In a real application, you would validate credentials against your backend
    if (formData.username === "admin" && formData.password === "admin123") {
      toast({
        title: "Login Successful",
        description: "Welcome to the Admin Dashboard",
      });
      
      // Store admin auth state (in a real app, use a proper auth token)
      localStorage.setItem("adminAuth", "true");
      
      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col vintage-container bg-vintage-gray/10 py-16">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-vintage-dark">Admin Login</h1>
          <p className="text-vintage-dark/70 text-sm mt-2">Enter your credentials to access the admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-vintage-dark mb-1">
              Username
            </label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full bg-vintage-gray/10 border-vintage-peach/30"
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
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-vintage-gray/10 border-vintage-peach/30"
            />
            <p className="text-xs text-right mt-1 text-vintage-dark/70">
              Default credentials: admin / admin123
            </p>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/80"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
