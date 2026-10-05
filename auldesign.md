---
version: alpha
name: Indrazm Dark Minimal
description: A restrained, editorial dark system with mono utility text and bright neutral accents.
colors:
  primary: "#F2F4ED"
  primary-weak: "#B6B9B0"
  secondary: "#333238"
  tertiary: "#141416"
  neutral: "#0A0A0A"
  surface: "#141416"
  surface-elevated: "#1B1B1F"
  on-surface: "#F2F4ED"
  on-surface-muted: "#B6B9B0"
  border: "#333238"
  error: "#D46A6A"
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 400
    lineHeight: 76.32px
    letterSpacing: -4.68px
  headline-lg:
    fontFamily: Inter
    fontSize: 49px
    fontWeight: 400
    lineHeight: 59px
    letterSpacing: -0.805px
  headline-md:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: 400
    lineHeight: 41px
    letterSpacing: -0.325px
  headline-sm:
    fontFamily: Inter
    fontSize: 23px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.8px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0.6px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0.4px
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 100px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "43px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "43px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "43px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.lg}"
    padding: "14px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  chip:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Indrazm Dark Minimal

## Overview
This system feels quiet, precise, and deeply modern, with a strong editorial sensibility rather than a “UI-heavy” product aesthetic. It is built for a personal portfolio or studio-style presence where the work and writing need to feel intelligent, technical, and understated. The dark canvas, sparse spacing, and crisp typography create a spacious, focused tone that is professional with a subtle futuristic edge.

## Colors
- **Primary (#F2F4ED):** A soft near-white used for the most important text, key buttons, and high-contrast highlights. It reads brighter than pure white without feeling stark.
- **Primary-weak (#B6B9B0):** A muted sage-gray used for body copy, metadata, and secondary interface text. It keeps hierarchy calm and readable on the dark background.
- **Secondary (#333238):** A low-contrast border and divider tone that supports structure without drawing attention away from content.
- **Tertiary (#141416):** A near-black surface tone used for cards and inset panels, separating elevated content from the page background.
- **Neutral (#0A0A0A):** The base background color, creating the deep black stage that defines the entire visual identity.
- **Surface (#141416):** The main elevated surface color for panels and cards, barely lighter than the page background for subtle depth.
- **On-surface (#F2F4ED):** The primary readable color on dark surfaces, used for headings, buttons, and accent text.
- **On-surface-muted (#B6B9B0):** The secondary readable color for descriptions, labels, and supporting content.
- **Border (#333238):** A restrained border tone that appears in cards, separators, and subtle framing.
- **Error (#D46A6A):** A reserved warm red for destructive states or validation, though the UI otherwise avoids strong semantic color use.

## Typography
Inter is the dominant display and interface family, giving the system a clean, geometric, contemporary voice. Headlines use light-to-regular weights with tight negative tracking, especially at the largest sizes, which makes the hero feel elegant and editorial rather than loud. JetBrains Mono provides the informational and descriptive layer; its monospaced rhythm, slight letter-spacing, and compact line-height reinforce the technical, builder-focused personality.

Headlines scale from a large display style down to smaller section headings, all staying weight 400 to preserve the refined tone. Body text is intentionally more utilitarian and compact, helping supporting copy feel precise and code-adjacent. Labels and navigation remain plain, with occasional uppercase treatment for small metadata like section tags, which adds structure without visual noise.

## Layout
The composition uses a wide, spacious desktop layout with a centered content column and generous outer breathing room. A large hero region anchors the page, with text on the left and a visual object on the right, followed by clearly separated content blocks and thin horizontal dividers. The spacing rhythm is built on an 8/16/24/48/100px scale, with bigger gaps used between major page sections and tighter spacing inside cards and lists.

Containers feel fixed-max-width rather than fluidly dense, and the layout relies on alignment and whitespace more than grid ornamentation. Cards use modest internal padding, while the main page keeps generous margins so individual elements can breathe within the dark field. Section transitions are subtle and linear, favoring clarity over dramatic transitions.

## Elevation & Depth
The system is mostly flat, using tonal contrast, borders, and subtle surface shifts instead of heavy shadows. Cards gain depth through a slightly lighter surface color, a one-pixel border, and a soft shadow only where needed. The overall effect is quiet and restrained, with depth used sparingly so content remains the hero.

Visual hierarchy comes primarily from color contrast and typography size rather than stacked elevation. Dividers are thin and low-contrast, creating structure without fragmentation. Even elevated panels stay close to the background palette, which keeps the interface cohesive and calm.

## Shapes
The shape language is soft but disciplined. Interactive controls use a small 4px radius, while cards expand to a 16px radius to feel slightly more contained and tactile. Pills and status chips are fully rounded, reinforcing the lightweight, modern utility feel.

Overall, the geometry is more architectural than playful. Corners are present but not exaggerated, and large circular forms are reserved for badge-like or status elements rather than general surfaces.

## Components
**Buttons:** Primary buttons use the bright primary surface with dark text and compact padding, matching `button-primary`. They feel understated rather than flamboyant, with no heavy shadow and a slightly editorial underline treatment in the source. Secondary buttons use transparent backgrounds and muted text, as defined in `button-secondary`, to stay visually quiet. Link-style actions use `button-link` and should appear inline, borderless, and minimally padded.

**Cards:** Cards should use `card` with a dark elevated surface, a subtle border, and 16px rounding. Padding is modest to keep cards compact and information-dense. Use cards for feature callouts, project previews, and content modules that need separation without strong emphasis.

**Inputs:** Inputs should mirror the card surface language, with dark backgrounds, soft borders, and 4px rounding. Keep text bright and labels muted, and avoid adding decorative shadows. Focus states should rely on contrast or border shifts rather than glow.

**Chips and status pills:** Use `chip` for compact labels such as statuses or tags. Full rounding and small padding make them feel lightweight and refined. Keep chip colors muted and avoid high-saturation fills.

**Lists and rows:** Project lists and metadata rows should be simple, with thin separators and left-aligned text. Use muted body styles for descriptions and reserve bright text for names or links. Row actions can use compact arrow icons aligned to the far right.

**Navigation:** Top navigation should stay minimal, text-only, and low-contrast until hover or active states. Keep spacing between nav items generous enough to feel calm, not clustered.

## Do's and Don'ts
- Do keep the background nearly pure black and let typography create most of the hierarchy.
- Do use Inter for headlines and interface labels, and JetBrains Mono for descriptive or technical copy.
- Do preserve the low-contrast divider and border approach; rely on subtle separation instead of obvious panels.
- Do keep buttons compact and restrained, with small radii and minimal visual weight.
- Don't introduce bright accent colors or colorful gradients that compete with the monochrome system.
- Don't overuse shadows; depth should be felt through tonal layering, not dramatic elevation.
- Don't make cards overly rounded or playful; the visual language should stay precise and editorial.
- Don't crowd the layout with dense columns or excessive UI chrome.
