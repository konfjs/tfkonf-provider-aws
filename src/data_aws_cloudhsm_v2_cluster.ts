import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudhsmV2ClusterArgs {
  cluster_id: string;
}

export class data_aws_cloudhsm_v2_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudhsmV2ClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudhsm_v2_cluster", resourceName);
  }

  get cluster_certificates(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_certificates`;
  }

  get cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get cluster_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_state`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get security_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
