export interface IOffice {
  name: string;
  type: "workstation" | "printer" | "other";
  x: number;
  y: number;
  scale?: number;
  orientation?: "horizontal" | "vertical";
}
