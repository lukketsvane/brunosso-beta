export interface SceneCharacter {
  a: string;  // asset filename
  x: number;  // x position (%)
  y: number;  // y position (%)
  s: number;  // scale (0-1)
  e: "fadeUp" | "slideL" | "slideR" | "shake";  // entry animation
  i: "breathe" | "bob" | "sway" | "shake";      // idle animation
}

export interface Scene {
  bg: [string, string];
  ch: SceneCharacter[];
}

export interface Chapter {
  start: number;
  dur: number;
  scene: Scene;
}

const W: [string, string] = ["#FFFFFF", "#FFFFFF"];

export const CHAPTERS: Chapter[] = [
  { start: 0.0, dur: 70.611, scene: { bg: W, ch: [{ a: "brunosso_full_stop.png", x: 50, y: 50, s: 0.55, e: "fadeUp", i: "breathe" }] } },
  { start: 70.611, dur: 81.171, scene: { bg: W, ch: [{ a: "brunosso_ghasping.png", x: 28, y: 55, s: 0.45, e: "slideL", i: "bob" }, { a: "cor_character_2.png", x: 72, y: 50, s: 0.45, e: "slideR", i: "sway" }] } },
  { start: 151.782, dur: 82.451, scene: { bg: W, ch: [{ a: "brunosso_pointing.png", x: 25, y: 55, s: 0.40, e: "slideL", i: "bob" }, { a: "milkman_character.png", x: 72, y: 46, s: 0.52, e: "slideR", i: "breathe" }] } },
  { start: 234.233, dur: 86.291, scene: { bg: W, ch: [{ a: "brunosso_mad.png", x: 50, y: 48, s: 0.60, e: "shake", i: "shake" }] } },
  { start: 320.524, dur: 74.371, scene: { bg: W, ch: [{ a: "brunosso_pointing.png", x: 28, y: 55, s: 0.38, e: "slideL", i: "bob" }, { a: "ramen_bowl_character.png", x: 72, y: 48, s: 0.45, e: "slideR", i: "sway" }] } },
  { start: 394.895, dur: 89.811, scene: { bg: W, ch: [{ a: "brunosso_walking.png", x: 25, y: 46, s: 0.42, e: "slideL", i: "bob" }, { a: "huvuru_questioning.png", x: 68, y: 42, s: 0.52, e: "slideR", i: "breathe" }] } },
  { start: 484.706, dur: 75.331, scene: { bg: W, ch: [{ a: "brunosso_shockingly_tall.png", x: 55, y: 38, s: 0.70, e: "fadeUp", i: "breathe" }, { a: "brunosso_walking_2.png", x: 18, y: 65, s: 0.25, e: "slideL", i: "bob" }] } },
  { start: 560.037, dur: 111.011, scene: { bg: W, ch: [{ a: "marshmallow_lady_character.png", x: 42, y: 45, s: 0.50, e: "fadeUp", i: "breathe" }, { a: "cor_character_2.png", x: 80, y: 55, s: 0.30, e: "slideR", i: "sway" }] } },
  { start: 671.048, dur: 93.251, scene: { bg: W, ch: [{ a: "brunosso_sitting_in_bed.png", x: 42, y: 50, s: 0.48, e: "fadeUp", i: "bob" }, { a: "brunosso_ghasping.png", x: 82, y: 55, s: 0.30, e: "slideR", i: "shake" }] } },
  { start: 764.299, dur: 98.331, scene: { bg: W, ch: [{ a: "brunosso_looking_up.png", x: 32, y: 46, s: 0.48, e: "slideL", i: "breathe" }, { a: "cod_character.png", x: 75, y: 50, s: 0.42, e: "slideR", i: "sway" }] } },
  { start: 862.63, dur: 102.451, scene: { bg: W, ch: [{ a: "cow_holwing_papers.png", x: 55, y: 44, s: 0.52, e: "fadeUp", i: "breathe" }, { a: "brunosso_pointing.png", x: 20, y: 58, s: 0.32, e: "slideL", i: "bob" }] } },
  { start: 965.081, dur: 67.051, scene: { bg: W, ch: [{ a: "marshmallow_lady_character.png", x: 30, y: 46, s: 0.45, e: "slideL", i: "breathe" }, { a: "brunosso_walking.png", x: 72, y: 48, s: 0.42, e: "slideR", i: "bob" }] } },
  { start: 1032.131, dur: 76.411, scene: { bg: W, ch: [{ a: "directional_sign.png", x: 50, y: 48, s: 0.50, e: "fadeUp", i: "breathe" }] } },
  { start: 1108.542, dur: 77.251, scene: { bg: W, ch: [{ a: "sheep_headbutting_ball.png", x: 55, y: 45, s: 0.48, e: "fadeUp", i: "bob" }, { a: "brunosso_ghasping.png", x: 18, y: 58, s: 0.30, e: "slideL", i: "shake" }] } },
  { start: 1185.793, dur: 65.091, scene: { bg: W, ch: [{ a: "huvuru_questioning.png", x: 50, y: 42, s: 0.55, e: "fadeUp", i: "bob" }] } },
  { start: 1250.884, dur: 89.011, scene: { bg: W, ch: [{ a: "brunosso_mad.png", x: 32, y: 48, s: 0.48, e: "slideL", i: "shake" }, { a: "background_character_01_symbals.png", x: 78, y: 42, s: 0.38, e: "slideR", i: "sway" }] } },
  { start: 1339.895, dur: 92.371, scene: { bg: W, ch: [{ a: "brunosso_ghasping.png", x: 25, y: 52, s: 0.42, e: "slideL", i: "shake" }, { a: "cow_character.png", x: 70, y: 42, s: 0.50, e: "slideR", i: "breathe" }] } },
  { start: 1432.266, dur: 109.291, scene: { bg: W, ch: [{ a: "cod_character.png", x: 52, y: 38, s: 0.65, e: "fadeUp", i: "breathe" }, { a: "brunosso_walking_2.png", x: 16, y: 65, s: 0.25, e: "slideL", i: "bob" }] } },
  { start: 1541.557, dur: 60.251, scene: { bg: W, ch: [{ a: "brunosso_running.png", x: 50, y: 48, s: 0.58, e: "shake", i: "shake" }] } },
  { start: 1601.808, dur: 115.611, scene: { bg: W, ch: [{ a: "cod_character.png", x: 68, y: 45, s: 0.50, e: "slideR", i: "breathe" }, { a: "brunosso_looking_up.png", x: 28, y: 48, s: 0.45, e: "slideL", i: "bob" }] } },
  { start: 1717.419, dur: 92.451, scene: { bg: W, ch: [{ a: "cow_holwing_papers.png", x: 55, y: 42, s: 0.52, e: "fadeUp", i: "breathe" }, { a: "brunosso_from_behind.png", x: 18, y: 62, s: 0.30, e: "slideL", i: "bob" }] } },
  { start: 1809.87, dur: 75.291, scene: { bg: W, ch: [{ a: "brunosso_from_behind.png", x: 38, y: 52, s: 0.48, e: "fadeUp", i: "breathe" }, { a: "marshmallow_lady_character.png", x: 75, y: 48, s: 0.38, e: "slideR", i: "bob" }] } },
  { start: 1885.161, dur: 78.611, scene: { bg: W, ch: [{ a: "directional_sign.png", x: 40, y: 46, s: 0.45, e: "fadeUp", i: "breathe" }, { a: "sheep_character_02.png", x: 78, y: 48, s: 0.35, e: "slideR", i: "bob" }] } },
  { start: 1963.772, dur: 92.451, scene: { bg: W, ch: [{ a: "cod_character.png", x: 70, y: 45, s: 0.50, e: "slideR", i: "breathe" }, { a: "brunosso_walking_2.png", x: 28, y: 55, s: 0.38, e: "slideL", i: "bob" }] } },
  { start: 2056.223, dur: 60.251, scene: { bg: W, ch: [{ a: "brunosso_walking_w_sanwitch_in_hand.png", x: 50, y: 50, s: 0.55, e: "fadeUp", i: "bob" }] } },
  { start: 2116.474, dur: 128.131, scene: { bg: W, ch: [{ a: "brunosso walk with star friend behind.png", x: 50, y: 48, s: 0.58, e: "fadeUp", i: "breathe" }] } },
  { start: 2244.605, dur: 60.251, scene: { bg: W, ch: [{ a: "brunosso_joyfully_jumping.png", x: 50, y: 45, s: 0.58, e: "fadeUp", i: "bob" }] } },
];

export const TOTAL_DURATION = 2304.856;
