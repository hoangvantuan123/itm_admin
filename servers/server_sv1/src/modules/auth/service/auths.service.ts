import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
    BadRequestException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { TCAUserWEB } from '../entities/auths.entity';
import { UserAuthService } from './user.service';
import { jwtConstants } from 'src/config/security.config';
import * as crypto from 'crypto';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private readonly userAuthService: UserAuthService,
        @InjectRepository(TCAUserWEB)
        private readonly userWEBRepository: Repository<TCAUserWEB>) { }
    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    private readonly ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default_secret';

    /* MÃ HÓA PASS */
    private async encryptPassword(plainText: string): Promise<string> {
        const IV_LENGTH = 16;
        const key = crypto.createHash('sha256').update(this.ENCRYPTION_KEY).digest();
        const iv = crypto.randomBytes(IV_LENGTH);
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let encrypted = cipher.update(plainText, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + encrypted;
    }

    async loginUserMes(
        loginData: LoginDto,
    ): Promise<{
        success: boolean;
        data?: { user: Partial<TCAUserWEB>; token: string };
        error?: { message: string; code: string };
    }> {
        const { login, password } = loginData;

        try {
            const user = await this.userAuthService.findAuthByEmpID(login);

            if (!user) {
                throw new NotFoundException('User not found');
            }

            const isPasswordValid = await bcrypt.compare(password, user.Password2);

            if (!isPasswordValid) {
                return {
                    success: false,
                    error: {
                        message: 'Invalid credentials',
                        code: 'INVALID_CREDENTIALS',
                    },
                };
            }
            const token = jwt.sign(
                {
                    UserId: user.UserId,
                    login: user.UserName,
                    UserType: user.UserType,
                    EmpSeq: user.EmpSeq,
                },
                jwtConstants.secret,
                { expiresIn: '1h' }
            );

            const userResponse: Partial<TCAUserWEB> = {
                UserId: user.UserId,
                EmpSeq: user.EmpSeq,
                Remark: user.Remark,
            };

            return {
                success: true,
                data: {
                    user: userResponse,
                    token,
                },
            };
        } catch (error) {
            return {
                success: false,
                error: {
                    message: error.message || 'An unexpected error occurred',
                    code: error instanceof NotFoundException ? 'USER_NOT_FOUND' : 'UNKNOWN_ERROR',
                },
            };
        }
    }

    async updatePasswordForUsers(userIds: (string | number)[]): Promise<{
        success: boolean;
        message: string;
    }> {
        try {
            const updatePromises = userIds.map(async (userId) => {
                const userIdStr = userId.toString();
                const newPassword = `@${userIdStr}`;
                const hashedPassword = await this.hashPassword(newPassword);

                await this.userWEBRepository.update(
                    { UserId: userIdStr },
                    { Password2: hashedPassword },
                );
            });

            await Promise.all(updatePromises);
            return {
                success: true,
                message: 'Passwords updated successfully.',
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || 'An error occurred while updating passwords.',
            };
        }
    }

}
