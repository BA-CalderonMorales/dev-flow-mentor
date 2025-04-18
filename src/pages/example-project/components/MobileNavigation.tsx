
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../config/navigation';
import { cn } from '@/lib/utils';

const MobileNavigation = () => {
  const location = useLocation();

  return (
    <div className="md:hidden">
      <ScrollArea className="h-[60px] w-full">
        <div className="flex items-center gap-2 px-4">
          {navigationItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              className={cn(
                'transition-colors',
                location.pathname === item.path && 'bg-accent text-accent-foreground'
              )}
              asChild
            >
              <Link to={item.path}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MobileNavigation;
