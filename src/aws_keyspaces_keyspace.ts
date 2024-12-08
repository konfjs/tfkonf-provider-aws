import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKeyspacesKeyspaceArgsReplicationSpecification {
  region_list?: string[];
}

export interface AwsKeyspacesKeyspaceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsKeyspacesKeyspaceArgs {
  name: string;
  tags?: { [key: string]: string };
  replication_specification?: AwsKeyspacesKeyspaceArgsReplicationSpecification;
  timeouts?: AwsKeyspacesKeyspaceArgsTimeouts;
}

export class aws_keyspaces_keyspace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKeyspacesKeyspaceArgs) {
    const meta = {replication_specification:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_keyspaces_keyspace", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
