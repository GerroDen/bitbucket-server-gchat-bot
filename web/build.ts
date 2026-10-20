import { copyFile, glob, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { Resvg } from "@resvg/resvg-js";

const ASSETS_DIR = join(import.meta.dirname, "assets");
const DIST_DIR = join(import.meta.dirname, "dist");
const PNG_SIZE = 128;

await rm(DIST_DIR, { recursive: true, force: true });

for await (const file of glob("**/*.png", { cwd: ASSETS_DIR })) {
  await mkdir(dirname(join(DIST_DIR, file)), { recursive: true });
  await copyFile(join(ASSETS_DIR, file), join(DIST_DIR, file));
}

for await (const file of glob("**/*.svg", { cwd: ASSETS_DIR })) {
  const svg = await readFile(join(ASSETS_DIR, file));
  const png = new Resvg(svg, { fitTo: { mode: "width", value: PNG_SIZE } }).render().asPng();
  const target = join(DIST_DIR, file.replace(/\.svg$/, ".png"));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, png);
}
