import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotRoleAliasArgs {
  alias: string;
  credential_duration?: number;
  role_arn: string;
  tags?: { [key: string]: string };
}

export class aws_iot_role_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotRoleAliasArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_role_alias", resourceName);
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
