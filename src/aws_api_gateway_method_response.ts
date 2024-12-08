import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayMethodResponseArgs {
  http_method: string;
  resource_id: string;
  response_models?: { [key: string]: string };
  response_parameters?: { [key: string]: any };
  rest_api_id: string;
  status_code: string;
}

export class aws_api_gateway_method_response extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayMethodResponseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_method_response", resourceName);
  }

  get http_method(): string {
    return `${this.resourceType}.${this.resourceName}.http_method`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get status_code(): string {
    return `${this.resourceType}.${this.resourceName}.status_code`;
  }
}
