
export default function core () {
	return ({ types }) => ({
		visitor: {
			VariableDeclaration(path) {
				if (path.node.kind === 'const') {
					path.node.kind = 'var';
					// let node = types.VariableDeclaration('var', path.node.declarations)
					// path.replaceWith(node);
				}
			},
			ArrowFunctionExpression(path) {
				path.traverse({
					Identifier(path) {
						if (path.node.name === 'd') {
							path.node.name = 'm';
						}
					}
				});
				path.replaceWith(types.functionExpression(path.node.id, path.node.params, path.node.body));
			}
		}
	});
}
