# Design System

## Introduction
One of the main features of Vuesion are the components.

Unfortunately, components alone are not the solution
to a consistent UX. Therefore, we need to define some restrictions that will ensure consistency.

An additional benefit of these rules is a better way to communicate within the product team. Every Color has a name,
every text-style, every spacing. Everything has a purpose!

::: tip Better communication 
By sharing [storybook](https://vuesion.herokuapp.com/storybook/) or the [Figma file](https://www.figma.com/file/DvP4EE7gAJH3fsc4RFqZYc/Vuesion-Core?node-id=1686%3A4660),
you can enable everyone in your team to participate in product-related discussions.
:::


## Architecture

### Foundation
The foundation of the design system is the first abstraction layer,
and it is made up of the following parts
- Breakpoints, define the responsive behaviour of the design system
- Color Palette, every color that you want to use in the design system
- Spacings, define what spacings your want to use in the design system
- Typography, define size, weight, line-height and letter spacings of your typography

### Design System Tokens
The 2nd abstraction layer are the Design System tokens, they help to quickly re-define the design-system and is
the foundation to enable theming/white-labeling. The tokens fall into the following categories:

- Brand Variations, fallback color for common brand variations (primary, neutral, warning, danger, success)
- Background Colors
- Surface Colors, optimized to work on top of Background Colors
- Border Colors
- Text Colors
- Interaction Colors, for all Brand Variations
- Elevation, box-shadows used to elevate elements
- Accessibility, outline that is used to indicate focus of elements
- Border Radius

::: tip Typography Tokens
There are no tokens for common Text Styles, feel free to add them if one of your themes requires a different typography.
:::

### Component Specific Variables
These variables are located in `./src/assets/design-system/variables/components` and are the final abstraction layer.
Every Vue component should only reference variables from this abstraction layer. This ensures that your components
are always easy to change and can be themed.

### Relations between abstraction layers

```shell
                                        ┌───────────┐
                                  ┌─────┤Breakpoints├─────┐
                                  │     └───────────┘     │
                                  │     ┌─────────────┐   │
                                  │     │Color Palette├───┤
                                  │     └─────────────┘   │
                                  │     ┌────────┐        │
                                  ├─────┤Spacings├────────┤
                                  │     └────────┘        │
                                  │     ┌──────────┐      │
                                  ├─────┤Typography├──────┤
                                  │     └──────────┘      │
                                  │     ┌──────────┐      │
                                  │     │Foundation│◄─────┘
                                  │     └─────┬────┘
                                  │           ▼
 ┌───────────────┐                │     ┌────────────────────┐
 │   Component   │◄───────────────┴──── │Design System Tokens│    
 │   Specific    │                      └────────────────────┘
 │   Variables   │                      ▲
 └───────────────┘                      │    ┌────────────────┐
                                        ├────┤Brand Variations│
                                        │    └────────────────┘
                                        │    ┌─────────────────┐
                                        ├────┤Background Colors│
                                        │    └─────────────────┘
                                        │    ┌──────────────┐
                                        ├────┤Surface Colors│
                                        │    └──────────────┘
                                        │    ┌─────────────┐
                                        ├────┤Border Colors│
                                        │    └─────────────┘
                                        │    ┌───────────┐
                                        ├────┤Text Colors│
                                        │    └───────────┘
                                        │    ┌──────────────────┐
                                        ├────┤Interaction Colors│
                                        │    └──────────────────┘
                                        │    ┌─────────┐
                                        ├────┤Elevation│
                                        │    └─────────┘
                                        │    ┌─────────────┐
                                        ├────┤Accessibility│
                                        │    └─────────────┘
                                        │    ┌─────────┐
                                        ├────┤Animation│
                                        │    └─────────┘
                                        │    ┌─────────────┐
                                        └────┤Border Radius│
                                             └─────────────┘
```

### Folder Structure

```shell
design-system/
├── README.md
├── docs # Documentation and utilities for documentation
├── mixins # SASS mixins that are used across components
├── themes # Theme files
└── variables
    ├── _breakpoints.scss # Foundation: Break point and viewport definition
    ├── _color-palette.scss # Foundation: Color palette
    ├── _spacings.scss # Foundation: available spacings for layout components, paddings, margins and any other spacings
    ├── _typography.scss # Foundation: Font-families, Font-weights, Letter-spacings, Line-heights
    ├── _variables.scss # Index file for all kinds of globally available SASS variables
    └── components # Component Specific Variables
```

## Creating a new theme

### Creating the theme file
1. Create a new file in `./src/assets/design-system/themes`, e.g. `halloween.scss`
2. Copy the contents of the file `./src/assets/design-system/themes/dark.scss` and paste them into your theme file 
3. Change the root class name to `.halloween`
4. Replace the values of the variable with your new values

```css
/**
 Variable Nomenclature:
 1. Brand (global namespace)
 2. Application (css property or purpose)
 3. Brand Variation (primary, warning, danger, success, inverse, default)
 4. Emphasis (optional)
 5. State (optional)
*/

:root.halloween {
  /* Brand Variations */
  --brand-primary: #de4300;
  --brand-neutral: #{palette-color-level('neutral', 7)};
  --brand-danger: #{palette-color-level('danger', 7)};
  --brand-warning: #{palette-color-level('warning', 7)};
  --brand-success: #{palette-color-level('success', 7)};

  /* Background Colors */
  --brand-bg-default-high: #{palette-color-level('neutral', 10)};
  --brand-bg-default-medium: #{palette-color-level('neutral', 9)};
  --brand-bg-default-low: #{palette-color-level('neutral', 8)};
  --brand-bg-inverse-high: #{palette-color-level('neutral', 1)};
  --brand-bg-inverse-medium: #{palette-color-level('neutral', 2)};
  --brand-bg-inverse-low: #{palette-color-level('neutral', 3)};

  /* Surface Colors */
  --brand-surface-default-high: #{palette-color-level('neutral', 9)};
  --brand-surface-default-medium: #{palette-color-level('neutral', 8)};
  --brand-surface-default-low: #{palette-color-level('neutral', 7)};
  --brand-surface-inverse-high: #{palette-color-level('neutral', 0)};
  --brand-surface-inverse-medium: #{palette-color-level('neutral', 1)};
  --brand-surface-inverse-low: #{palette-color-level('neutral', 2)};
  --brand-surface-info-high: #{palette-color-level('primary', 8)};
  --brand-surface-info-medium: #{palette-color-level('primary', 9)};
  --brand-surface-info-low: #{palette-color-level('primary', 10)};
  --brand-surface-danger-high: #{palette-color-level('danger', 8)};
  --brand-surface-danger-medium: #{palette-color-level('danger', 9)};
  --brand-surface-danger-low: #{palette-color-level('danger', 10)};
  --brand-surface-warning-high: #{palette-color-level('warning', 8)};
  --brand-surface-warning-medium: #{palette-color-level('warning', 9)};
  --brand-surface-warning-low: #{palette-color-level('warning', 10)};
  --brand-surface-success-high: #{palette-color-level('success', 8)};
  --brand-surface-success-medium: #{palette-color-level('success', 9)};
  --brand-surface-success-low: #{palette-color-level('success', 10)};

  /* Border Colors */
  --brand-border-default-medium: #{palette-color-level('neutral', 7)};
  --brand-border-default-low: #{palette-color-level('neutral', 8)};
  --brand-border-inverse-medium: #{palette-color-level('neutral', 9)};
  --brand-border-inverse-low: #{palette-color-level('neutral', 7)};
  --brand-border-info-high: #de4300;
  --brand-border-info-low: #{palette-color-level('primary', 9)};
  --brand-border-danger-high: #{palette-color-level('danger', 7)};
  --brand-border-danger-low: #{palette-color-level('danger', 9)};
  --brand-border-warning-high: #{palette-color-level('warning', 7)};
  --brand-border-warning-low: #{palette-color-level('warning', 9)};
  --brand-border-success-high: #{palette-color-level('success', 7)};
  --brand-border-success-low: #{palette-color-level('success', 9)};

  /* Text Colors */
  --brand-text-default-high: #{palette-color-level('neutral', 0)};
  --brand-text-default-medium: #{palette-color-level('neutral', 2)};
  --brand-text-default-low: #{palette-color-level('neutral', 4)};
  --brand-text-inverse-high: #{palette-color-level('neutral', 10)};
  --brand-text-inverse-medium: #{palette-color-level('neutral', 7)};
  --brand-text-inverse-low: #{palette-color-level('neutral', 6)};
  --brand-text-info: #de4300;
  --brand-text-danger: #{palette-color-level('danger', 7)};
  --brand-text-warning: #{palette-color-level('warning', 7)};
  --brand-text-success: #{palette-color-level('success', 7)};

  /* Interaction Colors */
  --brand-interaction-primary-enabled: #ff4d00;
  --brand-interaction-primary-hovered: #ff7036;
  --brand-interaction-primary-activated: #de4300;

  --brand-interaction-neutral-enabled: #{palette-color-level('neutral', 9)};
  --brand-interaction-neutral-hovered: #{palette-color-level('neutral', 8)};
  --brand-interaction-neutral-activated: #{palette-color-level('neutral', 10)};

  --brand-interaction-danger-enabled: #{palette-color-level('danger', 6)};
  --brand-interaction-danger-hovered: #{palette-color-level('danger', 5)};
  --brand-interaction-danger-activated: #{palette-color-level('danger', 7)};

  --brand-interaction-warning-enabled: #{palette-color-level('warning', 6)};
  --brand-interaction-warning-hovered: #{palette-color-level('warning', 5)};
  --brand-interaction-warning-activated: #{palette-color-level('warning', 7)};

  --brand-interaction-success-enabled: #{palette-color-level('success', 6)};
  --brand-interaction-success-hovered: #{palette-color-level('success', 5)};
  --brand-interaction-success-activated: #{palette-color-level('success', 7)};

  --brand-interaction-secondary-enabled: #{palette-color-level('primary', 2)};
  --brand-interaction-secondary-hovered: #{palette-color-level('primary', 1)};
  --brand-interaction-secondary-activated: #{palette-color-level('primary', 3)};

  // UTILS
  /* Border radius */
  --brand-border-radius-xs: #{$space-2};
  --brand-border-radius-sm: #{$space-4};
  --brand-border-radius-md: #{$space-8};
  --brand-border-radius-lg: #{$space-16};

  /* Elevation */
  --brand-elevation-1: 0 1px 4px rgba(0, 0, 0, 0.3);
  --brand-elevation-2: 0 -1px 2px -1px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.3);
  --brand-elevation-3: 0 -2px 4px rgba(0, 0, 0, 0.08), 0 6px 10px rgba(0, 0, 0, 0.3);

  /* A11y */
  --brand-focused: 0 0 0 #{$space-2} #{palette-color-level('neutral', 10)},
  0 0 0 #{$space-4} #de4300;

  /* Animation Language */
  --brand-transition-duration: 250ms;
  --brand-easing-curve: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  --brand-fade-animation-transition: opacity var(--brand-transition-duration) var(--brand-easing-curve);
}

```

### Let SASS know about the new theme
1. Open `./src/assets/global.scss` and import your theme file

```css
@import 'design-system/mixins/mixins';
@import 'design-system/variables/variables';
@import 'design-system/themes/light';
@import 'design-system/themes/dark';
@import 'design-system/themes/halloween'; /* new theme */
```


### Let Storybook know about the new theme
1. Open `./.vuesion/storybook/preview.js`
2. Add new theme

```js
addParameters({
    ...
        themeSwitcher: {
    themes: [
        ...
            { label: 'Halloween Theme', value: 'halloween' },
    ],
},
});
```

### Let your application know about the new theme
1. Open `./src/layouts/default.vue`
2. Add new theme

```js
export default defineComponent({
    name: 'App',
    ...
    setup() {
        ...
        
        const themes = computed(() => [
            { label: 'System', value: 'system' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Halloween', value: 'halloween' },
        ]);
        
        ...
    },
});
```
