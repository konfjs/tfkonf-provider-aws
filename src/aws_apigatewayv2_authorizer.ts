import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2AuthorizerArgsJwtConfiguration {
  audience?: string[];
  issuer?: string;
}

export interface AwsApigatewayv2AuthorizerArgsTimeouts {
  delete?: string;
}

export interface AwsApigatewayv2AuthorizerArgs {
  api_id: string;
  authorizer_credentials_arn?: string;
  authorizer_payload_format_version?: string;
  authorizer_type: string;
  authorizer_uri?: string;
  enable_simple_responses?: boolean;
  identity_sources?: string[];
  name: string;
  jwt_configuration?: AwsApigatewayv2AuthorizerArgsJwtConfiguration;
  timeouts?: AwsApigatewayv2AuthorizerArgsTimeouts;
}

export class aws_apigatewayv2_authorizer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2AuthorizerArgs) {
    const meta = {jwt_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_authorizer", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get authorizer_result_ttl_in_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.authorizer_result_ttl_in_seconds`;
  }

  get authorizer_type(): string {
    return `${this.resourceType}.${this.resourceName}.authorizer_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
