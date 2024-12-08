import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPlacementGroupArgs {
  name: string;
  strategy: string;
  tags?: { [key: string]: string };
}

export class aws_placement_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPlacementGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_placement_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get partition_count(): string {
    return `${this.resourceType}.${this.resourceName}.partition_count`;
  }

  get placement_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.placement_group_id`;
  }

  get spread_level(): string {
    return `${this.resourceType}.${this.resourceName}.spread_level`;
  }

  get strategy(): string {
    return `${this.resourceType}.${this.resourceName}.strategy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
