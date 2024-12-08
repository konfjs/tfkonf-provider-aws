import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaAliasArgs {
  function_name: string;
  name: string;
}

export class data_aws_lambda_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLambdaAliasArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_alias", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get function_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_name`;
  }

  get function_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get invoke_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.invoke_arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
