import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2RouteArgsRequestParameter {
  request_parameter_key: string;
  required: boolean;
}

export interface AwsApigatewayv2RouteArgs {
  api_id: string;
  api_key_required?: boolean;
  authorization_scopes?: string[];
  authorization_type?: string;
  authorizer_id?: string;
  model_selection_expression?: string;
  operation_name?: string;
  request_models?: { [key: string]: string };
  route_key: string;
  route_response_selection_expression?: string;
  target?: string;
  request_parameter?: AwsApigatewayv2RouteArgsRequestParameter[];
}

export class aws_apigatewayv2_route extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2RouteArgs) {
    const meta = {request_parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_route", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get route_key(): string {
    return `${this.resourceType}.${this.resourceName}.route_key`;
  }
}
