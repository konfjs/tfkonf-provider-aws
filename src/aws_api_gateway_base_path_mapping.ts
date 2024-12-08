import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayBasePathMappingArgs {
  api_id: string;
  base_path?: string;
  domain_name: string;
  stage_name?: string;
}

export class aws_api_gateway_base_path_mapping extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayBasePathMappingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_base_path_mapping", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
