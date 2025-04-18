
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  depth?: number;
  isExpanded?: boolean;
  onToggle?: () => void;
  active?: boolean;
};

const SidebarItem = ({ 
  title, 
  href, 
  icon, 
  children, 
  depth = 0,
  isExpanded,
  onToggle,
  active
}: SidebarItemProps) => {
  const hasChildren = !!children;
  const indent = depth * 16; // 16px per level
  
  return (
    <div>
      <div 
        className={cn(
          "flex items-center py-2 text-sm",
          active ? "text-docs-accent font-medium" : "text-muted-foreground hover:text-foreground",
          hasChildren && "cursor-pointer"
        )}
        style={{ paddingLeft: `${indent}px` }}
        onClick={hasChildren ? onToggle : undefined}
      >
        {hasChildren ? (
          <span className="mr-1">
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
        ) : null}
        
        {icon && <span className="mr-2">{icon}</span>}
        
        {href ? (
          <Link to={href} className="w-full">{title}</Link>
        ) : (
          <span>{title}</span>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="ml-2">{children}</div>
      )}
    </div>
  );
};

type SidebarCategory = {
  title: string;
  items: SidebarItem[];
};

type SidebarItem = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  items?: SidebarItem[];
};

const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/getting-started" },
      { title: "Installation", href: "/getting-started/installation" },
      { title: "Structure", href: "/getting-started/structure" },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: "Documentation Overview", href: "/documentation" },
      { 
        title: "Product", 
        items: [
          { title: "Overview", href: "/documentation/product" },
          { title: "High-level Design", href: "/documentation/product/design" },
          { title: "Explanation", href: "/documentation/product/explanation" },
        ] 
      },
      { 
        title: "Product.Services", 
        items: [
          { title: "Overview", href: "/documentation/product-services" },
          { title: "Service Catalog", href: "/documentation/product-services/catalog" },
        ] 
      },
      { 
        title: "Product.Services.Service", 
        items: [
          { title: "Overview", href: "/documentation/product-services-service" },
          { title: "Troubleshooting", href: "/documentation/product-services-service/troubleshooting" },
          { title: "Setup Guide", href: "/documentation/product-services-service/setup" },
          { title: "Branching Strategy", href: "/documentation/product-services-service/branching" },
          { title: "Release Calendar", href: "/documentation/product-services-service/releases" },
          { title: "Dependencies", href: "/documentation/product-services-service/dependencies" },
          { title: "Service Connectivity", href: "/documentation/product-services-service/connectivity" },
        ] 
      }
    ]
  },
  {
    title: "Example Project",
    items: [
      { title: "Example Overview", href: "/example-project" },
      { 
        title: "PaymentSystem", 
        items: [
          { title: "Overview", href: "/example-project/payment-system" },
          { title: "High-level Design", href: "/example-project/payment-system/design" },
        ] 
      },
      { 
        title: "PaymentSystem.Services", 
        items: [
          { title: "Overview", href: "/example-project/payment-system-services" },
          { title: "Gateway Service", href: "/example-project/payment-system-services/gateway" },
          { title: "Processor Service", href: "/example-project/payment-system-services/processor" },
          { title: "Analytics Service", href: "/example-project/payment-system-services/analytics" },
        ] 
      },
      { 
        title: "PaymentSystem.Services.Gateway", 
        items: [
          { title: "Overview", href: "/example-project/payment-system-services-gateway" },
          { title: "Troubleshooting", href: "/example-project/payment-system-services-gateway/troubleshooting" },
          { title: "Setup Guide", href: "/example-project/payment-system-services-gateway/setup" },
          { title: "Branching Strategy", href: "/example-project/payment-system-services-gateway/branching" },
          { title: "Release Calendar", href: "/example-project/payment-system-services-gateway/releases" },
        ] 
      }
    ]
  }
];

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "Documentation": true,
    "Getting Started": true,
    "Example Project": true
  });
  
  const location = useLocation();
  
  const toggleItem = (path: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };
  
  const renderItems = (items: SidebarItem[], parentPath = "", depth = 0) => {
    return items.map((item, index) => {
      const itemPath = parentPath ? `${parentPath}.${item.title}` : item.title;
      const isExpanded = !!expandedItems[itemPath];
      const isActive = item.href ? location.pathname === item.href : false;
      
      return (
        <SidebarItem
          key={`${itemPath}-${index}`}
          title={item.title}
          href={item.href}
          icon={item.icon}
          depth={depth}
          isExpanded={isExpanded}
          onToggle={() => toggleItem(itemPath)}
          active={isActive}
        >
          {item.items && renderItems(item.items, itemPath, depth + 1)}
        </SidebarItem>
      );
    });
  };
  
  return (
    <div className="w-full md:w-64 pr-4 pb-12 border-r border-docs-border">
      {SIDEBAR_ITEMS.map((category, idx) => (
        <div key={idx} className="mb-6">
          <h4 className="mb-2 font-semibold text-foreground">{category.title}</h4>
          <div className="space-y-1">
            {renderItems(category.items)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
