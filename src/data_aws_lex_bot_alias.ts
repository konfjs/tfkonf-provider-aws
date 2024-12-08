import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLexBotAliasArgs {
  bot_name: string;
  name: string;
}

export class data_aws_lex_bot_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLexBotAliasArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lex_bot_alias", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get bot_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.bot_name`;
  }

  get bot_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.bot_version`;
  }

  get checksum(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
