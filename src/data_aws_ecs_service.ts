import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcsServiceArgs {
  cluster_arn: string;
  service_name: string;
}

export class data_aws_ecs_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcsServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecs_service", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone_rebalancing(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_rebalancing`;
  }

  get cluster_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get desired_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.desired_count`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get launch_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.launch_type`;
  }

  get scheduling_strategy(): string {
    return `data.${this.resourceType}.${this.resourceName}.scheduling_strategy`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get task_definition(): string {
    return `data.${this.resourceType}.${this.resourceName}.task_definition`;
  }
}
