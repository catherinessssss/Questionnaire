import UncleanAnswer from '../model/UncleanAnswer';
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

    async saveAnswer(requestData: Array<UncleanAnswer>): Promise<Response> {

        const saveAnswerUrl: string = config.getSaveUncleanAnswerUrl;

        const response = await jsonpPromise(saveAnswerUrl, requestData);

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
