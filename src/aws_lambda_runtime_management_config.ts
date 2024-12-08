import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaRuntimeManagementConfigArgs {
  function_name: string;
  qualifier?: string;
  runtime_version_arn?: string;
  update_runtime_on?: string;
}

export class aws_lambda_runtime_management_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaRuntimeManagementConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lambda_runtime_management_config", resourceName);
  }

  get function_arn(): string {
    return `${this.resourceType}.${this.resourceName}.function_arn`;
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }
}
