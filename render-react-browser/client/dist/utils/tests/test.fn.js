export function test(description, callback) {
  try {
    callback();
    console.log("\uD83D\uDFE2 \uC131\uACF5: ".concat(description));
  } catch (error) {
    console.groupCollapsed("\uD83D\uDD34 \uC2E4\uD328: ".concat(description));
    console.error(error.message);
    console.groupEnd();
  }
}