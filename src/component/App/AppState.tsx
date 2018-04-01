import { Answer } from '../../model/Answer';
import { FakeAnswer } from '../../model/FakeAnswer';

export interface AppState {
    answer?: Array<Answer|FakeAnswer>;
    answerItem: Answer|FakeAnswer|null;
    checkedNumber: number;
    checkedFakeNumber: number;
    getAnswerYet: boolean;
    timestamp: number;
}
