import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Wrench, Clock, AlertCircle, CheckCircle, MapPin, TrendingUp, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

const MaintenanceEngineerDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const maintenanceTasks = [
    { 
      id: "MT-001", 
      title: "Rail Fastener Replacement", 
      location: "Junction A-12", 
      priority: "High", 
      status: "In Progress", 
      dueDate: "2024-01-20",
      progress: 65,
      assignee: "Team Alpha"
    },
    { 
      id: "MT-002", 
      title: "Signal Component Inspection", 
      location: "Section B-05", 
      priority: "Medium", 
      status: "Pending", 
      dueDate: "2024-01-25",
      progress: 0,
      assignee: "Team Beta"
    },
    { 
      id: "MT-003", 
      title: "Bridge Structure Check", 
      location: "Bridge C-08", 
      priority: "Critical", 
      status: "Overdue", 
      dueDate: "2024-01-18",
      progress: 30,
      assignee: "Team Gamma"
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-critical text-critical-foreground";
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-success-foreground";
      case "In Progress": return "bg-primary text-primary-foreground";
      case "Pending": return "bg-muted text-muted-foreground";
      case "Overdue": return "bg-critical text-critical-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-status rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Maintenance Engineer Dashboard</h1>
                <p className="text-sm text-muted-foreground">Task Management & Scheduling</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Roles
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Active Tasks</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">28</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-critical mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Overdue</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-warning mb-1">87%</div>
                  <div className="text-sm text-muted-foreground">Efficiency</div>
                </CardContent>
              </Card>
            </div>

            {/* Maintenance Tasks */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Active Maintenance Tasks
                </CardTitle>
                <CardDescription>
                  Track and manage ongoing maintenance activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceTasks.map((task) => (
                    <div key={task.id} className="p-4 border rounded-lg bg-muted/20">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{task.title}</h3>
                            <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </Badge>
                            <Badge className={`text-xs ${getStatusColor(task.status)}`}>
                              {task.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {task.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Due: {task.dueDate}
                            </span>
                            <span>Assignee: {task.assignee}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-primary">
                  <Wrench className="h-4 w-4 mr-2" />
                  Create New Task
                </Button>
              </CardContent>
            </Card>

            {/* Priority Map */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Priority Location Map
                </CardTitle>
                <CardDescription>
                  Visual representation of maintenance priorities by location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Priority Map</p>
                    <p className="text-sm text-muted-foreground">Color-coded by maintenance urgency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-critical"></div>
                    <span>Critical Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <span>High Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <span>Medium Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span>Low Priority</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Smart Calendar */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Smart Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                />
                <div className="mt-4 space-y-2">
                  <div className="text-sm font-medium">Today's Schedule:</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>• 09:00 - Junction A-12 Inspection</div>
                    <div>• 14:00 - Team Meeting</div>
                    <div>• 16:00 - Report Review</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Task Completion Rate</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>On-Time Delivery</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Resource Efficiency</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Critical Alerts
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Task
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceEngineerDashboard;