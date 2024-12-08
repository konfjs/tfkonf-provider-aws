import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayRequestValidatorArgs {
  name: string;
  rest_api_id: string;
  validate_request_body?: boolean;
  validate_request_parameters?: boolean;
}

export class aws_api_gateway_request_validator extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayRequestValidatorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_request_validator", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
