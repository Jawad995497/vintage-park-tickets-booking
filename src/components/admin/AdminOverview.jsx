
import { Bar, Line } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart } from "@/components/ui/chart";
import { Users, Ticket, Database, PieChart } from "lucide-react";

const AdminOverview = () => {
  // Mock data for charts
  const visitorsData = [
    { name: "Mon", visitors: 540 },
    { name: "Tue", visitors: 620 },
    { name: "Wed", visitors: 700 },
    { name: "Thu", visitors: 850 },
    { name: "Fri", visitors: 1100 },
    { name: "Sat", visitors: 1500 },
    { name: "Sun", visitors: 1350 },
  ];
  
  const revenueData = [
    { name: "Jan", revenue: 12000 },
    { name: "Feb", revenue: 15000 },
    { name: "Mar", revenue: 18000 },
    { name: "Apr", revenue: 20000 },
    { name: "May", revenue: 22000 },
    { name: "Jun", revenue: 28000 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,670</div>
            <p className="text-xs text-vintage-dark/70">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Database className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PKR 125,000</div>
            <p className="text-xs text-vintage-dark/70">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Bookings</CardTitle>
            <Ticket className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-vintage-dark/70">+18% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
            <PieChart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-vintage-dark/70">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Visitors</CardTitle>
            <CardDescription>Number of park visitors over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={visitorsData}
              index="name"
              categories={["visitors"]}
              colors={["#9b87f5"]}
              valueFormatter={(value) => `${value} visitors`}
              className="h-[300px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Total revenue generated each month</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart
              data={revenueData}
              index="name"
              categories={["revenue"]}
              colors={["#9b87f5"]}
              valueFormatter={(value) => `PKR ${value.toLocaleString()}`}
              className="h-[300px]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
