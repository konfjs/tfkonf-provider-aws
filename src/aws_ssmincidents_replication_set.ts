import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmincidentsReplicationSetArgsRegion {
  kms_key_arn?: string;
  name: string;
}

export interface AwsSsmincidentsReplicationSetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSsmincidentsReplicationSetArgs {
  tags?: { [key: string]: string };
  region: AwsSsmincidentsReplicationSetArgsRegion[];
  timeouts?: AwsSsmincidentsReplicationSetArgsTimeouts;
}

export class aws_ssmincidents_replication_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmincidentsReplicationSetArgs) {
    const meta = {region:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssmincidents_replication_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get deletion_protected(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_protected`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_by(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_by`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
