import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectLambdaFunctionAssociationArgs {
  function_arn: string;
  instance_id: string;
}

export class aws_connect_lambda_function_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectLambdaFunctionAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_connect_lambda_function_association", resourceName);
  }

  get function_arn(): string {
    return `${this.resourceType}.${this.resourceName}.function_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }
}
