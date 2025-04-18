
import { Link } from 'react-router-dom';
import { ArrowRight, Code, GitBranch, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PatternExample from '@/components/PatternExample';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-docs-accent">F*ck</span>Docs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              A structured documentation pattern for development teams to ship better code and maintain consistent knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/getting-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/example-project">
                  View Example
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pattern Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Documentation Pattern</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Organize technical documentation in a consistent, navigable structure that teams can rely on.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-docs-border bg-card">
                <div className="h-12 w-12 rounded-full bg-docs-accent/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-docs-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">Product</h3>
                <p className="text-muted-foreground">
                  High-level design, architecture, and explanations for why things are the way they are.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-docs-border bg-card">
                <div className="h-12 w-12 rounded-full bg-docs-accent/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-docs-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">Product.Services</h3>
                <p className="text-muted-foreground">
                  All services offered by a specific product or team, with a complete service catalog.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-docs-border bg-card">
                <div className="h-12 w-12 rounded-full bg-docs-accent/10 flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-docs-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">Product.Services.Service</h3>
                <p className="text-muted-foreground">
                  Detailed documentation for a specific service, including troubleshooting, setup, and dependencies.
                </p>
              </div>
            </div>
            
            <PatternExample />
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why F*ckDocs?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Documentation doesn't have to suck. We can make it better with a structured approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col p-6 rounded-lg border border-docs-border bg-card">
                <h3 className="text-xl font-medium mb-2">Consistent Structure</h3>
                <p className="text-muted-foreground">
                  Everyone knows where to find information because it follows a predictable pattern across all services.
                </p>
              </div>
              
              <div className="flex flex-col p-6 rounded-lg border border-docs-border bg-card">
                <h3 className="text-xl font-medium mb-2">Improved Onboarding</h3>
                <p className="text-muted-foreground">
                  New team members can quickly understand how services are organized and where to find critical information.
                </p>
              </div>
              
              <div className="flex flex-col p-6 rounded-lg border border-docs-border bg-card">
                <h3 className="text-xl font-medium mb-2">Reduced Knowledge Silos</h3>
                <p className="text-muted-foreground">
                  Break down knowledge barriers by making information available in a standardized format.
                </p>
              </div>
              
              <div className="flex flex-col p-6 rounded-lg border border-docs-border bg-card">
                <h3 className="text-xl font-medium mb-2">Better Collaboration</h3>
                <p className="text-muted-foreground">
                  Teams can collaborate more effectively when everyone understands the documentation structure.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to write better documentation?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with F*ckDocs today and transform how your team collaborates on technical documentation.
            </p>
            <Button asChild size="lg">
              <Link to="/getting-started">
                Start Documenting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
