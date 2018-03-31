import { Question } from './Question';

export interface Answer {
    _id: string;
    context: string;
    step: number;
    root: Question;
    super: Answer;
    author: string;
    expectAnswer?: string;
    meta: object;
}
