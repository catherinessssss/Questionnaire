import Answer from '../../model/Answer';
import FakeAnswer from '../../model/FakeAnswer';

export interface AppState {
    answers: Array<Answer|FakeAnswer>;
    translatorAnswerItem?: Answer|FakeAnswer|null;
    checkedNumber: number;
    checkedFakeNumber: number;
    getAnswerYet: boolean;
    timestamp: number;
    failed: boolean;
    value: string;
    correctStatus: boolean;
    checked: boolean;
    isFakeAnswer: boolean;
    userAnswers: Array<Answer|FakeAnswer>;
    uuid: string;
}
