import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksRdsDbInstanceArgs {
  db_password: string;
  db_user: string;
  rds_db_instance_arn: string;
  stack_id: string;
}

export class aws_opsworks_rds_db_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpsworksRdsDbInstanceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_rds_db_instance", resourceName);
  }

  get db_password(): string {
    return `${this.resourceType}.${this.resourceName}.db_password`;
  }

  get db_user(): string {
    return `${this.resourceType}.${this.resourceName}.db_user`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rds_db_instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.rds_db_instance_arn`;
  }

  get stack_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_id`;
  }
}
