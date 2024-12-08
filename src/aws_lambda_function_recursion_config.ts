import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaFunctionRecursionConfigArgs {
  function_name: string;
  recursive_loop: string;
}

export class aws_lambda_function_recursion_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaFunctionRecursionConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lambda_function_recursion_config", resourceName);
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get recursive_loop(): string {
    return `${this.resourceType}.${this.resourceName}.recursive_loop`;
  }
}
