/* eslint-disable import/prefer-default-export */

// maximum sharpness on weapon is 250
// Here we calculate the width purcent to fit the container's width
export function setSharpness(value: number) {
  const width = `${(value / 250) * 100}%`;
  return width;
}
