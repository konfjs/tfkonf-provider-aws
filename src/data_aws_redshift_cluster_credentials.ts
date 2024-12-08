import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftClusterCredentialsArgs {
  auto_create?: boolean;
  cluster_identifier: string;
  db_groups?: string[];
  db_name?: string;
  db_user: string;
  duration_seconds?: number;
}

export class data_aws_redshift_cluster_credentials extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRedshiftClusterCredentialsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshift_cluster_credentials", resourceName);
  }

  get cluster_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get db_password(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_password`;
  }

  get db_user(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_user`;
  }

  get expiration(): string {
    return `data.${this.resourceType}.${this.resourceName}.expiration`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
