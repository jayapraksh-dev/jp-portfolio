---

name: tailwind-ui
description: Implements and preserves this portfolio's UI using Tailwind CSS while maintaining the existing visual system, responsive behavior, animations, and styling conventions.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tailwind UI Guardian

## Purpose

This portfolio already uses Tailwind CSS extensively.

The React version should continue using Tailwind CSS rather than replacing the existing styling system.

The original Tailwind classes should be reused whenever practical.

## Styling Priority

When implementing a component:

1. Reuse existing Tailwind classes from the reference HTML.
2. Adapt only the syntax required for JSX.
3. Add new Tailwind utilities only when necessary.
4. Use custom CSS only when Tailwind is insufficient.
5. Do not introduce another CSS framework.

## Existing Design Tokens

Preserve the existing visual language:

### Background

Primary dark background:

`#0A0C10`

Dark card:

`#12161F`

Dark border:

`#1E2638`

Dark hover:

`#182030`

### Accent

Primary accent:

`#3B82F6`

Accent light:

`#60A5FA`

Accent glow:

`rgba(59, 130, 246, 0.15)`

Do not replace these colors without explicit user approval.

## Typography

The existing design uses:

* Inter for general text
* Space Grotesk for headings

Preserve the distinction between body text and headings.

## Responsive Design

The existing design uses responsive Tailwind breakpoints.

Preserve the existing responsive intent.

Always verify:

* Mobile
* Tablet
* Desktop

Do not assume a desktop layout automatically works on mobile.

## Existing UI Patterns

Preserve:

* Rounded cards
* Rounded buttons
* Subtle borders
* Glass-style backgrounds
* Backdrop blur
* Blue accent states
* Hover elevation
* Gradient text
* Ambient background glow
* Grid background
* Animated marquee
* Floating cards

## Animation

The existing portfolio uses custom animations including:

* Marquee
* Float
* Pulse glow
* Hover transitions
* Cursor movement

Do not remove these during migration.

Do not add additional animation libraries unless explicitly requested.

## Custom CSS

Custom CSS is acceptable when required for:

* Complex keyframes
* Custom scrollbar
* Grid background
* Cursor behavior
* Browser-specific behavior

Keep custom CSS small and purposeful.

Do not move every Tailwind utility into CSS classes.

## Class Name Discipline

Prefer readable Tailwind classes.

Do not create huge custom class systems that duplicate Tailwind.

Do not use arbitrary values when an existing Tailwind utility reasonably solves the problem.

However, preserve existing arbitrary values from the reference when they are part of the design.

For example, existing values such as:

```text
w-[500px]
blur-[120px]
```

should not be changed simply for stylistic preference.

## Dark and Light Themes

The reference portfolio supports dark and light themes using classes on the root HTML element.

Preserve the same user-facing behavior during the React migration.

Do not replace the theme system with a different architecture unless requested.

## Icons

Use `lucide-react` for React icons.

Do not use the original Lucide CDN script in the React application.

The visual icon should remain equivalent to the original wherever possible.

## Styling Changes

Do not redesign a component merely because another Tailwind approach is cleaner.

Visual consistency with the reference is more important than stylistic preference.

## Acceptance Criteria

A Tailwind implementation is successful when:

* It visually matches the reference.
* It is responsive.
* Existing interactions have the correct visual states.
* Dark/light themes work.
* Animations remain functional.
* No unnecessary CSS framework is introduced.
* Existing design tokens remain consistent.
