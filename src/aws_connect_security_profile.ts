import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectSecurityProfileArgs {
  description?: string;
  instance_id: string;
  name: string;
  permissions?: string[];
  tags?: { [key: string]: string };
}

export class aws_connect_security_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectSecurityProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_connect_security_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.organization_resource_id`;
  }

  get security_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_profile_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
