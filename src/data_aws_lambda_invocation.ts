import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaInvocationArgs {
  function_name: string;
  input: string;
  qualifier?: string;
}

export class data_aws_lambda_invocation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLambdaInvocationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_invocation", resourceName);
  }

  get function_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get input(): string {
    return `data.${this.resourceType}.${this.resourceName}.input`;
  }

  get result(): string {
    return `data.${this.resourceType}.${this.resourceName}.result`;
  }
}
