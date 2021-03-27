export function add(a, b) {
  return a + b;
}

// export default function print() {} // Uncaught SyntaxError: Duplicate export of 'default'
export function print() {
  console.log('print');
}

export const number = 10;
