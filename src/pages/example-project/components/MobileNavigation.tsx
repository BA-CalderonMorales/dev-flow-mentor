import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { navigationItems } from '../config/navigation';
import { cn } from '@/lib/utils';

const MobileNavigation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust for fixed header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      
      // Update URL hash without causing page jumps
      history.replaceState(null, '', `#${sectionId}`);
    }
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled state for shadow effect
      setIsScrolled(window.scrollY > 10);
      
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
    <div className={cn(
      "md:hidden fixed top-14 left-0 right-0 z-10 bg-background/80 backdrop-blur-md transition-all",
      isScrolled ? "shadow-md" : ""
    )}>
      <ScrollArea className="h-[64px] w-full overflow-x-auto">
        <div className="flex items-center h-full gap-3 px-4 py-2 min-w-full">
          {navigationItems.map((item) => (
            <Button
              key={item.sectionId}
              variant="ghost"
              size="sm"
              className={cn(
                'flex-shrink-0 rounded-full px-4 py-2 h-10 flex items-center justify-center transition-all',
                activeSection === item.sectionId 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MobileNavigation;
