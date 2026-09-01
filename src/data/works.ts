// 作品集：日常成品的登记表
// 新增作品就在这个数组里加一条，页面自动生成，不用碰布局代码。
// 视频放 public/media/，图片放 public/images/，引用路径以 / 开头。
export interface Work {
	slug: string;
	title: string;
	date: string; // YYYY-MM-DD
	type: 'video' | 'image' | 'demo';
	description: string;
	media: string; // 主媒体路径，如 /media/xxx.mp4
	poster?: string; // 视频封面图（可选）
	tags?: string[];
}

export const WORKS: Work[] = [
	{
		slug: 'opengl-parallel-light',
		title: 'OpenGL 平行光光栅化',
		date: '2026-09-01',
		type: 'video',
		description:
			'GLFW + OpenGL 学习项目里的平行光（Directional Light）光栅化练习。Blinn-Phong 光照模型，法线矩阵随模型旋转修正，观察平行光与点光源在漫反射上的差异。',
		media: '/media/opengl-parallel-light.mp4',
		tags: ['OpenGL', 'GLSL', '光照'],
	},
];
