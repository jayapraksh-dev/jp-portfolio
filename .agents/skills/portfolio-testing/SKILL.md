---

name: portfolio-testing
description: Tests this React portfolio after implementation or modification, with emphasis on visual regression, responsive behavior, interactions, build health, and preserving the reference HTML behavior.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Portfolio Testing Guardian

## Purpose

This portfolio is being migrated from an existing working HTML implementation into React.

Every meaningful migration step must be verified.

Do not assume that code that compiles is code that works.

## Testing Philosophy

Use this sequence:

```text
Implement
    ↓
Build
    ↓
Run
    ↓
Browser verification
    ↓
Interaction testing
    ↓
Visual comparison
    ↓
Report
```

Do not continue to unrelated work if the current feature is broken.

## Before Testing

Confirm:

* Development server starts.
* No compilation errors exist.
* No obvious console errors exist.
* The affected route/page loads.

## Responsive Testing

Test important components at:

### Mobile

Approximately:

* 375px wide
* 390px wide

### Tablet

Approximately:

* 768px wide

### Desktop

Approximately:

* 1280px wide
* 1440px wide

Exact viewport sizes may vary depending on available browser tooling.

## Navbar Tests

Verify:

* Logo appears.
* Desktop navigation appears on desktop.
* Mobile navigation controls appear on mobile.
* Mobile menu opens.
* Mobile menu closes.
* Navigation links work.
* Theme toggle works.
* "Let's Talk" navigation works.

## Hero Tests

Verify:

* Badge appears.
* Heading renders correctly.
* Gradient text appears.
* CTA buttons work.
* Code card appears.
* Floating cards appear.
* Background glow appears.
* Layout remains correct on mobile.
* Text does not overflow.

## Skills Marquee Tests

Verify:

* Skills appear.
* Marquee animation runs.
* No unexpected horizontal page overflow occurs.
* Animation remains visually consistent.

## About Tests

Verify:

* Profile card appears.
* Text content is present.
* Statistics appear.
* Four service cards appear.
* Hover states work.
* Tech stack badges appear.
* Layout responds correctly.

## Projects Tests

Verify:

* Featured project appears.
* Project cards appear.
* All filter buttons appear.
* "All" displays all projects.
* "Web Apps" filters correctly.
* "Frontend" filters correctly.
* "Full Stack" filters correctly.
* "AI" filters correctly.
* Active filter styling changes correctly.
* Project links work when real URLs are provided.
* No project disappears incorrectly.

## Contact Tests

Verify:

* Contact information appears.
* Email link is valid.
* GitHub link is valid when configured.
* LinkedIn link is valid when configured.
* Form fields render.
* Required validation works.
* Submit behavior works as intended.
* Form reset behavior works if applicable.

Do not claim that email delivery works unless an actual email service/backend has been configured and tested.

## Theme Tests

Verify:

* Dark theme works.
* Light theme works.
* Text remains readable.
* Cards remain readable.
* Borders remain visible.
* Inputs remain readable.
* Theme state is consistent across the interface.

## Cursor Tests

The reference implementation contains a custom desktop cursor.

Verify:

* It appears only where intended.
* It follows pointer movement.
* It does not interfere with clicking.
* It does not appear incorrectly on mobile/touch devices.

If cursor behavior causes accessibility or usability problems, report the issue instead of silently removing it.

## Visual Regression

When possible, compare the React implementation against:

`reference/portfolio.html`

Check:

* Position
* Spacing
* Size
* Typography
* Colors
* Borders
* Shadows
* Responsive layout
* Animations

Do not treat visual differences as improvements unless the user requested them.

## Console and Build Health

Check for:

* React warnings
* Missing keys
* Failed imports
* Missing assets
* Invalid HTML/JSX
* Broken links where testable
* Runtime exceptions
* Tailwind configuration errors

## Testing After Each Migration Step

At minimum:

```text
Navbar
→ test

Hero
→ test

Skills
→ test

About
→ test

Projects
→ test

Contact
→ test

Footer
→ test

Full portfolio
→ test
```

## Failure Handling

If a test fails:

1. Identify the affected component.
2. Explain the failure.
3. Fix only the relevant issue.
4. Re-run the test.
5. Confirm the fix.
6. Only then continue.

Do not hide test failures.

Do not claim success without verification.

## Final Report

After testing, report:

### Passed

List verified functionality.

### Failed

List anything that still fails.

### Changed

List the files modified.

### Remaining

List anything that requires user input, real URLs, API credentials, backend services, or deployment configuration.

Keep the report concise and understandable to a beginner.
