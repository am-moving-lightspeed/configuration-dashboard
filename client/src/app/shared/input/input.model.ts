export type InputType = 'text';

export interface InputParams {
  id: string;
  type: InputType;
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
  light?: boolean;
}
