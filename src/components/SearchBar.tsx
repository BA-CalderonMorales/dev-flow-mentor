
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock search results - In a real app, this would come from indexing the docs
const SEARCH_RESULTS = [
  {
    title: "Getting Started",
    description: "Introduction to F*ckDocs documentation pattern",
    url: "/getting-started"
  },
  {
    title: "Documentation Structure",
    description: "Learn about the product.services.service structure",
    url: "/getting-started/structure"
  },
  {
    title: "Example Project",
    description: "See the pattern in action with our example",
    url: "/example-project"
  },
  {
    title: "Troubleshooting Guide",
    description: "How to document troubleshooting procedures",
    url: "/example-project/payment-system-services-gateway/troubleshooting"
  }
];

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof SEARCH_RESULTS>([]);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Handle escape key to close search
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  useEffect(() => {
    if (query.trim()) {
      // Simple search logic - filter by query in title or description
      const filtered = SEARCH_RESULTS.filter(
        result => 
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);
  
  const handleResultClick = (url: string) => {
    navigate(url);
    if (onClose) onClose();
  };
  
  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 100)}
          className="block w-full rounded-md border border-input bg-background py-2 pl-10 pr-12 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-docs-accent"
        />
        {query && (
          <button 
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
      
      {(focused && results.length > 0) && (
        <div className="absolute top-full left-0 right-0 z-10 mt-2 rounded-md border border-docs-border bg-background shadow-md">
          <ul className="py-2 max-h-80 overflow-auto">
            {results.map((result, index) => (
              <li 
                key={index}
                className="px-4 py-2 hover:bg-muted cursor-pointer"
                onClick={() => handleResultClick(result.url)}
              >
                <h4 className="text-sm font-medium">{result.title}</h4>
                <p className="text-xs text-muted-foreground">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
