class Question {
    public _id?: string;
    public context: string;
    public meta?: object;

    constructor(question: {
        theId?: string,
        theContext: string ,
    }) {
        this._id = question.theId;
        this.context = question.theContext;
    }
}

export default Question;
