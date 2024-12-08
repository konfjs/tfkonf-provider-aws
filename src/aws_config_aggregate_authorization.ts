import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigAggregateAuthorizationArgs {
  account_id: string;
  region: string;
  tags?: { [key: string]: string };
}

export class aws_config_aggregate_authorization extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigAggregateAuthorizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_config_aggregate_authorization", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
