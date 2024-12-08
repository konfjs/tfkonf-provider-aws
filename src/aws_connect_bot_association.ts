import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectBotAssociationArgsLexBot {
  name: string;
}

export interface AwsConnectBotAssociationArgs {
  instance_id: string;
  lex_bot: AwsConnectBotAssociationArgsLexBot;
}

export class aws_connect_bot_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectBotAssociationArgs) {
    const meta = {lex_bot:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_bot_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }
}
