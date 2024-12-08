import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftserverlessNamespaceArgs {
  namespace_name: string;
}

export class data_aws_redshiftserverless_namespace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRedshiftserverlessNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshiftserverless_namespace", resourceName);
  }

  get admin_username(): string {
    return `data.${this.resourceType}.${this.resourceName}.admin_username`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get db_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_name`;
  }

  get default_iam_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_iam_role_arn`;
  }

  get iam_roles(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_roles`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get log_exports(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_exports`;
  }

  get namespace_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.namespace_id`;
  }

  get namespace_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.namespace_name`;
  }
}
