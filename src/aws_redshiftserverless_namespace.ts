import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessNamespaceArgs {
  admin_user_password?: string;
  default_iam_role_arn?: string;
  log_exports?: string[];
  manage_admin_password?: boolean;
  namespace_name: string;
  tags?: { [key: string]: string };
}

export class aws_redshiftserverless_namespace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshiftserverless_namespace", resourceName);
  }

  get admin_password_secret_arn(): string {
    return `${this.resourceType}.${this.resourceName}.admin_password_secret_arn`;
  }

  get admin_password_secret_kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.admin_password_secret_kms_key_id`;
  }

  get admin_username(): string {
    return `${this.resourceType}.${this.resourceName}.admin_username`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get db_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_name`;
  }

  get iam_roles(): string {
    return `${this.resourceType}.${this.resourceName}.iam_roles`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get namespace_id(): string {
    return `${this.resourceType}.${this.resourceName}.namespace_id`;
  }

  get namespace_name(): string {
    return `${this.resourceType}.${this.resourceName}.namespace_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
