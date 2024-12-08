import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayResourceArgs {
  parent_id: string;
  path_part: string;
  rest_api_id: string;
}

export class aws_api_gateway_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayResourceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_resource", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get parent_id(): string {
    return `${this.resourceType}.${this.resourceName}.parent_id`;
  }

  get path(): string {
    return `${this.resourceType}.${this.resourceName}.path`;
  }

  get path_part(): string {
    return `${this.resourceType}.${this.resourceName}.path_part`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
