import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Factory, Package, Calendar, Shield, Plus, Search, Filter } from "lucide-react";
import { useState } from "react";

const ManufacturerDashboard = () => {
  const [selectedAsset, setSelectedAsset] = useState<string>("");

  const recentAssets = [
    { id: "RWF-001", type: "Rail Fastener", batch: "BT-2024-001", status: "Active", warranty: "5 years" },
    { id: "RWF-002", type: "Junction Box", batch: "BT-2024-002", status: "Active", warranty: "3 years" },
    { id: "RWF-003", type: "Signal Component", batch: "BT-2024-003", status: "Pending", warranty: "7 years" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Manufacturer Dashboard</h1>
                <p className="text-sm text-muted-foreground">Asset Information Management</p>
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
          {/* Asset Creation Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Create New Asset
                </CardTitle>
                <CardDescription>
                  Add manufacturing and installation details for railway assets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assetId">Asset ID</Label>
                    <Input id="assetId" placeholder="RWF-001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assetType">Asset Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rail-fastener">Rail Fastener</SelectItem>
                        <SelectItem value="junction-box">Junction Box</SelectItem>
                        <SelectItem value="signal-component">Signal Component</SelectItem>
                        <SelectItem value="track-circuit">Track Circuit</SelectItem>
                        <SelectItem value="cable-connector">Cable Connector</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="manufacturer">Manufacturer Name</Label>
                    <Input id="manufacturer" placeholder="Railway Components Ltd." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batchId">Batch ID</Label>
                    <Input id="batchId" placeholder="BT-2024-001" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="materialGrade">Material Grade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grade-a">Grade A - Premium</SelectItem>
                        <SelectItem value="grade-b">Grade B - Standard</SelectItem>
                        <SelectItem value="grade-c">Grade C - Basic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coating">Coating Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zinc-plated">Zinc Plated</SelectItem>
                        <SelectItem value="galvanized">Galvanized</SelectItem>
                        <SelectItem value="painted">Painted</SelectItem>
                        <SelectItem value="stainless">Stainless Steel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="manufactureDate">Manufacturing Date</Label>
                    <Input id="manufactureDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="installationDate">Installation Date</Label>
                    <Input id="installationDate" type="date" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="warrantyPeriod">Warranty Period (Years)</Label>
                    <Input id="warrantyPeriod" type="number" placeholder="5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceLife">Service Life (Years)</Label>
                    <Input id="serviceLife" type="number" placeholder="25" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specifications">Technical Specifications</Label>
                  <Textarea 
                    id="specifications" 
                    placeholder="Enter detailed technical specifications, load ratings, environmental tolerances..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-gradient-primary">
                  <Package className="h-4 w-4 mr-2" />
                  Create Asset Record
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">247</div>
                  <div className="text-sm text-muted-foreground">Total Assets</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Active Batches</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Assets */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Recent Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAssets.map((asset) => (
                  <div key={asset.id} className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{asset.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        asset.status === 'Active' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                      }`}>
                        {asset.status}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <div>{asset.type}</div>
                      <div>Batch: {asset.batch}</div>
                      <div>Warranty: {asset.warranty}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search Assets
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Batch
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Warranty Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerDashboard;