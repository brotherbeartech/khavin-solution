import { AxiosService } from "./post-email.service";

export class APIFactoryService {
    private services: any = {
        email: new AxiosService()
    }

    public async post(postService: string, params: any): Promise<any> {
        return this.services[postService].sendEmail(params)
    }
}
