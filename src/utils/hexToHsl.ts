const hexToHsl = (hex: string): [number, number, number] => {
  // Remove the '#' symbol if present
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  // Convert the hex value to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  // Find the maximum and minimum values of r, g, b
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  const diff = max - min;

  // Calculate the hue
  let h = 0;
  if (max === min) {
    h = 0; // achromatic (gray)
  } else {
    const diff = max - min;
    if (max === r) {
      h = (60 * ((g - b) / diff) + 360) % 360;
    } else if (max === g) {
      h = (60 * ((b - r) / diff) + 120) % 360;
    } else if (max === b) {
      h = (60 * ((r - g) / diff) + 240) % 360;
    }
  }

  // Calculate the lightness
  const l = (max + min) / 2;

  // Calculate the saturation
  let s = 0;
  if (max !== min) {
    if (l <= 0.5) {
      s = diff / (max + min);
    } else {
      s = diff / (2 - max - min);
    }
  }

  return [h, s * 100, l * 100];
};

export default hexToHsl;
