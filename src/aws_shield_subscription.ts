import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldSubscriptionArgs {
  skip_destroy?: boolean;
}

export class aws_shield_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsShieldSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_shield_subscription", resourceName);
  }

  get auto_renew(): string {
    return `${this.resourceType}.${this.resourceName}.auto_renew`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
