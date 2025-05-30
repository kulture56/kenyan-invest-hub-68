
export type FormData = {
  email: string;
  password: string;
};

export interface OrbitIcon {
  component: () => React.ReactNode;
  className: string;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  reverse?: boolean;
}
