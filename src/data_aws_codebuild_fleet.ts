import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodebuildFleetArgs {
  name: string;
}

export class data_aws_codebuild_fleet extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCodebuildFleetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codebuild_fleet", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_capacity`;
  }

  get compute_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.compute_type`;
  }

  get created(): string {
    return `data.${this.resourceType}.${this.resourceName}.created`;
  }

  get environment_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment_type`;
  }

  get fleet_service_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.fleet_service_role`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_id`;
  }

  get last_modified(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get overflow_behavior(): string {
    return `data.${this.resourceType}.${this.resourceName}.overflow_behavior`;
  }

  get scaling_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.scaling_configuration`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_config`;
  }
}
