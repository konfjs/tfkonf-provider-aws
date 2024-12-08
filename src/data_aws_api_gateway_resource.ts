import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayResourceArgs {
  path: string;
  rest_api_id: string;
}

export class data_aws_api_gateway_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApiGatewayResourceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_resource", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_id`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get path_part(): string {
    return `data.${this.resourceType}.${this.resourceName}.path_part`;
  }

  get rest_api_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
