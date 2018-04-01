import FakeQuestion from './FakeQuestion';

class FakeAnswer {
    public _id?: string;
    public context: string;
    public step: number;
    public root: FakeQuestion;
    public super: FakeAnswer|null;
    public author: string;
    public expectAnswer: string;
    public meta?: object;

    constructor(answer: {
        theId?: string,
        theContext: string,
        theStep: number,
        theRoot: FakeQuestion,
        theSuper: FakeAnswer|null,
        theAuthor: string,
        theExpectAnswer: string,
    }) {
    this._id = answer.theId;
    this.context = answer.theContext;
    this.step = answer.theStep;
    this.root = answer.theRoot;
    this.super = answer.theSuper;
    this.author = answer.theAuthor;
    this.expectAnswer = answer.theExpectAnswer;
}
}

export default FakeAnswer;
