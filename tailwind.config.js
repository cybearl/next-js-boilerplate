import plugin from "tailwindcss/plugin"

/** @type {import("tailwindcss").Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"roboto-mono": ["var(--font-roboto-mono)"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	plugins: [
		import("tailwindcss-animate"),

		// Adding child variants
		plugin(({ addVariant, matchVariant }) => {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
			addVariant("child-focus", "& > *:focus")
			addVariant("child-active", "& > *:active")

			// Hover media queries
			addVariant("has-hover", "@media (hover: hover) and (pointer: fine)")
			addVariant("no-hover", "@media not all and (hover: hover) and (pointer: fine)")

			// Applied on hover if supported, never applied otherwise
			addVariant("hover-never", "@media (hover: hover) and (pointer: fine) { &:hover }")
			matchVariant(
				"group-hover-never",
				(_, { modifier }) =>
					`@media (hover: hover) and (pointer: fine) { :merge(.group${modifier ? `\\/${modifier}` : ""}):hover & }`,
				{ values: { DEFAULT: "" } },
			)
			matchVariant(
				"peer-hover-never",
				(_, { modifier }) =>
					`@media (hover: hover) and (pointer: fine) { :merge(.peer${modifier ? `\\/${modifier}` : ""}):hover & }`,
				{ values: { DEFAULT: "" } },
			)

			// Applied on hover if supported, always applied otherwise
			addVariant("hover-always", [
				"@media (hover: hover) and (pointer: fine) { &:hover }",
				"@media not all and (hover: hover) and (pointer: fine)",
			])
			matchVariant(
				"group-hover-always",
				(_, { modifier }) => [
					`@media (hover: hover) and (pointer: fine) { :merge(.group${modifier ? `\\/${modifier}` : ""}):hover & }`,
					"@media not all and (hover: hover) and (pointer: fine)",
				],
				{ values: { DEFAULT: "" } },
			)
			matchVariant(
				"peer-hover-always",
				(_, { modifier }) => [
					`@media (hover: hover) and (pointer: fine) { :merge(.peer${modifier ? `\\/${modifier}` : ""}):hover & }`,
					"@media not all and (hover: hover) and (pointer: fine)",
				],
				{ values: { DEFAULT: "" } },
			)
		}),
		// Adding text shadow support
		import("tailwindcss-textshadow"),
	],
}
