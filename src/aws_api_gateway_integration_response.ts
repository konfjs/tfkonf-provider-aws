import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayIntegrationResponseArgs {
  content_handling?: string;
  http_method: string;
  resource_id: string;
  response_parameters?: { [key: string]: string };
  response_templates?: { [key: string]: string };
  rest_api_id: string;
  selection_pattern?: string;
  status_code: string;
}

export class aws_api_gateway_integration_response extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayIntegrationResponseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_integration_response", resourceName);
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
