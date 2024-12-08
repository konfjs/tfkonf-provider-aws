import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldApplicationLayerAutomaticResponseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsShieldApplicationLayerAutomaticResponseArgs {
  action: string;
  resource_arn: string;
  timeouts?: AwsShieldApplicationLayerAutomaticResponseArgsTimeouts;
}

export class aws_shield_application_layer_automatic_response extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsShieldApplicationLayerAutomaticResponseArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_shield_application_layer_automatic_response", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
