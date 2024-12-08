import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectLambdaFunctionAssociationArgs {
  function_arn: string;
  instance_id: string;
}

export class data_aws_connect_lambda_function_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectLambdaFunctionAssociationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_lambda_function_association", resourceName);
  }

  get function_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }
}
