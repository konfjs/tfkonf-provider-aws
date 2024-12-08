import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDmsReplicationSubnetGroupArgs {
  replication_subnet_group_id: string;
}

export class data_aws_dms_replication_subnet_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDmsReplicationSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dms_replication_subnet_group", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get replication_subnet_group_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_subnet_group_arn`;
  }

  get replication_subnet_group_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_subnet_group_description`;
  }

  get replication_subnet_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_subnet_group_id`;
  }

  get subnet_group_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_group_status`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
