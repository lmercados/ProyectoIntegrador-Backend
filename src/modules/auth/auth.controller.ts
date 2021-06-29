import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingupDto, SinginDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(@Body() singupDto: SingupDto): Promise<void> {
    return this._authService.singup(singupDto);
  }
  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signuin(@Body() singinDto: SinginDto) {
    return this._authService.singin(singinDto);
  }
}
