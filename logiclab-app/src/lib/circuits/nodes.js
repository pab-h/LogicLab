const nodeTypes = {
    DEFAULT: "DEFAULT",
    LOGIC_STATE: "LOGIC_STATE",
    BINARY_INPUT: "BINARY_INPUT",
    AND: "AND",
    OR: "OR",
    NAND: "NAND",
    NOR: "NOR",
    XOR: "XOR",
    XNOR: "XNOR",
    UNARY_INPUT: "UNARY_INPUT",
    NOT: "NOT"
}

class CircuitNode {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class StateNode extends CircuitNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.LOGIC_STATE;
        this.value = false;
    }
}

class BinaryNode extends CircuitNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.BINARY_INPUT;
        this.inputType = nodeTypes.BINARY_INPUT;
        this.left = null;
        this.right = null;
    }
}

class AndNode extends BinaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.AND;
    }
}

class OrNode extends BinaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.OR;
    }
}

class NandNode extends BinaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.NAND;
    }
}

class NorNode extends BinaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.NOR;
    }
}

class XorNode extends BinaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.XOR;
    }
}

class XnorNode extends BinaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.XNOR;
    }
}

class UnaryNode extends CircuitNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.UNARY_INPUT;
        this.inputType = nodeTypes.UNARY_INPUT;
        this.node = null;
    }
}

class NotNode extends UnaryNode {
    constructor(name) {
        super(name);

        this.type = nodeTypes.NOT;
    }
}

module.exports = {
    nodeTypes,
    StateNode,
    AndNode,
    OrNode,
    NandNode,
    NorNode,
    XorNode,
    XnorNode,
    NotNode
}