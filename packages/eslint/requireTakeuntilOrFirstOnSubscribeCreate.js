const onFuncRequireTakeuntilOrFirstOnSubscribeCreate = (context) => {
    const sourceCode = context.getSourceCode();

    // Function to find a 'pipe' call
    function findPipeCall(node) {
        if (node.type === 'CallExpression') {
            const callee = node.callee;
            if (callee.type === 'MemberExpression') {
                const property = callee.property;
                if (property.name === 'pipe') {
                    return node;
                } else {
                    return findPipeCall(callee.object);
                }
            }
        }
        return null;
    }

    // Function to check if the node is a 'subscribe' call
    function isSubscribeCall(node) {
        return node.name === 'subscribe';
    }

    // Function to check if the node is a member expression
    function isMemberExpression(node) {
        return node.type === 'MemberExpression';
    }

    // Function to check if the node is a call expression
    function isCallExpression(node) {
        return node.type === 'CallExpression';
    }

    // Function to check if the 'pipe' call contains 'first' or 'takeUntil'
    function hasFirstOrTakeUntil(args) {
        return args.some(arg => {
            if (arg.type === 'CallExpression') {
                const argCallee = arg.callee;
                return argCallee.name === 'takeUntil' || argCallee.name === 'first';
            }
            return false;
        });
    }

    return {
        Identifier: (node) => {
            if (isSubscribeCall(node)) {
                const parent = node.parent;
                if (isMemberExpression(parent)) {
                    const callee = parent.parent;
                    if (isCallExpression(callee)) {
                        const pipeCall = findPipeCall(callee.callee.object);
                        if (pipeCall) {
                            const args = pipeCall.arguments;
                            if (!hasFirstOrTakeUntil(args)) {
                                context.report({
                                    node,
                                    message: 'subscribe call without takeUntil or first in pipe'
                                });
                            }
                        } else {
                            context.report({
                                node,
                                message: 'subscribe call without pipe'
                            });
                        }
                    }
                }
            }
        },
    };
};

module.exports = {onFuncRequireTakeuntilOrFirstOnSubscribeCreate};
