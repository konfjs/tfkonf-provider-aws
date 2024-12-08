import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksPermissionArgs {
  stack_id: string;
  user_arn: string;
}

export class aws_opsworks_permission extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpsworksPermissionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_permission", resourceName);
  }

  get allow_ssh(): string {
    return `${this.resourceType}.${this.resourceName}.allow_ssh`;
  }

  get allow_sudo(): string {
    return `${this.resourceType}.${this.resourceName}.allow_sudo`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get level(): string {
    return `${this.resourceType}.${this.resourceName}.level`;
  }

  get stack_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_id`;
  }

  get user_arn(): string {
    return `${this.resourceType}.${this.resourceName}.user_arn`;
  }
}
