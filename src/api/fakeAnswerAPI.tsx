import FakeAnswer from '../model/FakeAnswer';
import config from '../config/config';
const jsonp = require('jsonp');

const jsonpPromise = function (url: string) {
    return new Promise((resolve, reject) => {
        jsonp(url, null, (error: any, data: any) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

class FakeAnswerAPI {
    async getRandomAnswer(count: number): Promise<FakeAnswer[]> {
        const getRandamFakeAnswerUrl: string = config.getRandamFakeAnswerUrl;

        const response = await jsonpPromise(getRandamFakeAnswerUrl);

        const jsonResponse = await this.checkStatus(response);

        return this.resolveQuestions(jsonResponse);
    }

    private checkStatus(response: any): Promise<Response> {
        if (response.success) {
            return Promise.resolve(response);
        } else {
            let error = new Error(response.statusText);
            throw error;
        }
    }

    private resolveQuestions(data: any): Promise<FakeAnswer[]> {
        const answers = data.fakeAnswers.map((answer: FakeAnswer) => {
            let item = new FakeAnswer({
                theId: answer._id,
                theContext: answer.context,
                theStep: answer.step,
                theRoot: answer.root,
                theSuper: answer.super,
                theAuthor: answer.author,
                theExpectAnswer: answer.expectAnswer,
            });
            return item;
        });

        return Promise.resolve(answers);
    }
}

export const fakeAnswerAPI = new FakeAnswerAPI();
