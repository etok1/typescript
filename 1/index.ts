const testVar: number = 2022;

function isStringType(value: string | number) {
  if (typeof value === "number") {
    console.log(value);
    return false;
  } else {
    console.log(value);
    return true;
  }
}

console.log(isStringType(testVar));
