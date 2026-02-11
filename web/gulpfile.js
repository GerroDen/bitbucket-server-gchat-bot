import { dest, src, parallel } from "gulp";
import svg2png from "gulp-svg2png";

export async function copyPngs() {
  return src("assets/**/*.png").pipe(dest("dist/"));
}

export async function convertSvg2Png() {
  return src("assets/**/*.svg")
    .pipe(svg2png({ width: 128, height: 128 }))
    .pipe(dest("dist/"));
}

export const build = parallel(copyPngs, convertSvg2Png);
export default build;
