import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftClusterIamRolesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRedshiftClusterIamRolesArgs {
  cluster_identifier: string;
  timeouts?: AwsRedshiftClusterIamRolesArgsTimeouts;
}

export class aws_redshift_cluster_iam_roles extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftClusterIamRolesArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_redshift_cluster_iam_roles", resourceName);
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get default_iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.default_iam_role_arn`;
  }

  get iam_role_arns(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arns`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
