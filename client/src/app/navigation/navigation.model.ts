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
  link: string;
}

export const navigationOptions: NavigationOption[] = [
  {
    id: 'projects',
    name: 'Projects',
    icon: 'nav/projects',
    link: '/projects'
  },
  {
    id: 'configurations',
    name: 'Configurations',
    icon: 'shared/configurations',
    link: '/configurations'
  },
  {
    id: 'members',
    name: 'Members',
    icon: 'shared/members',
    link: '/members'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'nav/history',
    link: '/history'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: 'nav/settings',
    link: '/settings'
  }
];
