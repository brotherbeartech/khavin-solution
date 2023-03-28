import { MAIL_API_KEY, Host_Email } from '../constants/khavin-data.constant';
import axios from 'axios';

export class AxiosService {
    public async sendEmail(param: {
        from: string, 
        purposeContent: string, 
        name: string
    }): Promise<any> {
        return axios({
            method: 'POST',
            url: `https://api.mailslurp.com/sendEmail?apiKey=${MAIL_API_KEY}`,
            data: {
                senderId: Host_Email.id,
                to: Host_Email.name,
                subject: param.purposeContent,
                body: `You have a request from ${param.name} need to contact with you; Please send them throw email ${param.from}`
            }
        });
    }
}
