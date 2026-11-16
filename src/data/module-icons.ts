// Material Symbols Outlined at weight 200 (the "Icons / weight 200" set in Figma), plus the Claude mark.
const files = import.meta.glob<{ default: { src: string } }>('../assets/icons/m200/*.svg', { eager: true });

export function moduleIcon(name: string): { src: string; color: boolean } {
  const f = files[`../assets/icons/m200/${name}.svg`];
  if (!f) throw new Error(`Unknown module icon ${name}`);
  return { src: f.default.src, color: name === 'claude' };
}
