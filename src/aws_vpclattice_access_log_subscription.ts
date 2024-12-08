import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeAccessLogSubscriptionArgs {
  destination_arn: string;
  resource_identifier: string;
  tags?: { [key: string]: string };
}

export class aws_vpclattice_access_log_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpclatticeAccessLogSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_access_log_subscription", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get resource_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.resource_identifier`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
