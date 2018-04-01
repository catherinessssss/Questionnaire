import { Answer } from '../../model/Answer';
import { FakeAnswer } from '../../model/FakeAnswer';

export interface CardProp {
    translatorAnswer: Answer|FakeAnswer|null;
}
