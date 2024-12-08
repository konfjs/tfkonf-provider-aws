import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsPolicyArgs {
  content: string;
  description?: string;
  name: string;
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
  type?: string;
}

export class aws_organizations_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOrganizationsPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
