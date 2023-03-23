export function hexToRgb(str) {
  let hexs = "";
  let reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(str)) return false
  str = str.replace("#", "");
  hexs = str.match(/../g);
  for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
  return hexs;
}
export function rgbToHex(r, g, b) {
  let reg = /^\d{1,3}$/;
  if (!reg.test(r) || !reg.test(g) || !reg.test(b)) return false
  let hexs = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
  return `#${hexs.join("")}`;
}

/**
 * 加深颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getDarkColor(color, level) {
  let reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return false
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

/**
 * 变浅颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getLightColor(color, level) {
  let reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return false
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(255 * level + rgb[i] * (1 - level));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}