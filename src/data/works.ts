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
		slug: 'opengl-phong-lighting',
		title: 'OpenGL Phong 光照模型',
		date: '2026-09-03',
		type: 'video',
		description:
			'GLFW + OpenGL 学习项目里的完整 Phong 光照模型练习。在平行光基础上补齐环境光与高光（镜面反射）两块，ambient + diffuse + specular 三分量合成的完整光照效果。',
		media: '/media/opengl-phong-lighting.mp4',
		tags: ['OpenGL', 'GLSL', '光照', 'Phong'],
	},
	{
		slug: 'opengl-outline-pass',
		title: 'OpenGL 轮廓光实现',
		date: '2026-09-03',
		type: 'video',
		description:
			'GLFW + OpenGL 学习项目里的轮廓光（Outline / Stencil）练习。通过模板测试（Stencil Buffer）把模型轮廓描出来，观察描边宽度与视角变化时的表现。',
		media: '/media/opengl-outline-pass.mp4',
		tags: ['OpenGL', 'GLSL', '模板缓冲'],
	},
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
