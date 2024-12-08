import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLexIntentArgs {
  name: string;
  version?: string;
}

export class data_aws_lex_intent extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLexIntentArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lex_intent", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
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

  get parent_intent_signature(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_intent_signature`;
  }
}
