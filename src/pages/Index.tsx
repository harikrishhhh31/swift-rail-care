import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Train, ArrowRight, Shield, BarChart3, MapPin, Wrench } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Railway Infrastructure Management
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Railway Maintenance
            <span className="text-primary block">Management System</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional-grade asset tracking, predictive maintenance, and intelligent scheduling for railway infrastructure management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/roles')}
              className="bg-gradient-primary text-lg px-8 py-3"
            >
              Access System
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/predictive-maintenance')}
            >
              View Analytics Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive Railway Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrated modules for manufacturers, site engineers, and maintenance teams with AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="text-center">
                <div className="bg-gradient-primary p-3 rounded-full w-12 h-12 mx-auto mb-3">
                  <Train className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Asset Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete lifecycle tracking from manufacturing to installation with batch management and warranty monitoring.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="text-center">
                <div className="bg-gradient-secondary p-3 rounded-full w-12 h-12 mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Site Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interactive mapping with color-coded health indicators and comprehensive inspection reporting tools.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="text-center">
                <div className="bg-gradient-status p-3 rounded-full w-12 h-12 mx-auto mb-3">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Task Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart scheduling, priority-based task allocation, and real-time progress tracking for maintenance teams.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="text-center">
                <div className="bg-gradient-primary p-3 rounded-full w-12 h-12 mx-auto mb-3">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Predictive AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Machine learning-powered failure prediction, remaining useful life calculations, and risk assessment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Railway Maintenance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the future of intelligent railway infrastructure management with role-based access and AI-powered insights.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/roles')}
            className="bg-gradient-primary text-lg px-8 py-3"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
