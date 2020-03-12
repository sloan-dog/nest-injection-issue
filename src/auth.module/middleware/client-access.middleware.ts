import { NestMiddleware, Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service/auth.service";

@Injectable()
export class ClientAccessMw implements NestMiddleware {
    constructor(private readonly authSvc: AuthService){}
    use() {
        return true
    }
}