import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsReplicationSubnetGroupArgs {
  replication_subnet_group_description: string;
  replication_subnet_group_id: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
}

export class aws_dms_replication_subnet_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDmsReplicationSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dms_replication_subnet_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get replication_subnet_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.replication_subnet_group_arn`;
  }

  get replication_subnet_group_description(): string {
    return `${this.resourceType}.${this.resourceName}.replication_subnet_group_description`;
  }

  get replication_subnet_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.replication_subnet_group_id`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
