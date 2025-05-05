
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const AdminBookings = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for bookings
  const [bookings, setBookings] = useState([
    {
      id: "BK-001",
      name: "Ahmed Khan",
      package: "Individual Full Access",
      date: "2025-06-15",
      price: "PKR 1,500",
      status: "Confirmed"
    },
    {
      id: "BK-002",
      name: "Sara Ali",
      package: "Family Gate Entry",
      date: "2025-06-18",
      price: "PKR 2,000",
      status: "Pending"
    },
    {
      id: "BK-003",
      name: "Fahad Hussain",
      package: "Family Full Access",
      date: "2025-06-20",
      price: "PKR 8,000",
      status: "Confirmed"
    },
    {
      id: "BK-004",
      name: "Ayesha Malik",
      package: "Individual Gate Entry",
      date: "2025-06-22",
      price: "PKR 250",
      status: "Cancelled"
    },
    {
      id: "BK-005",
      name: "Usman Ali",
      package: "Individual Full Access",
      date: "2025-06-25",
      price: "PKR 1,500",
      status: "Confirmed"
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
    
    toast({
      title: "Booking Status Updated",
      description: `Booking ${id} status changed to ${newStatus}`,
    });
  };

  const filteredBookings = bookings.filter(booking => 
    booking.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    booking.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-vintage-dark">Manage Bookings</h2>
        <div className="w-64">
          <Input
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-md border border-vintage-peach/30 shadow-sm">
        <Table>
          <TableCaption>List of all bookings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Package</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.package}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    booking.status === "Confirmed" 
                      ? "bg-green-100 text-green-800" 
                      : booking.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs h-8"
                      onClick={() => handleStatusChange(booking.id, "Confirmed")}
                    >
                      Confirm
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs h-8 border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => handleStatusChange(booking.id, "Cancelled")}
                    >
                      Cancel
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookings;
