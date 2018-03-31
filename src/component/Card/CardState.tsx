import { Question } from '../../model/Question';
import { Answer } from '../../model/Answer';
import { FakeAnswer } from '../../model/FakeAnswer';

export interface CardState {
    question?: Question[];
    answer?: Array<Answer|FakeAnswer>;
    checkedNumber: number;
    checkedFakeNumber: number;
}
