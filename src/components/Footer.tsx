
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-docs-border bg-background py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-xl font-bold text-docs-accent">
              F*ckDocs
            </Link>
            <p className="text-sm text-muted-foreground">
              A better way to document development processes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium">Documentation</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Overview
                </Link>
                <Link to="/getting-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Getting Started
                </Link>
                <Link to="/example-project" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Example Project
                </Link>
              </nav>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-medium">Community</h3>
              <nav className="flex flex-col gap-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </nav>
            </div>
            
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              <h3 className="font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-docs-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} F*ckDocs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
