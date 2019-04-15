export function uniqueKey(prefix) {
  return (
    prefix +
    Math.random()
      .toString(36)
      .substr(2, 16)
  );
}
