export function titleCase(data) {
  return data.toString().replace(/(^\w|\s+\w)/g, function (match) {
    return match.toUpperCase().trim();
  });
}