import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftOrderableClusterArgs {
  preferred_node_types?: string[];
}

export class data_aws_redshift_orderable_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRedshiftOrderableClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshift_orderable_cluster", resourceName);
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get cluster_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_type`;
  }

  get cluster_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_type`;
  }
}
