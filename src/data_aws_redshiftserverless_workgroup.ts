import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftserverlessWorkgroupArgs {
  workgroup_name: string;
}

export class data_aws_redshiftserverless_workgroup extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRedshiftserverlessWorkgroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshiftserverless_workgroup", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get enhanced_vpc_routing(): string {
    return `data.${this.resourceType}.${this.resourceName}.enhanced_vpc_routing`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get namespace_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.namespace_name`;
  }

  get publicly_accessible(): string {
    return `data.${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get workgroup_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.workgroup_id`;
  }

  get workgroup_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.workgroup_name`;
  }
}
