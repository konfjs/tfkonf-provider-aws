import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaInvocationArgs {
  function_name: string;
  input: string;
  lifecycle_scope?: string;
  qualifier?: string;
  terraform_key?: string;
  triggers?: { [key: string]: string };
}

export class aws_lambda_invocation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaInvocationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lambda_invocation", resourceName);
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get input(): string {
    return `${this.resourceType}.${this.resourceName}.input`;
  }

  get result(): string {
    return `${this.resourceType}.${this.resourceName}.result`;
  }
}
