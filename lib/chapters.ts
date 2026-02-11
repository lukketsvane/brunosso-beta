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
  file: string;
  scene: Scene;
}

const W: [string, string] = ["#FFFFFF", "#FFFFFF"];

export const CHAPTERS: Chapter[] = [
  { start: 0, dur: 162, file: "01 - Stillheten i Ostedisken.m4a", scene: { bg: W, ch: [{ a: "brunosso_full_stop.png", x: 50, y: 50, s: 0.55, e: "fadeUp", i: "breathe" }] } },
  { start: 162, dur: 94, file: "02 - Alle har hørt om BETA.m4a", scene: { bg: W, ch: [{ a: "brunosso_ghasping.png", x: 28, y: 55, s: 0.45, e: "slideL", i: "bob" }, { a: "cor_character_2.png", x: 72, y: 50, s: 0.45, e: "slideR", i: "sway" }] } },
  { start: 256, dur: 123, file: "03 - Serious Business.m4a", scene: { bg: W, ch: [{ a: "brunosso_pointing.png", x: 25, y: 55, s: 0.40, e: "slideL", i: "bob" }, { a: "milkman_character.png", x: 72, y: 46, s: 0.52, e: "slideR", i: "breathe" }] } },
  { start: 379, dur: 160, file: "04 - Smør deg utover.m4a", scene: { bg: W, ch: [{ a: "brunosso_mad.png", x: 50, y: 48, s: 0.60, e: "shake", i: "shake" }] } },
  { start: 539, dur: 97, file: "05 - For sent.m4a", scene: { bg: W, ch: [{ a: "brunosso_pointing.png", x: 28, y: 55, s: 0.38, e: "slideL", i: "bob" }, { a: "ramen_bowl_character.png", x: 72, y: 48, s: 0.45, e: "slideR", i: "sway" }] } },
  { start: 636, dur: 106, file: "06 - Flatbrødet fant meg.m4a", scene: { bg: W, ch: [{ a: "brunosso_walking.png", x: 25, y: 46, s: 0.42, e: "slideL", i: "bob" }, { a: "huvuru_questioning.png", x: 68, y: 42, s: 0.52, e: "slideR", i: "breathe" }] } },
  { start: 742, dur: 123, file: "07 - Bred er et stygt ord.m4a", scene: { bg: W, ch: [{ a: "brunosso_shockingly_tall.png", x: 55, y: 38, s: 0.70, e: "fadeUp", i: "breathe" }, { a: "brunosso_walking_2.png", x: 18, y: 65, s: 0.25, e: "slideL", i: "bob" }] } },
  { start: 865, dur: 137, file: "08 - Sirkelen.m4a", scene: { bg: W, ch: [{ a: "marshmallow_lady_character.png", x: 42, y: 45, s: 0.50, e: "fadeUp", i: "breathe" }, { a: "cor_character_2.png", x: 80, y: 55, s: 0.30, e: "slideR", i: "sway" }] } },
  { start: 1002, dur: 129, file: "09 - Bababu Beta.m4a", scene: { bg: W, ch: [{ a: "brunosso_sitting_in_bed.png", x: 42, y: 50, s: 0.48, e: "fadeUp", i: "bob" }, { a: "brunosso_ghasping.png", x: 82, y: 55, s: 0.30, e: "slideR", i: "shake" }] } },
  { start: 1131, dur: 124, file: "10 - Fløtemysost sier ingenting.m4a", scene: { bg: W, ch: [{ a: "brunosso_looking_up.png", x: 32, y: 46, s: 0.48, e: "slideL", i: "breathe" }, { a: "cod_character.png", x: 75, y: 50, s: 0.42, e: "slideR", i: "sway" }] } },
  { start: 1255, dur: 125, file: "11 - Brødbaserte Trusler.m4a", scene: { bg: W, ch: [{ a: "cow_holwing_papers.png", x: 55, y: 44, s: 0.52, e: "fadeUp", i: "breathe" }, { a: "brunosso_pointing.png", x: 20, y: 58, s: 0.32, e: "slideL", i: "bob" }] } },
  { start: 1380, dur: 102, file: "12 - To ingredienser unna.m4a", scene: { bg: W, ch: [{ a: "marshmallow_lady_character.png", x: 30, y: 46, s: 0.45, e: "slideL", i: "breathe" }, { a: "brunosso_walking.png", x: 72, y: 48, s: 0.42, e: "slideR", i: "bob" }] } },
  { start: 1482, dur: 92, file: "13 - En kort redegjørelse.m4a", scene: { bg: W, ch: [{ a: "directional_sign.png", x: 50, y: 48, s: 0.50, e: "fadeUp", i: "breathe" }] } },
  { start: 1574, dur: 109, file: "14 - Hva om BETA er en person.m4a", scene: { bg: W, ch: [{ a: "sheep_headbutting_ball.png", x: 55, y: 45, s: 0.48, e: "fadeUp", i: "bob" }, { a: "brunosso_ghasping.png", x: 18, y: 58, s: 0.30, e: "slideL", i: "shake" }] } },
  { start: 1683, dur: 135, file: "15 - Hyller kan inneholde hemmeligheter.m4a", scene: { bg: W, ch: [{ a: "huvuru_questioning.png", x: 50, y: 42, s: 0.55, e: "fadeUp", i: "bob" }] } },
  { start: 1818, dur: 139, file: "16 - Banan på brunost.m4a", scene: { bg: W, ch: [{ a: "brunosso_mad.png", x: 32, y: 48, s: 0.48, e: "slideL", i: "shake" }, { a: "background_character_01_symbals.png", x: 78, y: 42, s: 0.38, e: "slideR", i: "sway" }] } },
  { start: 1957, dur: 90, file: "17 - Smøragis tilståelse.m4a", scene: { bg: W, ch: [{ a: "brunosso_ghasping.png", x: 25, y: 52, s: 0.42, e: "slideL", i: "shake" }, { a: "cow_character.png", x: 70, y: 42, s: 0.50, e: "slideR", i: "breathe" }] } },
  { start: 2047, dur: 102, file: "18 - BETA er noe som skjer.m4a", scene: { bg: W, ch: [{ a: "cod_character.png", x: 52, y: 38, s: 0.65, e: "fadeUp", i: "breathe" }, { a: "brunosso_walking_2.png", x: 16, y: 65, s: 0.25, e: "slideL", i: "bob" }] } },
  { start: 2149, dur: 120, file: "19 - Redd for å bli spist.m4a", scene: { bg: W, ch: [{ a: "brunosso_running.png", x: 50, y: 48, s: 0.58, e: "shake", i: "shake" }] } },
  { start: 2269, dur: 130, file: "20 - Bestemors kjøkken.m4a", scene: { bg: W, ch: [{ a: "cod_character.png", x: 68, y: 45, s: 0.50, e: "slideR", i: "breathe" }, { a: "brunosso_looking_up.png", x: 28, y: 48, s: 0.45, e: "slideL", i: "bob" }] } },
  { start: 2399, dur: 134, file: "21 - Kryssfunksjonell ingrediensoptimalisering.m4a", scene: { bg: W, ch: [{ a: "cow_holwing_papers.png", x: 55, y: 42, s: 0.52, e: "fadeUp", i: "breathe" }, { a: "brunosso_from_behind.png", x: 18, y: 62, s: 0.30, e: "slideL", i: "bob" }] } },
  { start: 2533, dur: 107, file: "22 - Hjørnene henger.m4a", scene: { bg: W, ch: [{ a: "brunosso_from_behind.png", x: 38, y: 52, s: 0.48, e: "fadeUp", i: "breathe" }, { a: "marshmallow_lady_character.png", x: 75, y: 48, s: 0.38, e: "slideR", i: "bob" }] } },
  { start: 2640, dur: 157, file: "23 - BETA-møtet.m4a", scene: { bg: W, ch: [{ a: "directional_sign.png", x: 40, y: 46, s: 0.45, e: "fadeUp", i: "breathe" }, { a: "sheep_character_02.png", x: 78, y: 48, s: 0.35, e: "slideR", i: "bob" }] } },
  { start: 2797, dur: 124, file: "24 - Er du ond.m4a", scene: { bg: W, ch: [{ a: "cod_character.png", x: 70, y: 45, s: 0.50, e: "slideR", i: "breathe" }, { a: "brunosso_walking_2.png", x: 28, y: 55, s: 0.38, e: "slideL", i: "bob" }] } },
  { start: 2921, dur: 131, file: "25 - Invitasjonen.m4a", scene: { bg: W, ch: [{ a: "brunosso_walking_w_sanwitch_in_hand.png", x: 50, y: 50, s: 0.55, e: "fadeUp", i: "bob" }] } },
  { start: 3052, dur: 156, file: "26 - Bare en tirsdag.m4a", scene: { bg: W, ch: [{ a: "brunosso_joyfully_jumping.png", x: 50, y: 45, s: 0.58, e: "fadeUp", i: "bob" }] } },
];

export const TOTAL_DURATION = 3208.0;
