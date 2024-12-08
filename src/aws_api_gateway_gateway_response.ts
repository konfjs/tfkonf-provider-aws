import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayGatewayResponseArgs {
  response_parameters?: { [key: string]: string };
  response_templates?: { [key: string]: string };
  response_type: string;
  rest_api_id: string;
  status_code?: string;
}

export class aws_api_gateway_gateway_response extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayGatewayResponseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_gateway_response", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get response_type(): string {
    return `${this.resourceType}.${this.resourceName}.response_type`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
