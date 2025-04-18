
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TreeNodeProps {
  name: string;
  type: 'file' | 'directory';
  level: number;
  children?: TreeNodeProps[];
  description?: string;
}

const PatternExample = () => {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'product': true,
    'product/product.services': true,
    'product/product.services/product.services.service': true,
  });

  const fileTree: TreeNodeProps[] = [
    {
      name: 'product',
      type: 'directory',
      level: 0,
      description: 'High-level product documentation, design, and explanation',
      children: [
        {
          name: 'README.md',
          type: 'file',
          level: 1,
          description: 'Overview of the product and purpose'
        },
        {
          name: 'design.md',
          type: 'file',
          level: 1,
          description: 'High-level architecture and design decisions'
        },
        {
          name: 'explanation.md',
          type: 'file',
          level: 1,
          description: 'Explanation for why things are designed this way'
        },
        {
          name: 'product.services',
          type: 'directory',
          level: 1,
          description: 'All services offered by the product or team',
          children: [
            {
              name: 'README.md',
              type: 'file',
              level: 2,
              description: 'Overview of all services in the product'
            },
            {
              name: 'service-catalog.md',
              type: 'file',
              level: 2,
              description: 'Catalog of available services and their purpose'
            },
            {
              name: 'product.services.service',
              type: 'directory',
              level: 2,
              description: 'Detailed documentation for a specific service',
              children: [
                {
                  name: 'README.md',
                  type: 'file',
                  level: 3,
                  description: 'Overview of this specific service'
                },
                {
                  name: 'troubleshooting.md',
                  type: 'file',
                  level: 3,
                  description: 'Troubleshooting guides and solutions'
                },
                {
                  name: 'setup.md',
                  type: 'file',
                  level: 3,
                  description: 'Setup instructions and environment configuration'
                },
                {
                  name: 'branching.md',
                  type: 'file',
                  level: 3,
                  description: 'Branching strategy and workflow'
                },
                {
                  name: 'releases.md',
                  type: 'file',
                  level: 3,
                  description: 'Release calendar and versioning strategy'
                },
                {
                  name: 'dependencies.md',
                  type: 'file',
                  level: 3,
                  description: 'Service dependencies and requirements'
                },
                {
                  name: 'connectivity.md',
                  type: 'file',
                  level: 3,
                  description: 'Connections to other services and systems'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  const toggleNode = (path: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const renderFileTree = (nodes: TreeNodeProps[], basePath = '') => {
    return nodes.map((node) => {
      const path = basePath ? `${basePath}/${node.name}` : node.name;
      const isExpanded = !!expandedNodes[path];
      const hasChildren = node.children && node.children.length > 0;
      
      return (
        <div key={path}>
          <div 
            className={cn(
              "flex items-start py-2",
              node.type === 'directory' && "cursor-pointer",
              "hover:bg-muted/50 rounded pl-1"
            )}
            style={{ marginLeft: `${node.level * 16}px` }}
            onClick={hasChildren ? () => toggleNode(path) : undefined}
          >
            <div className="flex-shrink-0 mr-2 mt-1">
              {node.type === 'directory' ? (
                isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
              ) : (
                <div className="w-4" /> // Spacer for files
              )}
            </div>
            
            <div className="flex flex-col">
              <span className={cn(
                "text-sm", 
                node.type === 'directory' ? "font-medium" : "",
                node.type === 'file' ? "text-muted-foreground" : "text-foreground"
              )}>
                {node.name}
              </span>
              {node.description && (
                <span className="text-xs text-muted-foreground mt-0.5">{node.description}</span>
              )}
            </div>
          </div>
          
          {hasChildren && isExpanded && renderFileTree(node.children!, path)}
        </div>
      );
    });
  };

  return (
    <div className="border border-docs-border rounded-md overflow-hidden bg-background p-4">
      <h3 className="font-medium mb-4">Documentation Pattern Structure</h3>
      <div className="overflow-auto">
        {renderFileTree(fileTree)}
      </div>
    </div>
  );
};

export default PatternExample;
