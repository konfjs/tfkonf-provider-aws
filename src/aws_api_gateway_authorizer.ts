import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayAuthorizerArgs {
  authorizer_credentials?: string;
  authorizer_result_ttl_in_seconds?: number;
  authorizer_uri?: string;
  identity_source?: string;
  identity_validation_expression?: string;
  name: string;
  provider_arns?: string[];
  rest_api_id: string;
  type?: string;
}

export class aws_api_gateway_authorizer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayAuthorizerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_authorizer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
