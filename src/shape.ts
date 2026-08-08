export type Circle = {
  kind: "circle";
  radius: number;
};

export type Square = {
  kind: "square";
  sideLength: number;
};

export type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

export type Shape = Circle | Square | Triangle;