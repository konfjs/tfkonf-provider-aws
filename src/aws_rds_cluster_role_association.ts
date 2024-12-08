import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsClusterRoleAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRdsClusterRoleAssociationArgs {
  db_cluster_identifier: string;
  feature_name: string;
  role_arn: string;
  timeouts?: AwsRdsClusterRoleAssociationArgsTimeouts;
}

export class aws_rds_cluster_role_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRdsClusterRoleAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_cluster_role_association", resourceName);
  }

  get db_cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.db_cluster_identifier`;
  }

  get feature_name(): string {
    return `${this.resourceType}.${this.resourceName}.feature_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }
}
