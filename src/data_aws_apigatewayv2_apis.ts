import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApigatewayv2ApisArgs {
  name?: string;
  protocol_type?: string;
  tags?: { [key: string]: string };
}

export class data_aws_apigatewayv2_apis extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApigatewayv2ApisArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_apigatewayv2_apis", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
