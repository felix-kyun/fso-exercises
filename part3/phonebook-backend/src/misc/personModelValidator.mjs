export function validatePersonName(v) {
  return v.length >= 8 && /\d{2,3}-\d+$/.test(v);
}
