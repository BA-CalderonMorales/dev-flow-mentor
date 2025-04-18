
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const ExampleProject = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="container flex-1 py-4 md:py-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:hidden">
            <ScrollArea className="h-[60px] w-full">
              <div className="flex items-center gap-2 px-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/example-project">Overview</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/example-project/payment-system">Design</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/example-project/payment-system-services">Services</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/example-project/payment-system-services-gateway">Gateway</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/example-project/payment-system-services-processor">Processor</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/example-project/payment-system-services-analytics">Analytics</Link>
                </Button>
              </div>
            </ScrollArea>
          </div>
          
          <div className="hidden md:block w-64">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
          
          <main className="flex-1 max-w-3xl px-4 md:px-0">
            <article className="prose max-w-none">
              <h1>Example Project: Payment System</h1>
              
              <p>
                This example project demonstrates how to apply the F*ckDocs pattern to a fictional 
                payment processing system. It shows how to structure documentation at each level 
                of the hierarchy.
              </p>
              
              <h2>Project Overview</h2>
              
              <p>
                Our example is a payment processing system called "PaymentSystem" that consists of 
                several microservices working together to process payments, analyze transactions, 
                and provide reporting.
              </p>
              
              <p>
                The system follows the F*ckDocs pattern for documentation:
              </p>
              
              <ul>
                <li>
                  <strong>PaymentSystem</strong> - Top-level documentation about the payment system
                </li>
                <li>
                  <strong>PaymentSystem.Services</strong> - Documentation about the various services in the payment system
                </li>
                <li>
                  <strong>PaymentSystem.Services.{"{Service}"}</strong> - Detailed documentation about specific services
                </li>
              </ul>
              
              <h2>Documentation Structure</h2>
              
              <CodeBlock
                code={`docs/
├── PaymentSystem/
│   ├── README.md              # Overview of the payment system
│   ├── design.md              # High-level architecture
│   ├── explanation.md         # Why we designed it this way
│   └── PaymentSystem.Services/
│       ├── README.md          # Overview of all services
│       ├── service-catalog.md # Catalog of all services
│       ├── PaymentSystem.Services.Gateway/
│       │   ├── README.md      # Gateway service overview
│       │   ├── troubleshooting.md
│       │   ├── setup.md
│       │   ├── branching.md
│       │   ├── releases.md
│       │   ├── dependencies.md
│       │   └── connectivity.md
│       ├── PaymentSystem.Services.Processor/
│       │   ├── README.md      # Processor service overview
│       │   ├── troubleshooting.md
│       │   ├── setup.md
│       │   ├── branching.md
│       │   ├── releases.md
│       │   ├── dependencies.md
│       │   └── connectivity.md
│       └── PaymentSystem.Services.Analytics/
│           ├── README.md      # Analytics service overview
│           ├── troubleshooting.md
│           ├── setup.md
│           ├── branching.md
│           ├── releases.md
│           ├── dependencies.md
│           └── connectivity.md`}
                language="bash"
                showLineNumbers={false}
              />
              
              <h2>Level 1: PaymentSystem</h2>
              
              <p>
                At the top level, we document the overall payment system:
              </p>
              
              <ul>
                <li>
                  <strong>README.md</strong> - Overview of the payment system, its purpose, and key features
                </li>
                <li>
                  <strong>design.md</strong> - High-level architecture diagrams, design patterns, and system components
                </li>
                <li>
                  <strong>explanation.md</strong> - Rationale for architectural decisions and design choices
                </li>
              </ul>
              
              <p>
                <Link to="/example-project/payment-system" className="text-docs-accent hover:text-docs-accent-foreground">
                  View the PaymentSystem documentation
                </Link>
              </p>
              
              <h2>Level 2: PaymentSystem.Services</h2>
              
              <p>
                At the services level, we document all the services that make up the payment system:
              </p>
              
              <ul>
                <li>
                  <strong>README.md</strong> - Overview of all services in the payment system
                </li>
                <li>
                  <strong>service-catalog.md</strong> - Detailed catalog of each service, including purpose and responsibilities
                </li>
              </ul>
              
              <p>
                The payment system includes these services:
              </p>
              
              <ul>
                <li>
                  <strong>Gateway</strong> - Handles incoming payment requests and routes them to appropriate processors
                </li>
                <li>
                  <strong>Processor</strong> - Processes payment transactions with different payment methods
                </li>
                <li>
                  <strong>Analytics</strong> - Analyzes payment data and generates reports
                </li>
              </ul>
              
              <p>
                <Link to="/example-project/payment-system-services" className="text-docs-accent hover:text-docs-accent-foreground">
                  View the PaymentSystem.Services documentation
                </Link>
              </p>
              
              <h2>Level 3: PaymentSystem.Services.Gateway</h2>
              
              <p>
                At the service level, we provide detailed documentation for each specific service.
                Here's what we document for the Gateway service:
              </p>
              
              <ul>
                <li>
                  <strong>README.md</strong> - Overview of the Gateway service and its functionality
                </li>
                <li>
                  <strong>troubleshooting.md</strong> - Common issues and solutions specific to the Gateway
                </li>
                <li>
                  <strong>setup.md</strong> - How to set up the Gateway service for development
                </li>
                <li>
                  <strong>branching.md</strong> - Git workflow and branching strategy for the Gateway service
                </li>
                <li>
                  <strong>releases.md</strong> - Release schedule and versioning for the Gateway service
                </li>
                <li>
                  <strong>dependencies.md</strong> - External and internal dependencies for the Gateway
                </li>
                <li>
                  <strong>connectivity.md</strong> - How the Gateway connects to other services
                </li>
              </ul>
              
              <p>
                <Link to="/example-project/payment-system-services-gateway" className="text-docs-accent hover:text-docs-accent-foreground">
                  View the PaymentSystem.Services.Gateway documentation
                </Link>
              </p>
              
              <h2>Using This Example</h2>
              
              <p>
                You can use this example as a template for your own project documentation:
              </p>
              
              <ol>
                <li>
                  <strong>Copy the structure</strong> - Use the same directory structure for your project
                </li>
                <li>
                  <strong>Adapt the content</strong> - Modify the content to match your own product and services
                </li>
                <li>
                  <strong>Maintain consistency</strong> - Keep the same structure across all your services
                </li>
              </ol>
              
              <h2>Next Steps</h2>
              
              <p>
                Ready to implement F*ckDocs in your own project?
              </p>
              
              <div className="not-prose mt-6">
                <Button asChild>
                  <Link to="/getting-started">
                    Get Started with F*ckDocs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExampleProject;
