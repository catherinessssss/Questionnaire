import { FakeQuestion } from './FakeQuestion';

export interface FakeAnswer {
    _id: string;
    context: string;
    step: number;
    root: FakeQuestion;
    super: FakeAnswer;
    author: string;
    expectAnswer: string;
    meta: object;
}
