import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsResourcePolicyArgs {
  content: string;
  tags?: { [key: string]: string };
}

export class aws_organizations_resource_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOrganizationsResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_resource_policy", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
