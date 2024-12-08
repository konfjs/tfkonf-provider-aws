import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayDeploymentArgsCanarySettings {
  percent_traffic?: number;
  stage_variable_overrides?: { [key: string]: string };
  use_stage_cache?: boolean;
}

export interface AwsApiGatewayDeploymentArgs {
  description?: string;
  rest_api_id: string;
  stage_description?: string;
  stage_name?: string;
  triggers?: { [key: string]: string };
  variables?: { [key: string]: string };
  canary_settings?: AwsApiGatewayDeploymentArgsCanarySettings;
}

export class aws_api_gateway_deployment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayDeploymentArgs) {
    const meta = {canary_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_deployment", resourceName);
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get execution_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invoke_url(): string {
    return `${this.resourceType}.${this.resourceName}.invoke_url`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
