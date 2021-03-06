import Answer from '../model/Answer';
import config from '../config/config';
const jsonp = require('jsonp');

const jsonpPromise = function (url: string, requestData: object|null) {
    return new Promise((resolve, reject) => {
        jsonp(url, requestData, (error: any, data: any) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

class AnswerAPI {
    async getRandomAnswer(count: number): Promise<Answer[]> {
        const getRandamAnswerUrl: string = config.getRandamAnswerUrl + '?number=' + count;

        const response = await jsonpPromise(getRandamAnswerUrl, null);

        const jsonResponse = await this.checkStatus(response);

        return this.resolveAnswers(jsonResponse);
    }

    private checkStatus(response: any): Promise<Response> {
        if (response.success) {
            return Promise.resolve(response);
        } else {
            let error = new Error(response.statusText);
            throw error;
        }
    }

    private resolveAnswers(data: any): Promise<Answer[]> {
        const answers = data.answers.map((answer: Answer) => {
            let item = new Answer({
                theId: answer._id,
                theContext: answer.context,
                theStep: answer.step,
                theRoot: answer.root,
                theSuper: answer.super,
                theAuthor: answer.author,
            });
            return item;
        });

        return Promise.resolve(answers);
    }
}

export const answerAPI = new AnswerAPI();
