export type ProjectDetailType = 'configurations' | 'members' | 'changes' | 'warnings';

export interface ProjectDetail {
  type: ProjectDetailType;
  iconName: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    type: 'configurations',
    iconName: 'shared/configurations'
  },
  {
    type: 'members',
    iconName: 'shared/members'
  },
  {
    type: 'changes',
    iconName: 'edit'
  },
  {
    type: 'warnings',
    iconName: 'warning'
  }
];
