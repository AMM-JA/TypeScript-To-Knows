// Intersecting two types in order to check for both if they exist
// weight: number & string is one, but not an good example since it doesn't work.

let weight: number & string

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};