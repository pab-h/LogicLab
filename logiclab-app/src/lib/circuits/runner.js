const { nodeTypes } = require("./nodes");

function isEmpty(head) {
    return !head;
}

function appendLeft(head, node) {
    if (isEmpty(head)) {
        throw new Error("empty circuit");
    }

    if (head.inputType != nodeTypes.BINARY_INPUT) {
        throw new Error(`${ head.name } is not binary input`);
    }

    head.left = node;

}

function appendRight(head, node) {
    if (isEmpty(head)) {
        throw new Error("empty circuit");
    }

    if (head.inputType != nodeTypes.BINARY_INPUT) {
        throw new Error(`${ head.name } is not binary input`);
    }

    head.right = node;

}

function appendUnary(head, node) {
    if (isEmpty(head)) {
        throw new Error("empty circuit");
    }

    if (head.inputType != nodeTypes.UNARY_INPUT) {
        throw new Error(`${ head.name } is not unary input`);
    }

    head.node = node;

}

module.exports = {
    appendLeft,
    appendRight,
    appendUnary
};
