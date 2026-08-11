---

name: portfolio-design
description: Preserves and migrates the existing portfolio design from the reference HTML into React without unauthorized visual redesign. Use when creating, modifying, refactoring, or reviewing any portfolio UI component.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Portfolio Design Guardian

## Purpose

This project is a migration and evolution of an existing HTML portfolio.

The existing reference HTML is the visual source of truth.

The goal is to move the existing portfolio into React while preserving its existing visual identity and behavior. Improvements may be made later, but only when the user explicitly requests them.

## Source of Truth

The original portfolio is located at:

`reference/portfolio.html`

Always inspect the relevant section of the reference HTML before modifying its React equivalent.

Never modify the reference HTML unless the user explicitly asks for changes to the reference file.

## Core Design Rule

Do not redesign existing components during migration.

Preserve the existing:

* Layout
* Section order
* Component structure
* Typography
* Font hierarchy
* Colors
* Spacing
* Borders
* Border radius
* Shadows
* Responsive behavior
* Hover states
* Focus states
* Animations
* Interactive behavior
* Content
* Visual hierarchy

The React implementation should look as close as reasonably possible to the reference HTML.

## Existing Visual System

The reference portfolio uses:

* Dark-first visual design
* Dark background
* Blue accent color
* Inter for body text
* Space Grotesk for headings
* Tailwind CSS utility classes
* Glassmorphism-style cards
* Subtle borders
* Blue ambient glows
* Grid-pattern background
* Rounded cards and buttons
* Responsive layouts
* Dark/light theme support

Preserve these characteristics during migration.

## Existing Major Sections

The current portfolio contains:

1. Navigation
2. Hero
3. Skills marquee
4. About
5. What I Do
6. Tech Stack
7. Projects
8. Project filtering
9. Contact
10. Footer

Do not remove, merge, or substantially redesign these sections unless the user explicitly requests it.

## Component Migration

When converting an HTML section into React:

1. Find the corresponding section in `reference/portfolio.html`.
2. Understand its complete markup and styling.
3. Preserve the existing Tailwind classes whenever practical.
4. Convert HTML syntax to JSX.
5. Convert JavaScript behavior into React state/events where appropriate.
6. Verify that the rendered result visually matches the reference.
7. Avoid unrelated changes.

## Visual Comparison

When implementing or modifying a component, compare:

* Desktop appearance
* Tablet appearance
* Mobile appearance
* Spacing
* Alignment
* Typography
* Colors
* Borders
* Hover states
* Animation behavior

If the new React implementation looks significantly different from the reference, treat that as a bug unless the user requested a redesign.

## Unauthorized Changes

Do NOT:

* Replace the design with a different design
* Change the color palette
* Replace the typography system
* Remove sections
* Add large visual effects
* Add unnecessary animations
* Replace Tailwind with another CSS framework
* Introduce a UI component library without permission
* Rewrite working styling unnecessarily
* Change copy/content without permission
* Change responsive breakpoints without a reason
* Remove existing interactions

## Improvements

If you notice a possible improvement, do not silently implement it.

Instead:

1. Finish the requested task.
2. Mention the improvement separately.
3. Explain why it may be useful.
4. Ask for permission before making a substantial visual change.

## React Migration Principle

The first goal is:

"Same portfolio, new architecture."

The second goal is:

"Better portfolio, improved intentionally."

Do not confuse these two stages.

## Acceptance Criteria

A migrated component is acceptable when:

* It renders correctly in React.
* Its visual appearance closely matches the reference.
* Its responsive behavior is preserved.
* Its interactions still work.
* It does not break unrelated sections.
* It does not introduce unnecessary dependencies.
* The original HTML reference remains untouched.
