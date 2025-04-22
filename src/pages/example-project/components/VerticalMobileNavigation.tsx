import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { navigationItems } from '../config/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const VerticalMobileNavigation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust for fixed header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      setOpen(false);
      
      // Update URL hash without causing page jumps
      history.replaceState(null, '', `#${sectionId}`);
    }
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.sectionId,
        element: document.getElementById(item.sectionId)
      })).filter(section => section.element !== null);

      // Find the section closest to the top of the viewport
      let currentSectionId = activeSection;
      for (const section of sections) {
        if (!section.element) continue;
        const rect = section.element.getBoundingClientRect();
        // If the section top is near the top of the viewport (with some buffer)
        if (rect.top <= 150) {
          currentSectionId = section.id;
        }
      }
      
      if (currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="fixed top-4 right-4 z-20 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md shadow-sm flex items-center justify-center"
          >
            <Menu size={20} />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72 p-0">
          <div className="flex flex-col h-full">
            <div className="py-6 px-5">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Jump to a section
              </p>
            </div>
            <div className="flex-1 border-t">
              <nav className="flex flex-col px-3 py-5 space-y-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.sectionId}
                    variant="ghost"
                    className={cn(
                      'justify-start rounded-lg h-14 px-5 text-base font-medium transition-all',
                      activeSection === item.sectionId 
                        ? 'bg-muted text-primary' 
                        : 'text-muted-foreground hover:bg-muted'
                    )}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default VerticalMobileNavigation;