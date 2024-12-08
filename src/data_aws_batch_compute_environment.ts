import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBatchComputeEnvironmentArgs {
  compute_environment_name: string;
}

export class data_aws_batch_compute_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBatchComputeEnvironmentArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_batch_compute_environment", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get compute_environment_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.compute_environment_name`;
  }

  get ecs_cluster_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.ecs_cluster_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get service_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_role`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get update_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_policy`;
  }
}
