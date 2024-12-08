import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaFunctionsArgs {
}

export class data_aws_lambda_functions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLambdaFunctionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_functions", resourceName);
  }

  get function_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_arns`;
  }

  get function_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_names`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
