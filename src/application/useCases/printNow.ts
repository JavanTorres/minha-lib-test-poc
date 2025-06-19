export function printNow(): string {
  const now = new Date();
  const message = `Agora é: ${now.toISOString()}`;
  console.log(message);
  return message;
}
