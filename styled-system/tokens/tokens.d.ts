/* eslint-disable */
export type Token = "colors.primary" | "colors.secondary" | "colors.white" | "colors.tertiary" | "sizes.breakpoint-xs" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "breakpoints.xs" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl"

export type ColorToken = "primary" | "secondary" | "white" | "tertiary"

export type SizeToken = "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		colors: ColorToken
		sizes: SizeToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"