import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayRestApiPolicyArgs {
  policy: string;
  rest_api_id: string;
}

export class aws_api_gateway_rest_api_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayRestApiPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_rest_api_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
