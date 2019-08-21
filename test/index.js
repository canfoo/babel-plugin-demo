const babel = require('babel-core');
const types = require('babel-types');

const plugin = require('./../lib/index.js');

const visitor = plugin({
	types
});

const code = `
    const a = 1;
    const b = 10;
    const c = (d) => {
			var e = 20;
      console.log(d);
		}
		const d = 30;
`;

const result = babel.transform(code, {
	plugins: [
		[
			visitor
		]
	]
});

console.log(result.code);