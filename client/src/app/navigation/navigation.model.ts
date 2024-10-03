export type NavigationOptionId =
  | 'projects'
  | 'configurations'
  | 'members'
  | 'history'
  | 'settings'
  | undefined;

export interface NavigationOption {
  id: NavigationOptionId;
  name: string;
  icon: string;
}

export const NAVIGATION_OPTIONS: NavigationOption[] = [
  {
    id: 'projects',
    name: 'Projects',
    icon: 'nav/projects'
  },
  {
    id: 'configurations',
    name: 'Configurations',
    icon: 'shared/configurations'
  },
  {
    id: 'members',
    name: 'Members',
    icon: 'shared/members'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'nav/history'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: 'nav/settings'
  }
];
