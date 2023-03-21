import { AxiosService } from "./post-email.service";

export class APIFactoryService {

    private services: any = {
        email: new AxiosService()
    }

    private _environment: any;

    constructor() {
        this._environment = import.meta.env;
    }

    public async post(postService: string, params: any): Promise<any> {
        return this.services[postService].sendEmail(params);
    }

    public isDevEnvironment(): boolean {
        return this._environment.DEV;
    }
}
