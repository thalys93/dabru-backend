import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches } from "class-validator";
import { messagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @ApiProperty()
  @Matches(RegExHelper.email, { message: messagesHelper.emailMessage })
  email: string;

  @ApiProperty()
  avatar: string;

  @IsNotEmpty()
  @ApiProperty()
  @Matches(RegExHelper.password, { message: messagesHelper.passwordMessages })
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  role: string;
}
