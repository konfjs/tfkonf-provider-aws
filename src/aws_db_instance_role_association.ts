import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbInstanceRoleAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDbInstanceRoleAssociationArgs {
  db_instance_identifier: string;
  feature_name: string;
  role_arn: string;
  timeouts?: AwsDbInstanceRoleAssociationArgsTimeouts;
}

export class aws_db_instance_role_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDbInstanceRoleAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_instance_role_association", resourceName);
  }

  get db_instance_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.db_instance_identifier`;
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
