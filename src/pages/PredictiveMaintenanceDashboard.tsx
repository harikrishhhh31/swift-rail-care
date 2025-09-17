import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Brain, TrendingDown, AlertTriangle, Zap, Database, Activity } from "lucide-react";

const PredictiveMaintenanceDashboard = () => {
  const predictiveData = [
    {
      assetId: "RWF-001",
      location: "Junction A-12",
      rul: 245, // Remaining Useful Life in days
      failureProbability: 15,
      riskClassification: "Low",
      lastInspection: "2024-01-10",
      nextPredicted: "2024-08-15"
    },
    {
      assetId: "RWF-002", 
      location: "Section B-05",
      rul: 89,
      failureProbability: 65,
      riskClassification: "High",
      lastInspection: "2024-01-08",
      nextPredicted: "2024-04-05"
    },
    {
      assetId: "RWF-003",
      location: "Bridge C-08", 
      rul: 12,
      failureProbability: 89,
      riskClassification: "Critical",
      lastInspection: "2024-01-05",
      nextPredicted: "2024-01-28"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "High": return "bg-destructive text-destructive-foreground";
      case "Critical": return "bg-critical text-critical-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (probability: number) => {
    if (probability < 30) return "bg-success";
    if (probability < 60) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Predictive Maintenance</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Asset Lifecycle Analysis</p>
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
          {/* Main Dashboard */}
          <div className="lg:col-span-3 space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">247</div>
                  <div className="text-sm text-muted-foreground">Assets Monitored</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success mb-1">189</div>
                  <div className="text-sm text-muted-foreground">Low Risk</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-warning mb-1">43</div>
                  <div className="text-sm text-muted-foreground">Needs Attention</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-critical mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Critical Risk</div>
                </CardContent>
              </Card>
            </div>

            {/* Predictive Analysis Results */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Asset Risk Analysis
                </CardTitle>
                <CardDescription>
                  AI-computed failure predictions and remaining useful life estimates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictiveData.map((asset) => (
                    <div key={asset.assetId} className="p-4 border rounded-lg bg-muted/20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{asset.assetId}</h3>
                            <Badge className={`text-xs ${getRiskColor(asset.riskClassification)}`}>
                              {asset.riskClassification} Risk
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{asset.location}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm font-medium mb-1">Remaining Useful Life</div>
                          <div className="text-2xl font-bold text-primary">{asset.rul}</div>
                          <div className="text-xs text-muted-foreground">days</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium mb-2">Failure Probability</div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-bold">{asset.failureProbability}%</span>
                          </div>
                          <Progress 
                            value={asset.failureProbability} 
                            className={`h-2 ${getProgressColor(asset.failureProbability)}`} 
                          />
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium mb-1">Next Maintenance</div>
                          <div className="text-sm font-semibold text-foreground">{asset.nextPredicted}</div>
                          <div className="text-xs text-muted-foreground">Predicted date</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-primary">
                  <Brain className="h-4 w-4 mr-2" />
                  Run New Analysis
                </Button>
              </CardContent>
            </Card>

            {/* Analytics Chart Placeholder */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-primary" />
                  Failure Trend Analysis
                </CardTitle>
                <CardDescription>
                  Historical data and predictive trends for asset health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Analytics Charts</p>
                    <p className="text-sm text-muted-foreground">Recharts integration for trend visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Model Status */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  AI Model Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Model Accuracy</span>
                    <span className="font-medium text-success">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Data Quality</span>
                    <span className="font-medium text-success">89.7%</span>
                  </div>
                  <Progress value={89.7} className="h-2" />
                </div>
                <div className="text-xs text-muted-foreground">
                  Last updated: 2 hours ago
                </div>
              </CardContent>
            </Card>

            {/* Input Factors */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Input Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="h-3 w-3 text-success" />
                  <span>Operational Load</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="h-3 w-3 text-success" />
                  <span>Environmental Factors</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="h-3 w-3 text-success" />
                  <span>Inspection Data</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="h-3 w-3 text-warning" />
                  <span>Failure Indicators</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="h-3 w-3 text-success" />
                  <span>Historical Performance</span>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Smart Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-2 bg-critical/10 border border-critical/20 rounded text-xs">
                  <div className="font-medium text-critical">Critical Alert</div>
                  <div className="text-muted-foreground">RWF-003 requires immediate attention</div>
                </div>
                <div className="p-2 bg-warning/10 border border-warning/20 rounded text-xs">
                  <div className="font-medium text-warning">Maintenance Due</div>
                  <div className="text-muted-foreground">5 assets need scheduled maintenance</div>
                </div>
                <div className="p-2 bg-primary/10 border border-primary/20 rounded text-xs">
                  <div className="font-medium text-primary">Model Update</div>
                  <div className="text-muted-foreground">New training data available</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="h-4 w-4 mr-2" />
                  Retrain Model
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Update Data Sources
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Export Predictions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveMaintenanceDashboard;