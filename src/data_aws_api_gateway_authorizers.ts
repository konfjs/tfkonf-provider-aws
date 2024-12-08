import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayAuthorizersArgs {
  rest_api_id: string;
}

export class data_aws_api_gateway_authorizers extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsApiGatewayAuthorizersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_authorizers", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get rest_api_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
