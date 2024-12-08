import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexv2modelsBotVersionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsLexv2modelsBotVersionArgs {
  bot_id: string;
  description?: string;
  locale_specification: { [key: string]: any };
  timeouts?: AwsLexv2modelsBotVersionArgsTimeouts;
}

export class aws_lexv2models_bot_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLexv2modelsBotVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lexv2models_bot_version", resourceName);
  }

  get bot_id(): string {
    return `${this.resourceType}.${this.resourceName}.bot_id`;
  }

  get bot_version(): string {
    return `${this.resourceType}.${this.resourceName}.bot_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get locale_specification(): string {
    return `${this.resourceType}.${this.resourceName}.locale_specification`;
  }
}
