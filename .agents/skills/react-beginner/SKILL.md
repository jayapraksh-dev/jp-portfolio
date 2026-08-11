---

name: react-beginner
description: Builds and explains React code using simple beginner-friendly patterns for this portfolio. Use when creating React components, state, props, events, lists, forms, hooks, or refactoring portfolio code.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# React Beginner Mentor

## Purpose

The user is learning React while building this portfolio.

The code must therefore be:

* Simple
* Readable
* Predictable
* Beginner-friendly
* Easy to modify
* Easy to explain

Do not optimize for maximum abstraction or minimum line count.

Optimize for understanding.

## Technology Rules

Use:

* React
* JavaScript
* JSX
* Vite

Do not introduce TypeScript unless the user explicitly requests it.

Do not introduce a state-management library unless the user explicitly requests it.

Prefer React's built-in capabilities.

## Component Philosophy

Create components based on meaningful UI sections.

Good examples:

* Navbar
* Hero
* SkillsMarquee
* About
* WhatIDo
* TechStack
* Projects
* ProjectCard
* Contact
* ContactForm
* Footer

Avoid creating tiny components that make the project harder for a beginner to understand.

For example, do not create separate components for every `<span>` or `<div>` unless there is a real reason.

## Props

Use props when a component needs reusable data.

Example:

```jsx
<ProjectCard project={project} />
```

Prefer clear prop names.

Avoid passing large numbers of unrelated props when a single object is easier to understand.

## Repeated UI

When the interface contains repeated items, prefer data arrays and `.map()`.

Example:

```jsx
const skills = [
  "React",
  "JavaScript",
  "Node.js",
];
```

Then render the items using `.map()`.

Use this approach for:

* Skills
* Services
* Projects
* Technologies
* Navigation items
* Similar repeated UI

Do not prematurely create complex abstractions.

## State

Use `useState` for local interactive behavior.

Examples include:

* Mobile menu open/closed
* Theme state
* Project filter
* Form state
* UI toggles

Prefer local state when global state is unnecessary.

Do not introduce Redux, Zustand, or another state-management library for simple local interactions.

## Effects

Use `useEffect` only when the behavior genuinely requires synchronization with something outside normal rendering.

Examples:

* Browser events
* Mouse movement
* Local storage
* External APIs

Do not use `useEffect` merely because it is available.

## Events

Use React event handlers instead of manually attaching DOM event listeners when the behavior belongs to a React component.

Prefer:

```jsx
onClick={handleClick}
```

instead of:

```js
document.getElementById(...)
```

Avoid direct DOM manipulation unless there is a specific technical reason.

## Data vs UI

Keep repeated portfolio data separate from the JSX when practical.

For example:

```text
src/
├── data/
│   └── projects.js
└── components/
    └── Projects.jsx
```

The data file should contain project information.

The component should primarily handle rendering and interaction.

## Learning Requirement

After completing a meaningful React task, explain briefly:

1. What changed
2. Which React concepts were used
3. Why those concepts were used
4. Which files changed
5. What the user should understand before moving on

Do not explain every line unless the user asks.

## Beginner Safety

Do not hide complexity behind unnecessary custom hooks, utility functions, context providers, or abstractions.

If a simpler implementation is appropriate, use the simpler implementation.

If there are two reasonable approaches, prefer the one that is easier for a beginner to understand.

## Dependency Rule

Before adding a new npm package:

1. Determine whether React, browser APIs, or existing dependencies can solve the problem.
2. If a new package is genuinely useful, explain why.
3. Do not install the package silently.
4. Avoid dependency growth.

The current preferred stack is intentionally small:

* React
* Vite
* Tailwind CSS
* Lucide React

Additional libraries should be introduced only when they solve a real problem.

## Refactoring Rule

Do not refactor unrelated code while implementing a requested feature.

Keep changes focused.

A successful task should be easy to review and easy to undo.

## Learning Goal

The user should gradually learn:

1. JSX
2. Components
3. Props
4. State
5. Events
6. Lists and `.map()`
7. Filtering
8. Forms
9. Effects
10. API calls
11. Component composition

Use this portfolio as the practical teaching environment.
