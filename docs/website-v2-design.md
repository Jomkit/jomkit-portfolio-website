# Portfolio Website V2 Design Doc

## Purpose

This document defines what "v2" should mean for the portfolio site and identifies the highest-value structural, content, and implementation changes needed to get there.

The intent is not a visual-only refresh. V2 should make the site feel more intentional, more credible as a professional portfolio, and easier for a first-time visitor to navigate.

## Current State Summary

The current site already has a solid foundation:

- Astro-based multi-page site with shared layout, header, footer, and theme handling
- Dedicated routes for home, work, blog, about, resources, services, and contact
- Blog index and post layout are the most structurally mature parts of the site
- Home page already contains the seeds of the right content pillars: intro, recent activity, work, services, and personal interests

The main weakness is not missing pages. It is weak information hierarchy.

Right now the site behaves like a mix of:

- portfolio
- personal website
- engineering journal
- early freelance/services site

Those modes are all individually valid, but they currently compete with each other instead of supporting one clear visitor journey.

## V2 Goals

V2 should optimize for these outcomes:

1. A visitor can understand who Jomkit is and what kind of work he does within a few seconds.
2. The site strongly directs users toward the highest-value pages: work, writing, and contact.
3. The portfolio feels curated rather than "all sections are equally important."
4. The supporting personal content adds personality without diluting the professional story.
5. The site has a more reusable structure for future growth, especially around projects, writing, and homepage sections.

## Non-Goals

These items are explicitly out of scope for the first V2 push unless they become necessary:

- CMS integration
- major framework changes
- backend features
- redesigning the blog content model from scratch
- introducing complex animation systems purely for style

## Core Product Decision

V2 should treat the site primarily as a professional portfolio with a personal voice.

That means:

- `Work` is proof
- `Blog` is depth
- `About` is context
- `Contact` is conversion
- `Home` is the guided entrypoint

Secondary content like hobbies, resources, and services should support that story rather than compete with it.

## Information Architecture Direction

### Recommended primary navigation

- Home
- Work
- Blog
- About
- Contact

### Recommended secondary or conditional navigation

- Resources
- Hobbies

### Route decisions

#### Home

Keep the route, but rewrite the page around a stronger funnel:

- concise hero
- featured work
- short credibility section
- latest writing or current focus
- explicit contact CTA

Home should stop trying to be a full-site dump of every topic.

#### Work

This should become the main portfolio proof page.

It should evolve from a simple experience list into a clearer project/case-study index with:

- project summary
- role
- impact
- technology
- link to live site or deeper detail when available

#### Blog

Keep this prominent. It already has the clearest structure and best content cadence.

V2 improvements here should focus on better integration with the rest of the site rather than a full rewrite.

#### About

Keep, but narrow the purpose:

- personal story
- engineering perspective
- tools and strengths
- selected personality details

The page should feel complementary to Work, not like a second homepage.

#### Contact

Keep the route, but make it more action-oriented:

- clearer invitation for collaboration
- cleaner CTA hierarchy
- stronger presentation of preferred contact paths

#### Services

Current state does not justify a primary standalone route. The page is thin and partially under construction.

V2 treats Services as unpublished work, not a live public destination.

That means:

- `Services` must not appear in primary navigation
- `Services` must not remain as a publicly reachable under-construction route
- if the content is not fully developed in this phase, the file should be removed from `src/pages` so Astro does not build it as a public URL
- any service positioning needed for V2 should be folded into Home and Contact as supporting copy, not as a standalone route

Only after the page has real audience, offer, process, examples, and CTA content should it return as a live route.

#### Resources

This page is useful but not core to the portfolio journey.

Recommendation:

- keep the route if desired
- demote it from primary nav
- possibly reframe it as a reading/toolbox page later

#### Hobbies

Hobbies remains a real page in V2, but it is not part of the primary professional navigation.

That means:

- the route may remain live
- it should be linked contextually from About
- it may also appear in the footer or another clearly secondary navigation surface
- it must not be promoted into the primary header navigation unless the overall site strategy changes

V2 should strengthen the page enough that it feels intentional as a secondary destination rather than an orphaned leftover route.

## Route Disposition For V2

V2 defines the following route states:

- `/` remains the primary entrypoint
- `/work` remains a primary navigation route and is the canonical portfolio proof page
- `/posts` remains a primary navigation route
- `/about` remains a primary navigation route
- `/contact` remains a primary navigation route
- `/resources` remains a live route but is removed from primary navigation and may only be linked from secondary surfaces such as the footer or contextual in-page links
- `/about/hobbies` remains a live secondary route and should be discoverable from About and optionally the footer, but not from the primary header navigation
- `/services` is unpublished in V2; if it is not fully rewritten in this phase, it must be removed from `src/pages` so it is not shipped as a live route

## Proposed Visitor Flow

### Primary flow

1. Land on Home
2. Understand role and strengths
3. Click into Work or Blog
4. Build confidence through proof
5. Move to Contact

