import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigDeploymentStrategyArgs {
  deployment_duration_in_minutes: number;
  description?: string;
  final_bake_time_in_minutes?: number;
  growth_factor: number;
  growth_type?: string;
  name: string;
  replicate_to: string;
  tags?: { [key: string]: string };
}

export class aws_appconfig_deployment_strategy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppconfigDeploymentStrategyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_deployment_strategy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deployment_duration_in_minutes(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_duration_in_minutes`;
  }

  get growth_factor(): string {
    return `${this.resourceType}.${this.resourceName}.growth_factor`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get replicate_to(): string {
    return `${this.resourceType}.${this.resourceName}.replicate_to`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
