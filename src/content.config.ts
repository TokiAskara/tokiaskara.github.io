import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 内容分组：作品卡 / 主题卡 / 机制卡 / 关系卡 / 意象卡 / 随笔
			category: z
				.enum(['works', 'themes', 'mechanisms', 'relationships', 'motifs', 'essays'])
				.default('essays'),
		}),
});

export const collections = { blog };

// 分类的展示信息：名称、说明、URL 段
export const CATEGORIES = [
	{
		key: 'works',
		name: '作品卡',
		subpath: 'works',
		description: '看过的作品与留下来的观察：一句话概括、最记得的部分、可拆解的主题与机制。',
	},
	{
		key: 'themes',
		name: '主题卡',
		subpath: 'themes',
		description: '一个值得反复回答的问题：核心命题、内部矛盾、可迁移的创作问题。',
	},
	{
		key: 'mechanisms',
		name: '机制卡',
		subpath: 'mechanisms',
		description: '可以复用的叙事装置：结构步骤、作品中的证据、使用注意事项。',
	},
	{
		key: 'relationships',
		name: '关系卡',
		subpath: 'relationships',
		description: '一种人物关系意味着什么、能承载哪些冲突，以及写法步骤与范例。',
	},
	{
		key: 'motifs',
		name: '意象卡',
		subpath: 'motifs',
		description: '可复用的意象系统：核心功能、正反面用法与具体写法示范。',
	},
	{
		key: 'essays',
		name: '随笔',
		subpath: 'essays',
		description: '不做卡片的东西：站点动态、想法、过程中的碎念。',
	},
] as const;
