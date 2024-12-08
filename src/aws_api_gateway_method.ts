import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayMethodArgs {
  api_key_required?: boolean;
  authorization: string;
  authorization_scopes?: string[];
  authorizer_id?: string;
  http_method: string;
  operation_name?: string;
  request_models?: { [key: string]: string };
  request_parameters?: { [key: string]: any };
  request_validator_id?: string;
  resource_id: string;
  rest_api_id: string;
}

export class aws_api_gateway_method extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayMethodArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_method", resourceName);
  }

  get authorization(): string {
    return `${this.resourceType}.${this.resourceName}.authorization`;
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
}
