import { Injectable } from "@nestjs/common";
import { compareSync } from "bcrypt";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    };

    return {
      token: this.jwtService.sign(payload),
      statusCode: 200,
      userData: {
        email: user.email,
        role: user.role,
        name: user.name,
        lastName: user.lastName,
        fullName: user.name + " " + user.lastName,
        avatar: user.avatar,
      },
    };
  }

  async validateUser(email: string, password: string) {
    let user: any;
    try {
      user = await this.userService.findByEmail(email);
    } catch (e) {
      return null;
    }

    const isPassWordValid = compareSync(password, user.password);
    if (!isPassWordValid) return null;

    return user;
  }
}
