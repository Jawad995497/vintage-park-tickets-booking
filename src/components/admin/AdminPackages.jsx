import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash } from "lucide-react";

const AdminPackages = () => {
  const { toast } = useToast();
  
  // Mock data for packages
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Individual Gate Entry",
      price: 250,
      type: "Individual",
      description: "Gate entry access for one person, no ride access.",
      features: ["Park Entry", "Garden Access", "Food Courts Access"],
      active: true
    },
    {
      id: 2,
      name: "Individual Full Access",
      price: 1500,
      type: "Individual",
      description: "Full access to all rides and attractions for one person.",
      features: ["Park Entry", "All Rides Access", "Garden Access", "Food Courts Access"],
      active: true
    },
    {
      id: 3,
      name: "Family Gate Entry",
      price: 2000,
      type: "Family",
      description: "Gate entry access for 10-12 people, no ride access.",
      features: ["Park Entry for Family", "Garden Access", "Food Courts Access"],
      active: true
    },
    {
      id: 4,
      name: "Family Full Access",
      price: 8000,
      type: "Family",
      description: "Full access to all rides and attractions for 10-12 people.",
      features: ["Park Entry for Family", "All Rides Access", "Garden Access", "Food Courts Access", "Family Lounge Access"],
      active: true
    }
  ]);
  
  const [editingPackage, setEditingPackage] = useState(null);
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: "",
    type: "Individual",
    description: "",
    features: "",
    active: true
  });

  const handleEditPackage = (pkg) => {
    setEditingPackage({
      ...pkg,
      features: pkg.features.join(", ")
    });
  };

  const handleSavePackage = () => {
    if (editingPackage) {
      const updatedPackages = packages.map(p => 
        p.id === editingPackage.id 
          ? {
              ...editingPackage,
              price: Number(editingPackage.price),
              features: editingPackage.features.split(",").map(f => f.trim())
            } 
          : p
      );
      
      setPackages(updatedPackages);
      setEditingPackage(null);
      
      toast({
        title: "Package Updated",
        description: `${editingPackage.name} has been updated successfully`,
      });
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingPackage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditToggle = (checked) => {
    setEditingPackage(prev => ({
      ...prev,
      active: checked
    }));
  };

  const handleNewPackageChange = (e) => {
    const { name, value } = e.target;
    setNewPackage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewPackageToggle = (checked) => {
    setNewPackage(prev => ({
      ...prev,
      active: checked
    }));
  };

  const handleAddPackage = () => {
    if (newPackage.name && newPackage.price && newPackage.description) {
      const packageToAdd = {
        id: packages.length + 1,
        ...newPackage,
        price: Number(newPackage.price),
        features: newPackage.features.split(",").map(f => f.trim())
      };
      
      setPackages([...packages, packageToAdd]);
      
      // Reset form
      setNewPackage({
        name: "",
        price: "",
        type: "Individual",
        description: "",
        features: "",
        active: true
      });
      
      toast({
        title: "Package Added",
        description: `${packageToAdd.name} has been added to packages`,
      });
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive"
      });
    }
  };

  const handleDeletePackage = (id) => {
    const packageToDelete = packages.find(p => p.id === id);
    setPackages(packages.filter(p => p.id !== id));
    
    toast({
      title: "Package Deleted",
      description: `${packageToDelete.name} has been removed from packages`,
      variant: "destructive"
    });
  };

  const handleToggleStatus = (id) => {
    const updatedPackages = packages.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    );
    
    setPackages(updatedPackages);
    
    const packageToggled = updatedPackages.find(p => p.id === id);
    toast({
      title: packageToggled.active ? "Package Activated" : "Package Deactivated",
      description: `${packageToggled.name} is now ${packageToggled.active ? "visible" : "hidden"} to customers`,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-vintage-dark">Manage Packages</h2>
      
      {/* Add New Package Form */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium text-vintage-dark mb-4">Add New Package</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-vintage-dark mb-1">
                Package Name
              </label>
              <Input
                name="name"
                value={newPackage.name}
                onChange={handleNewPackageChange}
                placeholder="e.g. Special Group Access"
                className="bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-vintage-dark mb-1">
                Price (PKR)
              </label>
              <Input
                name="price"
                type="number"
                value={newPackage.price}
                onChange={handleNewPackageChange}
                placeholder="e.g. 3000"
                className="bg-white"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-vintage-dark mb-1">
                Type
              </label>
              <select 
                name="type"
                value={newPackage.type}
                onChange={handleNewPackageChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="Individual">Individual</option>
                <option value="Family">Family</option>
                <option value="Group">Group</option>
                <option value="Special">Special</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2 h-full mt-6">
              <Switch 
                id="active-new"
                checked={newPackage.active} 
                onCheckedChange={handleNewPackageToggle}
              />
              <label 
                htmlFor="active-new"
                className="text-sm font-medium text-vintage-dark cursor-pointer"
              >
                Active (visible to customers)
              </label>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-vintage-dark mb-1">
              Description
            </label>
            <Textarea
              name="description"
              value={newPackage.description}
              onChange={handleNewPackageChange}
              placeholder="Describe what's included in this package"
              className="bg-white"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-vintage-dark mb-1">
              Features (comma separated)
            </label>
            <Textarea
              name="features"
              value={newPackage.features}
              onChange={handleNewPackageChange}
              placeholder="e.g. Park Entry, All Rides Access, Food Courts Access"
              className="bg-white"
            />
          </div>
          
          <Button 
            onClick={handleAddPackage}
            className="bg-primary text-white hover:bg-primary/80"
          >
            Add Package
          </Button>
        </CardContent>
      </Card>
      
      {/* Existing Packages List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {packages.map((pkg) => (
          <Card key={pkg.id} className={`${!pkg.active ? 'opacity-70' : ''}`}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-vintage-dark">{pkg.name}</h3>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleEditPackage(pkg)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeletePackage(pkg.id)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold text-primary">PKR {pkg.price}</span>
                  <span className="ml-2 text-sm text-vintage-dark/60">({pkg.type})</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full ${pkg.active ? 'bg-green-500' : 'bg-gray-400'} mr-2`}></span>
                  <span className="text-sm text-vintage-dark/70">{pkg.active ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
              
              <p className="text-sm text-vintage-dark/80 mb-4">{pkg.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-vintage-dark mb-2">Features:</h4>
                <ul className="list-disc pl-5 text-sm text-vintage-dark/80">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleToggleStatus(pkg.id)}
                className={pkg.active ? 'border-orange-300 text-orange-600 hover:bg-orange-50' : 'border-green-300 text-green-600 hover:bg-green-50'}
              >
                {pkg.active ? 'Deactivate' : 'Activate'} Package
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Edit Package Modal */}
      {editingPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-vintage-dark mb-4">Edit Package</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-vintage-dark mb-1">
                    Package Name
                  </label>
                  <Input
                    name="name"
                    value={editingPackage.name}
                    onChange={handleEditChange}
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-vintage-dark mb-1">
                    Price (PKR)
                  </label>
                  <Input
                    name="price"
                    type="number"
                    value={editingPackage.price}
                    onChange={handleEditChange}
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-vintage-dark mb-1">
                    Type
                  </label>
                  <select 
                    name="type"
                    value={editingPackage.type}
                    onChange={handleEditChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="Individual">Individual</option>
                    <option value="Family">Family</option>
                    <option value="Group">Group</option>
                    <option value="Special">Special</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="active-edit"
                    checked={editingPackage.active} 
                    onCheckedChange={handleEditToggle}
                  />
                  <label 
                    htmlFor="active-edit"
                    className="text-sm font-medium text-vintage-dark cursor-pointer"
                  >
                    Active (visible to customers)
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-vintage-dark mb-1">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    value={editingPackage.description}
                    onChange={handleEditChange}
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-vintage-dark mb-1">
                    Features (comma separated)
                  </label>
                  <Textarea
                    name="features"
                    value={editingPackage.features}
                    onChange={handleEditChange}
                    className="bg-white"
                  />
                </div>
                
                <div className="flex justify-end space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setEditingPackage(null)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSavePackage}
                    className="bg-primary text-white hover:bg-primary/80"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminPackages;
