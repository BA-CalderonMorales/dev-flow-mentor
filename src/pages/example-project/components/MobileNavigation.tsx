
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MobileNavigation = () => {
  return (
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
  );
};

export default MobileNavigation;
