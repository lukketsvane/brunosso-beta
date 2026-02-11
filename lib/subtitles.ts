export interface SubCue {
  c: number; // chapter index
  t: number; // start time (seconds)
  d: number; // duration (seconds)
  l: string[]; // lines
}

export const SUBS: SubCue[] = [
  { c: 0, t: 0, d: 10, l: ["1. Det var stille i Ostedisken."] },
  { c: 1, t: 162, d: 10, l: ["2. -Har du hørt om BETA?"] },
  { c: 2, t: 256, d: 10, l: ["3. Nigiru var den typen karakter som aldri forklarte hva den var..."] },
  { c: 3, t: 379, d: 10, l: ["4. NBIM-Oljefondet satt i den mørke enden av disken..."] },
  { c: 4, t: 539, d: 10, l: ["5. -Smøragi! -Hva? -SmøRAGI!"] },
  { c: 5, t: 636, d: 10, l: ["6. Huvuru hadde en spade i den ene hånda..."] },
  { c: 6, t: 742, d: 10, l: ["7. -Brunosso-Triceratops, har du sovet her hele natta?"] },
  { c: 7, t: 865, d: 10, l: ["8. Bby-Brunosso hadde akkurat våknet fra en lur..."] },
  { c: 8, t: 1002, d: 10, l: ["9. Det kom en lyd fra Fiskedisken."] },
  { c: 9, t: 1131, d: 10, l: ["10. Brunefine var den eneste av dem som noen gang sa noe vettugt."] },
  { c: 10, t: 1255, d: 10, l: ["11. -Nigiru, kan jeg spørre deg om noe?"] },
  { c: 11, t: 1380, d: 10, l: ["12. -Brunosso? -Ja? -Jeg må fortelle deg noe."] },
  { c: 12, t: 1482, d: 10, l: ["13. Klokka var noe som ingen visste..."] },
  { c: 13, t: 1574, d: 10, l: ["14. -Hva er den største trusselen mot Ostedisken i dag?"] },
  { c: 14, t: 1683, d: 10, l: ["15. -Nå skal dere høre!"] },
  { c: 15, t: 1818, d: 10, l: ["16. -Jeg må innrømme noe."] },
  { c: 16, t: 1957, d: 10, l: ["17. -Raksu, hva driver du med?"] },
  { c: 17, t: 2047, d: 10, l: ["18. Det var Nigiru som først merket det. Lukten."] },
  { c: 18, t: 2149, d: 10, l: ["19. -INGEN RØRER TALLERKENEN!"] },
  { c: 19, t: 2269, d: 10, l: ["20. NBIM-Oljefondet reiste seg."] },
  { c: 20, t: 2399, d: 10, l: ["21. -Brunosso? -Hva? -Er du sur?"] },
  { c: 21, t: 2533, d: 10, l: ["22. Noe skjedde med Bby-Brunosso."] },
  { c: 22, t: 2640, d: 10, l: ["23. -Brunosso. Det var Nigiru."] },
  { c: 23, t: 2797, d: 10, l: ["24. Det ble en lang kveld i Ostedisken."] },
  { c: 24, t: 2921, d: 10, l: ["25. Neste morgen var tallerkenen tom."] },
  { c: 25, t: 3052, d: 10, l: ["26. Det ble stille i Ostedisken. Slutt."] },
];
