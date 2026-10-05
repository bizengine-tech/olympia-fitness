// Curated, free-license Unsplash photos matching the "dark, industrial,
// gradient-lit gym" mood direction. These are hotlinked, not bundled, so
// swap the IDs below for real Olympia Fitness photography when it's ready —
// the rest of the site doesn't need to change.
export const PHOTOS = {
  heroFloor: "1534438327276-14e5300c3a48", // commercial gym floor, wide shot
  darkRed: "1637430308606-86576d8fef3c", // dark gym, red accent lighting
  cardioRow: "1771586791190-97ed536c54af", // treadmills & cardio machines
  barbell: "1620188467120-5042ed1eb5da", // barbell & weight plates close-up
  multiStation: "1646656130630-07af3a262a9b", // row of strength/multi-station equipment
  homeFitness: "1671970922029-0430d2ae122c", // gym interior, general equipment
};

export function unsplash(id, { w = 1200, h, q = 75 } = {}) {
  const base = `https://images.unsplash.com/photo-${id}`;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: String(q),
    w: String(w),
  });
  if (h) params.set("h", String(h));
  return `${base}?${params.toString()}`;
}
