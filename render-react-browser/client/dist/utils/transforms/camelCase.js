export function camelCase(data) {
  return data.toString().replace(/\s+\w/g, function (match) {
    return match.toUpperCase().trim();
  });
}