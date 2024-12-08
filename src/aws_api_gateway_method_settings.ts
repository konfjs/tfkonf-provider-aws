import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayMethodSettingsArgsSettings {
  throttling_burst_limit?: number;
  throttling_rate_limit?: number;
}

export interface AwsApiGatewayMethodSettingsArgs {
  method_path: string;
  rest_api_id: string;
  stage_name: string;
  settings: AwsApiGatewayMethodSettingsArgsSettings;
}

export class aws_api_gateway_method_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayMethodSettingsArgs) {
    const meta = {settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_method_settings", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get method_path(): string {
    return `${this.resourceType}.${this.resourceName}.method_path`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get stage_name(): string {
    return `${this.resourceType}.${this.resourceName}.stage_name`;
  }
}
