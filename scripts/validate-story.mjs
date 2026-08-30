// 故事图静态校验：分支目标存在性、结局可达性、死胡同检查
import { readFileSync } from 'fs';

const html = readFileSync('public/games/xueye-tideng/index.html', 'utf8');
const start = html.indexOf('const nodes = {');
const end = html.indexOf('\n\t\t};', start);
const literal = html.slice(start + 'const nodes = '.length, end + 4);
const nodes = eval('(' + literal + ')');

const errors = [];
for (const [key, node] of Object.entries(nodes)) {
	for (const c of node.choices) {
		if (!nodes[c.to]) errors.push(`${key} -> ${c.to} 不存在`);
	}
}
const endings = Object.keys(nodes).filter((k) => nodes[k].e);

const visited = new Set(['start']);
const queue = ['start'];
while (queue.length) {
	const cur = queue.shift();
	for (const c of nodes[cur].choices) {
		if (!visited.has(c.to)) {
			visited.add(c.to);
			queue.push(c.to);
		}
	}
}
const unreachable = Object.keys(nodes).filter((k) => !visited.has(k));
const deadEnds = Object.keys(nodes).filter((k) => !nodes[k].e && nodes[k].choices.length === 0);

console.log('节点总数:', Object.keys(nodes).length);
console.log('结局:', endings.map((k) => `${k}(${nodes[k].e})`).join(', '));
console.log('分支目标错误:', errors.length ? errors : '无');
console.log('不可达节点:', unreachable.length ? unreachable : '无');
console.log('死胡同:', deadEnds.length ? deadEnds : '无');
const EXPECTED_ENDINGS = 5;
const pass =
	!errors.length && !unreachable.length && !deadEnds.length && endings.length === EXPECTED_ENDINGS;
console.log('校验结果:', pass ? 'PASS' : 'FAIL');
