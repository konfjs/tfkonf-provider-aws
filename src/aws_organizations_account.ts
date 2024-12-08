import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsAccountArgs {
  close_on_deletion?: boolean;
  create_govcloud?: boolean;
  email: string;
  iam_user_access_to_billing?: string;
  name: string;
  role_name?: string;
  tags?: { [key: string]: string };
}

export class aws_organizations_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOrganizationsAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_account", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get govcloud_id(): string {
    return `${this.resourceType}.${this.resourceName}.govcloud_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get joined_method(): string {
    return `${this.resourceType}.${this.resourceName}.joined_method`;
  }

  get joined_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.joined_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_id(): string {
    return `${this.resourceType}.${this.resourceName}.parent_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
