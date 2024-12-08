import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftserverlessCredentialsArgs {
  db_name?: string;
  duration_seconds?: number;
  workgroup_name: string;
}

export class data_aws_redshiftserverless_credentials extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRedshiftserverlessCredentialsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshiftserverless_credentials", resourceName);
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

  get workgroup_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.workgroup_name`;
  }
}
