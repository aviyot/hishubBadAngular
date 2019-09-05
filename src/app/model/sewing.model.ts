export interface SewingProp {
  seam: number;
  topHem?: number;
  bottomHem?: number;
  leftHem?: number;
  rightHem?: number;
  hem?: number;
}

export interface TypeSewing {
  type: string;
  sewing: SewingProp;
}

export interface TypeHem {
  type: string;
  hem: number;
}
