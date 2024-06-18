const CircuitNodeTypes = {
    DEFAULT: 0,
    BINARY_INPUT: 1,
    AND: 1,
}

function CircuitNode() {
    this.type = CircuitNodeTypes.DEFAULT;
}

function BinaryNode() {
    CircuitNode.call(this);

    this.type = CircuitNodeTypes.BINARY_INPUT;
    this.left = null;
    this.right = null;

}

function AndNode() {
    BinaryNode.call(this);

    this.type = CircuitNode.AND;
}

module.exports = {
    CircuitNodeTypes,
    CircuitNode,
    BinaryNode,
    AndNode
}