import {
    Controller,
    Post,
    Body,
    Req,
    Res,
    HttpStatus,
    UnauthorizedException,
    Put,
    Patch,
    BadRequestException
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/config/security.config';
import { UserAuthService } from '../service/user.service';
import { AuthService } from '../service/auths.service';

@Controller('admin')
export class AuthController {
    constructor(
        private readonly appService: AuthService,
        private readonly userAuthService: UserAuthService,
    ) { }

    @Post('update-passwords-2')
    async updatePasswords(@Body('userIds') userIds: (string | number)[]) {
        if (!Array.isArray(userIds) || userIds.length === 0) {
            throw new BadRequestException('userIds phải là một mảng không rỗng');
        }

        const result = await this.appService.updatePasswordForUsers(userIds);

        if (result.success) {
            return { message: result.message };
        } else {
            throw new BadRequestException(result.message);
        }
    }
}