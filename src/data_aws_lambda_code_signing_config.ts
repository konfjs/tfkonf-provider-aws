import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaCodeSigningConfigArgs {
  arn: string;
}

export class data_aws_lambda_code_signing_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLambdaCodeSigningConfigArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_code_signing_config", resourceName);
  }

  get allowed_publishers(): string {
    return `data.${this.resourceType}.${this.resourceName}.allowed_publishers`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get config_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.config_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.policies`;
  }
}
