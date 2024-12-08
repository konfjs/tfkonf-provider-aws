import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectUserHierarchyStructureArgs {
  instance_id: string;
}

export class data_aws_connect_user_hierarchy_structure extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectUserHierarchyStructureArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_user_hierarchy_structure", resourceName);
  }

  get hierarchy_structure(): string {
    return `data.${this.resourceType}.${this.resourceName}.hierarchy_structure`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }
}
