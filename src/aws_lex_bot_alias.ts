import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexBotAliasArgsConversationLogsLogSettings {
  destination: string;
  kms_key_arn?: string;
  log_type: string;
  resource_arn: string;
}

export interface AwsLexBotAliasArgsConversationLogs {
  iam_role_arn: string;
  log_settings?: AwsLexBotAliasArgsConversationLogsLogSettings[];
}

export interface AwsLexBotAliasArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexBotAliasArgs {
  bot_name: string;
  bot_version: string;
  description?: string;
  name: string;
  conversation_logs?: AwsLexBotAliasArgsConversationLogs;
  timeouts?: AwsLexBotAliasArgsTimeouts;
}

export class aws_lex_bot_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLexBotAliasArgs) {
    const meta = {conversation_logs:{isBlock:true,log_settings:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lex_bot_alias", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bot_name(): string {
    return `${this.resourceType}.${this.resourceName}.bot_name`;
  }

  get bot_version(): string {
    return `${this.resourceType}.${this.resourceName}.bot_version`;
  }

  get checksum(): string {
    return `${this.resourceType}.${this.resourceName}.checksum`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
