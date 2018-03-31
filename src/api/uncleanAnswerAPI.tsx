import { UncleanAnswer } from '../model/UncleanAnswer';
import config from '../config/config';
const axios = require('axios');

const jsonpPromise = function (url: string, requestData: object|null) {
    return new Promise((resolve, reject) => {
        axios.post(url, requestData, (error: any, data: any) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

class UncleanAnswerAPI {

    async saveAnswer(requestData: UncleanAnswer|null): Promise<Response> {
        // test
        const testData = [{
            context: '完全一致',
            step: 2,
            author: 'tester',
            root: '5ab1042b2cb33570a66af77c',
            super: '5ab21e21b297534f4a1eb7b0',
        }, {
            context: '完不全一致',
            step: 2,
            author: 'tester',
            root: '5ab1042b2cb33570a66af77c',
            super: '5ab21e21b297534f4a1eb7b0',
        }];

        const saveAnswerUrl: string = config.getSaveUncleanAnswerUrl;

        const response = await jsonpPromise(saveAnswerUrl, testData);

        return await this.checkStatus(response);

    }

    private checkStatus(response: any): Promise<Response> {
        if (response.success) {
            return Promise.resolve(response);
        } else {
            let error = new Error(response.statusText);
            throw error;
        }
    }

}

export const uncleanAnswerAPI = new UncleanAnswerAPI();
