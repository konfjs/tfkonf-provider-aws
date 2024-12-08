import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectBotAssociationArgsLexBot {
  name: string;
}

export interface DataAwsConnectBotAssociationArgs {
  instance_id: string;
  lex_bot: DataAwsConnectBotAssociationArgsLexBot;
}

export class data_aws_connect_bot_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectBotAssociationArgs) {
    const meta = {lex_bot:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_connect_bot_association", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }
}
