/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - The first entry MUST be a heading
 * - Heading entries MUST include `header: true` and `type`
 * - Heading entries MAY include `nested: true` to move that heading and following links under the previous unnested heading
 * - Heading entries MAY include `collapsed: true` to mark it and its children as collapsed by default
 * - Link entries MUST include `slug` (which excludes the language code)
 *
 * For translators:
 *
 * Copy the English `key` value unchanged and translate only the `text` into your language:
 *
 * `src/i18n/en/nav.ts`: `{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },`
 * `src/i18n/ja/nav.ts`: `'getting-started': 'はじめに',`
 */

export default [
	{ text: 'Welcome', header: true, type: 'learn', key: 'welcome' },
	{ text: 'About Xiangqian Zhang', slug: 'about-xiangqian-zhang', key: 'about-xiangqian-zhang' },
	{ text: 'Zhang\'s videos', slug: 'videos-of-zhang', key: 'videos-of-zhang' },
	{ text: 'Donate Zhang', slug: 'donate-zhang', key: 'donate-zhang' },
	{ text: 'About website', slug: 'about-website', key: 'about-website' },
	{ text: 'Join community', slug: 'join-community', key: 'join-community' },
	{ text: 'Research Experiment', header: true, type: 'learn', key: 'researchExperiment' },
	{ text: 'Generation of gravitational fields by low-voltage varying electromagnetic fields', slug: 'research-experiment/generation-of-gravitational-fields-by-low-voltage-varying-electromagnetic-fields', key: 'research-experiment/generation-of-gravitational-fields-by-low-voltage-varying-electromagnetic-fields' },
	{ text: 'Academic Paper', header: true, type: 'learn', key: 'academicPaper' },
	{ text: 'Unified Field EquationGenerated by Longitudinal Electromagnetic (LEM) Waves', slug: 'academic-paper/unified-field-equation-generated-by-longitudinal-electromagnetic-lem-waves', key: 'academic-paper/unified-field-equation-generated-by-longitudinal-electromagnetic-lem-waves' },
	{ text: 'Resources', header: true, type: 'learn', key: 'resources' },
	{ text: 'Relevant literature', slug: 'resources/relevant-literature', key: 'resources/relevant-literature' },
	{ text: 'Field animations', slug: 'resources/field-animations', key: 'resources/field-animations' },
	{ text: 'Use of artificial sites', slug: 'resources/use-of-artificial-sites', key: 'resources/use-of-artificial-sites' },
	{ text: 'Unified field theory', header: true, type: 'learn', key: 'unifiedFieldTheory' },
	{ text: 'Chapter 1', slug: 'unified-field-theory/chapter-1', key: 'unified-field-theory/chapter-1' },
	{ text: 'Chapter 2', slug: 'unified-field-theory/chapter-2', key: 'unified-field-theory/chapter-2' },
	{ text: 'Chapter 3', slug: 'unified-field-theory/chapter-3', key: 'unified-field-theory/chapter-3' },
	{ text: 'Chapter 4', slug: 'unified-field-theory/chapter-4', key: 'unified-field-theory/chapter-4' },
	{ text: 'Chapter 5', slug: 'unified-field-theory/chapter-5', key: 'unified-field-theory/chapter-5' },
	{ text: 'Chapter 6', slug: 'unified-field-theory/chapter-6', key: 'unified-field-theory/chapter-6' },
	{ text: 'Chapter 7', slug: 'unified-field-theory/chapter-7', key: 'unified-field-theory/chapter-7' },
	{ text: 'Chapter 8', slug: 'unified-field-theory/chapter-8', key: 'unified-field-theory/chapter-8' },
] satisfies NavEntry[];

type NavEntry = {
	/** The visible label for this link or heading. */
	text: string;
	/**
	 * A unique key for this entry. Used in translation files to provide a translation for this entry’s label.
	 * Often the same as `slug` for links (but doesn’t have to be).
	 */
	key: string;
} & (
	| {
			/** The content collection slug for this page *without* the language code. */
			slug: string;
	  }
	| {
			/** Marks this entry as a group heading and starts a new group. */
			header: true;
			/** Whether this group is in the learn or API category (currently unused). */
			type: 'learn' | 'api';
			/** Whether this group should be nested inside the preceding group. */
			nested?: boolean;
			/** Whether this group should be collapsed by default. */
			collapsed?: boolean;
	  }
);
