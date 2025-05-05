
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminOverview from "@/components/admin/AdminOverview";
import AdminBookings from "@/components/admin/AdminBookings";
import AdminUsers from "@/components/admin/AdminUsers";
import AdminPackages from "@/components/admin/AdminPackages";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in
    const adminAuth = localStorage.getItem("adminAuth");
    if (!adminAuth || adminAuth !== "true") {
      navigate("/admin");
    } else {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-xl text-gray-600 mb-4">You need to log in as an admin to access this page.</p>
          <Link to="/admin" className="text-blue-500 hover:text-blue-700 underline">
            Go to Admin Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vintage-gray/10">
      <div className="bg-white border-b border-vintage-peach/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-vintage-dark">Admin Dashboard</h1>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6 bg-white border border-vintage-peach/30">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <AdminOverview />
          </TabsContent>
          
          <TabsContent value="bookings">
            <AdminBookings />
          </TabsContent>
          
          <TabsContent value="users">
            <AdminUsers />
          </TabsContent>
          
          <TabsContent value="packages">
            <AdminPackages />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
