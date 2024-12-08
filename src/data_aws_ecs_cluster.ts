import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcsClusterArgs {
  cluster_name: string;
}

export class data_aws_ecs_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEcsClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecs_cluster", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get pending_tasks_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.pending_tasks_count`;
  }

  get registered_container_instances_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.registered_container_instances_count`;
  }

  get running_tasks_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.running_tasks_count`;
  }

  get service_connect_defaults(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_connect_defaults`;
  }

  get setting(): string {
    return `data.${this.resourceType}.${this.resourceName}.setting`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
