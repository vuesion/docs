# Design System
## Introduction
One of the main features of Vuesion is its comprehensive set of components. 
However, components alone are not enough to ensure a consistent user experience (UX). 
To achieve this, we need to define some guidelines that will ensure consistency across the application.

These rules also improve communication within the product team. 
Every color, text style, and spacing has a specific name and purpose.

::: tip Better communication
By sharing [storybook](https://vuesion.herokuapp.com/storybook/) or the [Figma file](https://www.figma.com/community/file/1080868611324978249), 
you can enable everyone in your team to participate in product-related discussions.
:::
## Architecture
### Foundation
The foundation of the design system is the first abstraction layer and consists of:

- **Breakpoints**: Define the responsive behavior of the design system.
- **Color Palette**: Includes every color used in the design system.
- **Spacings**: Define the spacings used in the design system.
- **Typography**: Define size, weight, line-height, and letter spacings of your typography.

### Design System Tokens
The second abstraction layer consists of Design System tokens, 
which help quickly redefine the design system and enable theming/white-labeling. The tokens include:

- Brand Variations (primary, neutral, warning, danger, success)
- Background Colors
- Surface Colors
- Border Colors
- Text Colors
- Interaction Colors
- Elevation (box-shadows)
- Accessibility (focus outlines)

::: tip Typography Tokens
There are no tokens for common text styles. Feel free to add them if your theme requires different typography.
:::
### Component Specific Variables
These variables are located in `./src/assets/design-system/variables/components` and form the final abstraction layer.
Each Vue component should reference only these variables, ensuring components are easy to change and theme.

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
                                        └────┤Animation│
                                             └─────────┘
```

### Folder Structure
```shell
design-system/
├── README.md
├── docs // Documentation and utilities for documentation
├── mixins // SASS mixins that are used across components
├── themes // Theme files
└── variables
    ├── _breakpoints.scss // Foundation: Break point and viewport definition
    ├── _color-palette.scss // Foundation: Color palette
    ├── _spacings.scss // Foundation: available spacings for layout components, paddings, margins and any other spacings
    ├── _typography.scss // Foundation: Font-families, Font-weights, Letter-spacings, Line-heights
    ├── _variables.scss // Index file for all kinds of globally available SASS variables
    └── components // Component Specific Variables
```