import Question from './Question';

class Answer {
    public _id?: string;
    public context: string;
    public step: number;
    public root: Question;
    public super: Answer|null;
    public author: string;
    public expectAnswer?: string;
    public meta?: object;

    constructor(answer: {
            theId?: string,
            theContext: string,
            theStep: number,
            theRoot: Question,
            theSuper: Answer|null,
            theAuthor: string
        }) {
        this._id = answer.theId;
        this.context = answer.theContext;
        this.step = answer.theStep;
        this.root = answer.theRoot;
        this.super = answer.theSuper;
        this.author = answer.theAuthor;
    }
}

export default Answer;