### Secondary flow

1. Land on Blog post or About page
2. Discover professional context
3. Move to Work
4. Convert through Contact

## What Needs To Change

## Content changes

- Rewrite the homepage hero and supporting sections for clarity and prioritization
- Reduce duplication between Home, About, and Work
- Strengthen project descriptions around outcomes and responsibilities
- Tighten About so it adds narrative context instead of repeating the site overview
- Remove standalone Services from the V2 visitor flow unless it is fully ready to ship
- Turn Contact into a stronger conversion page

## Structural changes

- Simplify top-level navigation
- Reorder homepage sections around a funnel instead of equal-weight blocks
- Demote thin pages without orphaning intentional secondary destinations
- Introduce clearer section patterns for featured work, writing, and CTA content
- Make project presentation more reusable so future additions do not require ad hoc page markup

## Content ownership rules

To prevent duplication drift, V2 uses these content ownership rules:

- `/work` is the canonical source for project summaries, role descriptions, impact statements, and project metadata
- the homepage may display only abbreviated featured-project excerpts derived from the same shared project content source used by `/work`
- `/about` owns personal narrative, tools, strengths, goals, and contextual links to secondary personal pages such as Hobbies
- `/contact` owns collaboration framing and call-to-action language
- if service positioning appears on Home or Contact, it must be short supporting copy and must not behave like a separate undeclared services product surface
- if project cards are reused across pages, the underlying project metadata must live in one shared data source such as `src/lib/projects.ts` or `src/data/projects.ts`

## Design system changes

- Increase visual hierarchy between hero, supporting sections, and footer content
- Move away from every section sharing nearly identical spacing and weight
- Standardize page intro patterns
- Define consistent card, CTA, and content-container patterns
- Improve the relationship between typography, content density, and page purpose

## Likely Files To Touch

### Existing files likely to change

- `src/layouts/Header.astro`
- `src/layouts/Footer.astro`
- `src/layouts/Layout.astro`
- `src/index.css`
- `src/pages/index.astro`
- `src/pages/work/index.astro`
- `src/pages/about/index.astro`
- `src/pages/contact/index.astro`
- `src/pages/resources/index.astro`
- `src/pages/about/hobbies.astro`
- `src/pages/posts/index.astro`
- `src/layouts/BlogPostLayout.astro`
- `src/components/ProjectOverlay.jsx`

### Existing files likely to remove from public routing

- `src/pages/services/index.astro` if Services remains unpublished during V2

### New files or abstractions likely worth adding

- `src/components/Hero.astro`
- `src/components/SectionIntro.astro`
- `src/components/FeaturedProjectCard.astro`
- `src/components/CallToAction.astro`
- `src/lib/site.ts` or `src/lib/navigation.ts` for shared nav and route metadata
- `src/lib/projects.ts` or `src/data/projects.ts` as the shared project content source for Home and Work

These additions are not mandatory, but V2 should prefer shared project data before introducing broader shared presentation abstractions.

## Recommended V2 Page Model

### Home

Recommended section order:

1. Hero
2. Featured work
3. What I do / strengths
4. Latest writing or current focus
5. About preview
6. Contact CTA

The homepage must not include a standalone Hobbies section or a standalone Services section in V2 unless either section directly supports the primary conversion funnel and is represented elsewhere by an intentional live destination.

### Work

Recommended section order:

1. Page intro
2. Featured professional work
3. Selected personal projects
4. Optional "how I work" block
5. CTA to contact

`/work` is the canonical project page. Shared project data should be authored once and consumed here first, with Home reusing a featured subset.

### About

Recommended section order:

1. Intro
2. Story
3. Tools and strengths
4. Personal interests
5. Goals or current focus

About should preview Hobbies and link to `/about/hobbies`, but should not absorb the entire destination if Hobbies remains intentionally live.

### Contact

Recommended section order:

1. Invitation
2. Collaboration framing
3. Contact methods
4. Optional links to LinkedIn and GitHub

## Technical Notes

### Recommended seam: navigation

`src/layouts/Header.astro` is the smallest high-leverage place to improve the perceived structure of the whole site.

Changing the top-level navigation will force a clear decision about:

- what belongs in the primary flow
- what becomes secondary
- which pages should be strengthened versus demoted

### Recommended seam: homepage composition

`src/pages/index.astro` is the most important single file for V2 because it currently carries too many competing intents.

The homepage should become a deliberate funnel instead of an even spread of topics.

### Recommended seam: reusable section primitives

`src/index.css` currently gives all `section` elements very similar layout treatment. That makes implementation simple, but it flattens hierarchy.

V2 should preserve the current simplicity where possible while introducing a few stronger shared patterns:

- page intro section
- content section
- feature section
- CTA section

## Refactor Guardrails

This phase is not a full component-system rewrite.

V2 may introduce shared components only when a pattern is used in at least two page surfaces or when extraction clearly reduces duplication without widening scope.

V2 should prefer:

