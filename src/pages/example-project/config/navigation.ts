export interface NavigationItem {
  label: string;
  sectionId: string; // Changed from path to sectionId
}

export const navigationItems: NavigationItem[] = [
  { label: 'Overview', sectionId: 'overview' },
  { label: 'Design', sectionId: 'design' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Gateway', sectionId: 'gateway' },
  { label: 'Processor', sectionId: 'processor' },
  { label: 'Analytics', sectionId: 'analytics' },
];
