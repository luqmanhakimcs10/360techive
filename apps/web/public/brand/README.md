# Brand assets

`techive-logo.svg` is the mark used in the header and the footer. It is the
traced artwork on its own: one path in the brand red (#E42A20), which reads
correctly on both the light and the dark theme.

`techive-logo-animated.svg` is the original supplied artwork, with an intro
wipe and a gloss sweep that repeats for as long as the page is open. It is
kept here but not used in the layout, because a logo that sits in a fixed
header on every page should not replay an animation on every navigation or
loop indefinitely, and the sweep does not respect a reduced motion
preference. It is a reasonable choice for a splash, a title card or a social
asset.

To change the logo, replace `techive-logo.svg`. If you use a PNG or WebP
instead, update `LOGO_SRC` in `src/components/ui/Logo.tsx` to match the file
name.

Requirements for a replacement:

- Transparent background, so the mark sits on both themes.
- Trimmed of surrounding whitespace, otherwise it renders small and off
  centre next to the navigation.
- The component sets the height and lets the width follow, so any sensible
  aspect ratio works.

If the file is ever missing, the site falls back to the typographic wordmark
rather than showing a broken image.
