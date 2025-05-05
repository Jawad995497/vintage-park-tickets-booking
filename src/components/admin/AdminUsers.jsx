
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const AdminUsers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ahmed Khan",
      email: "ahmed@example.com",
      joined: "2025-01-15",
      bookings: 3,
      status: "Active"
    },
    {
      id: 2,
      name: "Sara Ali",
      email: "sara@example.com",
      joined: "2025-02-20",
      bookings: 1,
      status: "Active"
    },
    {
      id: 3,
      name: "Fahad Hussain",
      email: "fahad@example.com",
      joined: "2025-03-10",
      bookings: 2,
      status: "Inactive"
    },
    {
      id: 4,
      name: "Ayesha Malik",
      email: "ayesha@example.com",
      joined: "2025-04-05",
      bookings: 0,
      status: "Active"
    },
    {
      id: 5,
      name: "Usman Ali",
      email: "usman@example.com",
      joined: "2025-05-12",
      bookings: 4,
      status: "Active"
    }
  ]);

  const handleStatusToggle = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        const newStatus = user.status === "Active" ? "Inactive" : "Active";
        return { ...user, status: newStatus };
      }
      return user;
    }));
    
    const user = users.find(u => u.id === id);
    const newStatus = user.status === "Active" ? "Inactive" : "Active";
    
    toast({
      title: "User Status Updated",
      description: `${user.name}'s account is now ${newStatus}`,
    });
  };

  const handleDeleteUser = (id) => {
    const user = users.find(u => u.id === id);
    setUsers(users.filter(user => user.id !== id));
    
    toast({
      title: "User Deleted",
      description: `${user.name}'s account has been deleted`,
      variant: "destructive"
    });
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-vintage-dark">Manage Users</h2>
        <div className="w-64">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-md border border-vintage-peach/30 shadow-sm">
        <Table>
          <TableCaption>List of all registered users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell>{user.bookings}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`text-xs h-8 ${
                        user.status === "Active"
                        ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                        : "border-green-300 text-green-600 hover:bg-green-50"
                      }`}
                      onClick={() => handleStatusToggle(user.id)}
                    >
                      {user.status === "Active" ? "Deactivate" : "Activate"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs h-8 border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
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

export default AdminUsers;
