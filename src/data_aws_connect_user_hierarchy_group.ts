import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectUserHierarchyGroupArgs {
  instance_id: string;
}

export class data_aws_connect_user_hierarchy_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectUserHierarchyGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_user_hierarchy_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get hierarchy_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hierarchy_group_id`;
  }

  get hierarchy_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.hierarchy_path`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get level_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.level_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
