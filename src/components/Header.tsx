
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-docs-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-docs-accent">F*ckDocs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link to="/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
              Getting Started
            </Link>
            <Link to="/example-project" className="text-muted-foreground hover:text-foreground transition-colors">
              Example Project
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {showSearch ? (
            <div className="mr-4 w-full md:w-auto">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowSearch(true)}
              className="mr-1"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search documentation</span>
            </Button>
          )}
          
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <div className="container md:hidden py-4 border-t border-docs-border">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/documentation" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              to="/getting-started" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Getting Started
            </Link>
            <Link 
              to="/example-project" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Example Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
