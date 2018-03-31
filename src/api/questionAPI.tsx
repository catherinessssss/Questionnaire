import { Question } from '../model/Question';
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

class QuestionAPI {
    async getAllQuestions(): Promise<Question[]> {
        const getAllQuestionUrl: string = config.getAllQuestionUrl;

        const response = await jsonpPromise(getAllQuestionUrl);

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

    private resolveQuestions(data: any): Promise<Question[]> {
        const questions = data.question.map((question: Question) => {
            let item: Question = {
                _id: question._id,
                context: question.context,
                meta: question.meta,
            };
            return item;
        });

        return Promise.resolve(questions);
    }
}

export const questionAPI = new QuestionAPI();
