import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRolesanywhereProfileArgs {
  enabled?: boolean;
  managed_policy_arns?: string[];
  name: string;
  require_instance_properties?: boolean;
  role_arns?: string[];
  session_policy?: string;
  tags?: { [key: string]: string };
}

export class aws_rolesanywhere_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRolesanywhereProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_rolesanywhere_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get duration_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.duration_seconds`;
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
