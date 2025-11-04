export const formatResultAsHtml = (obj) => {
  if (typeof obj === "function") {
    return '<b>function</b> (<b style="color:oklch(69.6% 0.17 162.48)">OK</b>)';
  } else if (
    // if obj is an ECMAScript module
    obj !== null &&
    typeof obj === "object" &&
    obj[Symbol.toStringTag] === "Module" &&
    obj.__esModule
  ) {
    return '<b style="color:oklch(58.6% 0.253 17.585)">module</b> (<b style="color:oklch(58.6% 0.253 17.585)">NG</b>)';
  }

  return '<b style="color:oklch(58.6% 0.253 17.585)">UNKNOWN</b>';
};
