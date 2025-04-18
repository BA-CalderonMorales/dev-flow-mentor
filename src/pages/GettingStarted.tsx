
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import CodeBlock from '@/components/CodeBlock';

const GettingStarted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h1>Getting Started with F*ckDocs</h1>
              
              <p>
                F*ckDocs is a documentation pattern designed to help development teams create 
                better, more consistent documentation. This guide will help you understand 
                the core concepts and get started with implementing the pattern in your own projects.
              </p>
              
              <h2>The Documentation Pattern</h2>
              
              <p>
                F*ckDocs follows a hierarchical structure that organizes documentation into three main levels:
              </p>
              
              <ul>
                <li>
                  <strong>product</strong> - High-level design documentation, architecture, and explanation 
                  for why things are designed the way they are.
                </li>
                <li>
                  <strong>product.services</strong> - All services offered by a specific product or team, 
                  providing a catalog of available functionality.
                </li>
                <li>
                  <strong>product.services.service</strong> - Detailed documentation for a specific service, 
                  including troubleshooting guides, setup instructions, branching strategies, release calendars, 
                  dependencies, and connectivity to other services.
                </li>
              </ul>
              
              <h2>Why This Pattern Works</h2>
              
              <p>
                This structure provides several benefits for development teams:
              </p>
              
              <ul>
                <li>
                  <strong>Discoverability</strong> - Teams can easily find the information they need 
                  because it follows a consistent pattern.
                </li>
                <li>
                  <strong>Completeness</strong> - The pattern encourages documentation of all important 
                  aspects of services and products.
                </li>
                <li>
                  <strong>Maintenance</strong> - With a clear structure, documentation is easier to maintain 
                  and keep up-to-date.
                </li>
                <li>
                  <strong>Onboarding</strong> - New team members can quickly understand the organization of 
                  services and products.
                </li>
              </ul>
              
              <h2>Directory Structure</h2>
              
              <p>
                Here's a sample directory structure that follows the F*ckDocs pattern:
              </p>
              
              <CodeBlock
                code={`docs/
├── product/
│   ├── README.md             # Overview of the product
│   ├── design.md             # High-level design document
│   ├── explanation.md        # Why things are designed this way
│   └── product.services/
│       ├── README.md         # Overview of all services
│       ├── service-catalog.md # Detailed catalog of services
│       └── product.services.service/
│           ├── README.md     # Service overview
│           ├── troubleshooting.md
│           ├── setup.md
│           ├── branching.md
│           ├── releases.md
│           ├── dependencies.md
│           └── connectivity.md`}
                language="bash"
                showLineNumbers={false}
              />
              
              <h2>Getting Started</h2>
              
              <p>
                To implement the F*ckDocs pattern in your project:
              </p>
              
              <ol>
                <li>
                  <strong>Create the base structure</strong> - Start by creating the basic directory 
                  structure following the pattern above.
                </li>
                <li>
                  <strong>Fill in high-level documentation</strong> - Document your product at the top level, 
                  explaining its purpose, design, and architectural decisions.
                </li>
                <li>
                  <strong>Document services</strong> - Create entries for each service your product offers, 
                  with overview information.
                </li>
                <li>
                  <strong>Add detailed service documentation</strong> - For each service, add the detailed 
                  documentation covering all aspects of its development and operation.
                </li>
              </ol>
              
              <h2>Templates</h2>
              
              <p>
                To make it easier to get started, you can use our templates for each documentation level:
              </p>
              
              <ul>
                <li>
                  <Link to="/getting-started/templates/product" className="text-docs-accent hover:text-docs-accent-foreground">
                    Product Documentation Template
                  </Link>
                </li>
                <li>
                  <Link to="/getting-started/templates/product-services" className="text-docs-accent hover:text-docs-accent-foreground">
                    Product Services Template
                  </Link>
                </li>
                <li>
                  <Link to="/getting-started/templates/product-services-service" className="text-docs-accent hover:text-docs-accent-foreground">
                    Product Services Service Template
                  </Link>
                </li>
              </ul>
              
              <h2>Example Project</h2>
              
              <p>
                Check out our <Link to="/example-project" className="text-docs-accent hover:text-docs-accent-foreground">example project</Link> to 
                see the F*ckDocs pattern in action. This example demonstrates how to document a fictional 
                payment system using the pattern.
              </p>
              
              <h2>Next Steps</h2>
              
              <p>
                Once you've set up the basic structure, explore these additional guides:
              </p>
              
              <ul>
                <li>
                  <Link to="/getting-started/installation" className="text-docs-accent hover:text-docs-accent-foreground">
                    Installation Guide
                  </Link> - How to set up F*ckDocs in your project
                </li>
                <li>
                  <Link to="/getting-started/structure" className="text-docs-accent hover:text-docs-accent-foreground">
                    Structure Guide
                  </Link> - Detailed explanation of the documentation structure
                </li>
                <li>
                  <Link to="/documentation" className="text-docs-accent hover:text-docs-accent-foreground">
                    Documentation Overview
                  </Link> - Complete documentation reference
                </li>
              </ul>
            </article>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GettingStarted;

