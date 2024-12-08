import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectUserHierarchyGroupArgs {
  instance_id: string;
  name: string;
  parent_group_id?: string;
  tags?: { [key: string]: string };
}

export class aws_connect_user_hierarchy_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectUserHierarchyGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_connect_user_hierarchy_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hierarchy_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.hierarchy_group_id`;
  }

  get hierarchy_path(): string {
    return `${this.resourceType}.${this.resourceName}.hierarchy_path`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get level_id(): string {
    return `${this.resourceType}.${this.resourceName}.level_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
