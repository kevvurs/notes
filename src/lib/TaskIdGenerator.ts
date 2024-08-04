// Generates a random ID for tasks
export function generateId(): string {
  const a = toHex(randomNumber(2));
  const b = toHex(randomNumber(3));
  const c = toHex(randomNumber(3));
  return `${a}-${b}-${c}`;
  
}

function randomNumber(digits: number): number {
  return Math.round(Math.random() * (10**digits));
}

function toHex(n: number): string {
  return n.toString(16);
}
