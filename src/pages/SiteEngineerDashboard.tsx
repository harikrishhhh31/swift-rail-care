import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, CheckCircle, Clock, Camera, FileText } from "lucide-react";
import GoogleMap from "@/components/GoogleMap";
import { useState } from "react";

const SiteEngineerDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const inspectionData = [
    { id: "INS-001", location: "Junction A-12", batch: "BT-2024-001", status: "Healthy", severity: "low", date: "2024-01-15" },
    { id: "INS-002", location: "Section B-05", batch: "BT-2024-002", status: "Attention", severity: "medium", date: "2024-01-14" },
    { id: "INS-003", location: "Bridge C-08", batch: "BT-2024-003", status: "Critical", severity: "high", date: "2024-01-13" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Healthy": return "bg-success text-success-foreground";
      case "Attention": return "bg-warning text-warning-foreground";
      case "Critical": return "bg-critical text-critical-foreground";
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
              <div className="p-2 bg-gradient-secondary rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Site Engineer Dashboard</h1>
                <p className="text-sm text-muted-foreground">Inspection Reporting & Site Management</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Roles
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inspection Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  New Inspection Report
                </CardTitle>
                <CardDescription>
                  Record inspection findings and asset condition details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="inspectionId">Inspection ID</Label>
                    <Input id="inspectionId" placeholder="INS-004" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batchNumber">Asset Batch Number</Label>
                    <Input id="batchNumber" placeholder="BT-2024-001" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Site Location</Label>
                    <Select onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junction-a12">Junction A-12</SelectItem>
                        <SelectItem value="section-b05">Section B-05</SelectItem>
                        <SelectItem value="bridge-c08">Bridge C-08</SelectItem>
                        <SelectItem value="terminal-d15">Terminal D-15</SelectItem>
                        <SelectItem value="yard-e22">Yard E-22</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coordinates">GPS Coordinates</Label>
                    <Input id="coordinates" placeholder="40.7128, -74.0060" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assetCondition">Asset Condition</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent - No issues</SelectItem>
                        <SelectItem value="good">Good - Minor wear</SelectItem>
                        <SelectItem value="fair">Fair - Needs monitoring</SelectItem>
                        <SelectItem value="poor">Poor - Needs attention</SelectItem>
                        <SelectItem value="critical">Critical - Immediate action</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="healthScore">Health Score (0-100)</Label>
                    <Input id="healthScore" type="number" placeholder="85" min="0" max="100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="findings">Inspection Findings</Label>
                  <Textarea 
                    id="findings" 
                    placeholder="Describe visual inspection results, wear patterns, corrosion levels, structural integrity..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recommendations">Recommendations</Label>
                  <Textarea 
                    id="recommendations" 
                    placeholder="Maintenance recommendations, follow-up actions, priority level..."
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="inspectionDate">Inspection Date</Label>
                    <Input id="inspectionDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nextInspection">Next Inspection Due</Label>
                    <Input id="nextInspection" type="date" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                  <Button className="flex-1 bg-gradient-primary">
                    Submit Inspection Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Integration */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Site Location Map
                </CardTitle>
                <CardDescription>
                  Interactive map with color-coded asset locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GoogleMap 
                  locations={[
                    { id: "1", name: "Junction A-12", lat: 51.5074, lng: -0.1278, status: "healthy", assetCount: 8, batch: "BT-2024-001" },
                    { id: "2", name: "Section B-05", lat: 51.5154, lng: -0.1426, status: "attention", assetCount: 12, batch: "BT-2024-002" },
                    { id: "3", name: "Bridge C-08", lat: 51.5034, lng: -0.1195, status: "critical", assetCount: 4, batch: "BT-2024-003" },
                    { id: "4", name: "Terminal D-15", lat: 51.5194, lng: -0.1344, status: "healthy", assetCount: 15, batch: "BT-2024-004" },
                    { id: "5", name: "Yard E-22", lat: 51.4994, lng: -0.1156, status: "attention", assetCount: 9, batch: "BT-2024-005" }
                  ]} 
                />
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span>Healthy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <span>Attention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-critical"></div>
                    <span>Critical</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">42</div>
                  <div className="text-sm text-muted-foreground">Sites Inspected</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">38</div>
                  <div className="text-sm text-muted-foreground">Healthy Assets</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Inspections */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Recent Inspections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {inspectionData.map((inspection) => (
                  <div key={inspection.id} className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{inspection.id}</span>
                      <Badge className={`text-xs ${getStatusColor(inspection.status)}`}>
                        {inspection.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <div>{inspection.location}</div>
                      <div>Batch: {inspection.batch}</div>
                      <div>{inspection.date}</div>
                    </div>
                  </div>
                ))}
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
                  <MapPin className="h-4 w-4 mr-2" />
                  View All Sites
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Critical Alerts
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Export Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteEngineerDashboard;