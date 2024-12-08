import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudhsmV2ClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudhsmV2ClusterArgs {
  hsm_type: string;
  source_backup_identifier?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  timeouts?: AwsCloudhsmV2ClusterArgsTimeouts;
}

export class aws_cloudhsm_v2_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudhsmV2ClusterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudhsm_v2_cluster", resourceName);
  }

  get cluster_certificates(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_certificates`;
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get cluster_state(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_state`;
  }

  get hsm_type(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get mode(): string {
    return `${this.resourceType}.${this.resourceName}.mode`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
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
