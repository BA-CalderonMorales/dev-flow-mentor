import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import MobileNavigation from './example-project/components/MobileNavigation';
import VerticalMobileNavigation from './example-project/components/VerticalMobileNavigation';
import DesktopNavigation from './example-project/components/DesktopNavigation';
import MainContent from './example-project/components/MainContent';

const ExampleProject = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <MobileNavigation />
      <VerticalMobileNavigation />
      
      <div className="container flex-1 py-4 md:py-8 pt-24 md:pt-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="hidden md:block w-64">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
          
          <main className="flex-1 max-w-3xl px-4 md:px-0">
            <DesktopNavigation />
            <MainContent />
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExampleProject;
