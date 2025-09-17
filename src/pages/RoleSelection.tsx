import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Factory, MapPin, Wrench, BarChart3, Shield, Train } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: "manufacturer",
      title: "Manufacturer",
      description: "Manage asset information and manufacturing data",
      icon: Factory,
      path: "/manufacturer",
      gradient: "bg-gradient-primary",
    },
    {
      id: "site-engineer", 
      title: "Site Engineer",
      description: "Report inspections and monitor site locations",
      icon: MapPin,
      path: "/site-engineer",
      gradient: "bg-gradient-secondary",
    },
    {
      id: "maintenance-engineer",
      title: "Maintenance Engineer", 
      description: "Track maintenance tasks and manage schedules",
      icon: Wrench,
      path: "/maintenance-engineer",
      gradient: "bg-gradient-status",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Railway Maintenance</h1>
              <p className="text-sm text-muted-foreground">Management System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Role-Based Access
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Select Your Role
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your role to access specialized tools and dashboards designed for railway maintenance management.
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <Card key={role.id} className="group hover:shadow-elevated transition-all duration-200 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex p-4 rounded-2xl ${role.gradient} mb-4 mx-auto`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      onClick={() => navigate(role.path)}
                      className="w-full bg-gradient-primary hover:bg-primary-dark transition-all duration-200"
                    >
                      Access Dashboard
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
};

export default RoleSelection;