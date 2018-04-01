import Answer from '../../model/Answer';
import FakeAnswer from '../../model/FakeAnswer';

export interface CardProp {
    translatorAnswerItem: Answer|FakeAnswer|null;
    getUserAnswer: any;
}
