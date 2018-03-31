import { Question } from './Question';
import { Answer } from './Answer';

export interface UncleanAnswer {
    _id: string;
    context: string;
    step: number;
    root: Question;
    super: Answer;
    author: string;
    meta: object;
}
