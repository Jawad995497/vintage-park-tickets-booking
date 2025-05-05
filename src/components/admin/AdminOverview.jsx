
import { Bar, Line, Pie } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart } from "@/components/ui/chart";
import { Users, Ticket, Database, PieChart, TrendingUp, Clock, Calendar, ChartBar } from "lucide-react";

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

  const attractionsData = [
    { name: "Roller Coaster", visitors: 2300 },
    { name: "Water Slide", visitors: 1800 },
    { name: "Ferris Wheel", visitors: 1200 },
    { name: "Haunted House", visitors: 980 },
    { name: "Carousel", visitors: 850 },
  ];

  const packageData = [
    { name: "Family Pack", value: 35 },
    { name: "Weekend Special", value: 25 },
    { name: "Holiday Pack", value: 20 },
    { name: "VIP Experience", value: 15 },
    { name: "Group Discount", value: 5 },
  ];

  const ageGroupData = [
    { name: "0-12", value: 30 },
    { name: "13-18", value: 25 },
    { name: "19-30", value: 22 },
    { name: "31-45", value: 15 },
    { name: "46+", value: 8 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
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

      {/* Second Row Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Average Visit Duration</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.5 hours</div>
            <p className="text-xs text-vintage-dark/70">+0.2 hours from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2PM - 5PM</div>
            <p className="text-xs text-vintage-dark/70">Consistent with last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Busiest Day</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Saturday</div>
            <p className="text-xs text-vintage-dark/70">No change from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Avg. Spending</CardTitle>
            <ChartBar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">PKR 1,450</div>
            <p className="text-xs text-vintage-dark/70">+7% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
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

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Popular Attractions</CardTitle>
            <CardDescription>Most visited attractions in the park</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={attractionsData}
              index="name"
              categories={["visitors"]}
              colors={["#7E69AB"]}
              valueFormatter={(value) => `${value} visitors`}
              layout="vertical"
              className="h-[300px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Package Distribution</CardTitle>
            <CardDescription>Breakdown of ticket package sales</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <div className="h-[300px] w-full flex items-center justify-center">
              <BarChart
                data={packageData}
                index="name"
                categories={["value"]}
                colors={["#6E59A5"]}
                valueFormatter={(value) => `${value}%`}
                className="h-[300px]"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Visitor Age Groups</CardTitle>
            <CardDescription>Demographics of park visitors</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <div className="h-[300px] w-full flex items-center justify-center">
              <BarChart
                data={ageGroupData}
                index="name"
                categories={["value"]}
                colors={["#D6BCFA"]}
                valueFormatter={(value) => `${value}%`}
                className="h-[300px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operational Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Staff Efficiency</p>
                  <p className="text-2xl font-bold">87%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Customer Satisfaction</p>
                  <p className="text-2xl font-bold">92%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Ride Downtime</p>
                  <p className="text-2xl font-bold">3.2%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Return Visitors</p>
                  <p className="text-2xl font-bold">45%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Online Bookings</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Walk-in Visitors</p>
                  <p className="text-2xl font-bold">22%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
