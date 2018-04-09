import UncleanAnswer from '../model/UncleanAnswer';
import config from '../config/config';
const axios = require('axios');

class UncleanAnswerAPI {

    async saveAnswer(requestData: Array<UncleanAnswer>): Promise<string> {

        try {
            const saveAnswerUrl: string = config.getSaveUncleanAnswerUrl;

            const response = await axios.post(saveAnswerUrl, requestData);

            return this.checkStatus(response);

        } catch (error) {
            return Promise.reject(error);
        }

    }

    private checkStatus(response: any): Promise<string> {
        if (response.data.success) {
            return Promise.resolve(response.data.uuid);
        } else {
            return Promise.reject(response.data.messages);
        }
    }
}

export const uncleanAnswerAPI = new UncleanAnswerAPI();
