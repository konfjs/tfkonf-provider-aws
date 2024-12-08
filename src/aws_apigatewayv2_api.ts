import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2ApiArgsCorsConfiguration {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  expose_headers?: string[];
  max_age?: number;
}

export interface AwsApigatewayv2ApiArgs {
  api_key_selection_expression?: string;
  body?: string;
  credentials_arn?: string;
  description?: string;
  disable_execute_api_endpoint?: boolean;
  fail_on_warnings?: boolean;
  name: string;
  protocol_type: string;
  route_key?: string;
  route_selection_expression?: string;
  tags?: { [key: string]: string };
  target?: string;
  version?: string;
  cors_configuration?: AwsApigatewayv2ApiArgsCorsConfiguration;
}

export class aws_apigatewayv2_api extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2ApiArgs) {
    const meta = {cors_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_api", resourceName);
  }

  get api_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.api_endpoint`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get execution_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get protocol_type(): string {
    return `${this.resourceType}.${this.resourceName}.protocol_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
