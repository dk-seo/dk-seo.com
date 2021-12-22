export function types(): string {
  return 'types';
}

export interface BlogEntry {
  title: string;
  body: string;
  timestamp?: Date;
}
