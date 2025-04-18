
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import PatternExample from '@/components/PatternExample';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Documentation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="container flex-1 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
          
          <main className="flex-1 max-w-3xl">
            <article className="prose max-w-none">
              <h1>Documentation Overview</h1>
              
              <p>
                This documentation guide explains the F*ckDocs pattern in detail and provides 
                comprehensive information about each level of the documentation hierarchy.
              </p>
              
              <h2>Documentation Pattern</h2>
              
              <p>
                F*ckDocs follows a three-level hierarchical pattern:
              </p>
              
              <ol>
                <li>
                  <strong>product</strong> - Top-level documentation about the product as a whole
                </li>
                <li>
                  <strong>product.services</strong> - Documentation about the services that make up the product
                </li>
                <li>
                  <strong>product.services.service</strong> - Detailed documentation about a specific service
                </li>
              </ol>
              
              <p>
                This hierarchy provides a clear structure for organizing documentation and ensures 
                that all important aspects of a product and its services are documented.
              </p>
              
              <h2>Structure Visualization</h2>
              
              <PatternExample />
              
              <h2>Level 1: Product</h2>
              
              <p>
                The product level documentation provides a high-level overview of the entire product 
                or system. It includes:
              </p>
              
              <ul>
                <li>
                  <strong>Overview</strong> - General description and purpose of the product
                </li>
                <li>
                  <strong>High-level Design</strong> - Architectural diagrams and design decisions
                </li>
                <li>
                  <strong>Explanation</strong> - Rationale for why things are designed the way they are
                </li>
              </ul>
              
              <p>
                <Link to="/documentation/product" className="text-docs-accent hover:text-docs-accent-foreground">
                  Learn more about Product documentation
                </Link>
              </p>
              
              <h2>Level 2: Product.Services</h2>
              
              <p>
                The product.services level documents all the services that make up the product. It includes:
              </p>
              
              <ul>
                <li>
                  <strong>Overview</strong> - Summary of all services in the product
                </li>
                <li>
                  <strong>Service Catalog</strong> - Detailed listing of each service with descriptions
                </li>
                <li>
                  <strong>Service Relationships</strong> - How services interact with each other
                </li>
              </ul>
              
              <p>
                <Link to="/documentation/product-services" className="text-docs-accent hover:text-docs-accent-foreground">
                  Learn more about Product.Services documentation
                </Link>
              </p>
              
              <h2>Level 3: Product.Services.Service</h2>
              
              <p>
                The product.services.service level provides detailed documentation about a specific service. 
                It includes:
              </p>
              
              <ul>
                <li>
                  <strong>Overview</strong> - Purpose and functionality of the service
                </li>
                <li>
                  <strong>Troubleshooting</strong> - Common issues and their solutions
                </li>
                <li>
                  <strong>Setup Guide</strong> - How to set up the service for development
                </li>
                <li>
                  <strong>Branching Strategy</strong> - Git workflow and branching conventions
                </li>
                <li>
                  <strong>Release Calendar</strong> - Schedule of releases and versioning approach
                </li>
                <li>
                  <strong>Dependencies</strong> - External and internal dependencies
                </li>
                <li>
                  <strong>Service Connectivity</strong> - How this service connects to other services
                </li>
              </ul>
              
              <p>
                <Link to="/documentation/product-services-service" className="text-docs-accent hover:text-docs-accent-foreground">
                  Learn more about Product.Services.Service documentation
                </Link>
              </p>
              
              <h2>Implementation Guidelines</h2>
              
              <p>
                When implementing the F*ckDocs pattern, follow these guidelines:
              </p>
              
              <ul>
                <li>
                  <strong>Be Consistent</strong> - Follow the same structure across all products and services
                </li>
                <li>
                  <strong>Keep It Current</strong> - Update documentation as code and processes change
                </li>
                <li>
                  <strong>Write for Your Audience</strong> - Consider who will be reading each section
                </li>
                <li>
                  <strong>Include Examples</strong> - Provide concrete examples wherever possible
                </li>
                <li>
                  <strong>Link Related Documents</strong> - Create links between related documentation
                </li>
              </ul>
              
              <h2>Example Implementation</h2>
              
              <p>
                For a complete example of the F*ckDocs pattern in action, see our example project:
              </p>
              
              <div className="not-prose mt-6">
                <Button asChild>
                  <Link to="/example-project">
                    View Example Project
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

export default Documentation;