- shared content data before shared presentation abstractions
- local page composition where the layout meaningfully differs between Home and Work
- small focused shared primitives over a large generic section system

V2 must not:

- rewrite every page around new abstractions in one pass
- replace working page-local markup solely for stylistic consistency
- perform unrelated visual cleanup that does not support hierarchy, navigation clarity, content ownership, or conversion flow

## Risks

### Risk: over-expanding scope

If V2 becomes a full design-system refactor, it will take longer than necessary and blur the actual goal.

Mitigation:

- keep the first pass focused on IA, homepage, work, about, contact, and nav

### Risk: preserving too many weak pages

If every existing route stays first-class, the site will keep feeling scattered.

Mitigation:

- decide which pages are primary, secondary, merged, or deferred

### Risk: polishing visuals before clarifying messaging

A nicer visual system will not fix weak flow on its own.

Mitigation:

- sequence content and architecture decisions before detailed styling polish

## Definition Of V2 Done

The site can be considered at V2 when:

- the primary navigation reflects the actual priority pages
- the homepage has a clear professional funnel
- the work page presents convincing proof of experience
- about and contact pages feel purposeful rather than filler
- Services is unpublished unless it has been fully rewritten as a real live page
- Hobbies is a deliberate live secondary destination rather than an orphaned leftover page
- Resources and Hobbies are not shown in the primary navigation
- Home and Work share project content from one canonical project data source
- shared section patterns reduce visual sameness
- the overall site feels coherent as one product

## High-Level Milestone Checklist

- [x] Finalize V2 information architecture and page priorities
- [x] Simplify header navigation and lock the final route disposition for Services, Resources, and Hobbies
- [x] Rewrite homepage content and section order around a clear visitor funnel
- [x] Rebuild Work into a stronger portfolio or case-study page
- [x] Tighten About and Contact so they support conversion
- [x] Move project metadata into one shared content source consumed by Home and Work
- [ ] Update written content across Home, Work, About, Contact, Resources, and Hobbies so the copy matches the new V2 structure and tone
- [x] Unpublish Services unless it is fully ready as a live route
- [x] Strengthen Hobbies and Resources as intentional secondary destinations
- [x] Introduce only the minimum reusable section and card patterns needed for cleaner page composition
- [x] Refresh typography, spacing, and hierarchy to better distinguish page intent
- [ ] Optimize page structure, metadata, and internal linking for SEO
- [ ] Run a dedicated accessibility pass across navigation, content, contrast, semantics, and keyboard behavior
- [ ] Run final responsiveness, SEO, accessibility, and content QA pass

## Acceptance Criteria

V2 is complete only when all of the following are true:

- primary navigation includes only `Home`, `Work`, `Blog`, `About`, and `Contact`
- every primary navigation route has a deliberate page intro and a clear next action
- `/services` is not publicly shipped unless it has been fully rewritten beyond its current under-construction state
- `/about/hobbies` remains live only as a clearly secondary route and is still discoverable from About
- `/resources` remains live only as a clearly secondary route and is not shown in the primary header navigation
- the homepage no longer contains full standalone Hobbies or Services sections that compete with the professional funnel
- project summaries shown on the homepage are derived from the same canonical project data source as `/work`
- the written content on Home, Work, About, Contact, Resources, and Hobbies has been reviewed and updated so it matches the final V2 hierarchy, tone, and page purpose
- page titles, descriptions, heading structure, and internal linking have been reviewed and updated to support V2 SEO goals
- the live V2 pages meet the intended accessibility bar for semantic structure, keyboard access, color contrast, and non-visual clarity
- mobile navigation, desktop navigation, and theme toggle behavior continue to function after navigation changes
- the site contains no broken internal links after route and content consolidation

## Verification

- manually verify desktop and mobile header navigation on all primary routes
- manually verify footer or contextual discovery paths for Hobbies and Resources if they remain live
- manually verify that `/services` is either unpublished or fully rewritten before release
- verify that Home, Work, About, and Contact do not repeat long-form content that belongs to another page
- verify that shared project data powers both Home and Work without forcing identical page layouts
- review the final copy on Home, Work, About, Contact, Resources, and Hobbies to confirm the content matches the intended V2 positioning and does not preserve stale pre-V2 messaging
- review page titles, descriptions, heading hierarchy, and internal links across all live V2 pages for SEO consistency
- verify keyboard navigation, focus states, semantic heading order, link clarity, and color contrast across all live V2 pages
- run the production build and resolve any route, asset, or layout regressions before considering V2 complete

## Suggested Implementation Order

1. Lock the IA decisions.
2. Update nav and route priorities.
3. Establish the shared project content source.
4. Rebuild Home.
5. Strengthen Work.
6. Tighten About and Contact.
7. Resolve Services, Resources, and Hobbies.
8. Update written content across all live V2 pages.
9. Apply shared design and content pattern cleanup.
10. Optimize SEO and accessibility across all live V2 pages.
11. Finish with QA and content polish.
