import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloud9EnvironmentMembershipArgs {
  environment_id: string;
  permissions: string;
  user_arn: string;
}

export class aws_cloud9_environment_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloud9EnvironmentMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloud9_environment_membership", resourceName);
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get permissions(): string {
    return `${this.resourceType}.${this.resourceName}.permissions`;
  }

  get user_arn(): string {
    return `${this.resourceType}.${this.resourceName}.user_arn`;
  }

  get user_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_id`;
  }
}
