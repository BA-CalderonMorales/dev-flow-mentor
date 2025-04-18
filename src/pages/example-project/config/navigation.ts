
export interface NavigationItem {
  label: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Overview', path: '/example-project' },
  { label: 'Design', path: '/example-project/payment-system' },
  { label: 'Services', path: '/example-project/payment-system-services' },
  { label: 'Gateway', path: '/example-project/payment-system-services-gateway' },
  { label: 'Processor', path: '/example-project/payment-system-services-processor' },
  { label: 'Analytics', path: '/example-project/payment-system-services-analytics' },
];
