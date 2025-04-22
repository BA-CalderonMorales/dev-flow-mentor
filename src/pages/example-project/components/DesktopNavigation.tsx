import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { navigationItems } from '../config/navigation';
import { cn } from '@/lib/utils';

const DesktopNavigation = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
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
        // Update URL hash for deeplinking without page reload
        history.replaceState(null, '', `#${currentSectionId}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="hidden md:flex mb-6 overflow-x-auto">
      <div className="flex space-x-1 border-b w-full">
        {navigationItems.map((item) => (
          <Button
            key={item.sectionId}
            variant="ghost"
            size="sm"
            className={cn(
              'rounded-none border-b-2 border-transparent px-4',
              activeSection === item.sectionId && 'border-docs-accent text-docs-accent'
            )}
            onClick={() => scrollToSection(item.sectionId)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;