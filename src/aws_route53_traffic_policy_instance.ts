import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53TrafficPolicyInstanceArgs {
  hosted_zone_id: string;
  name: string;
  traffic_policy_id: string;
  traffic_policy_version: number;
  ttl: number;
}

export class aws_route53_traffic_policy_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53TrafficPolicyInstanceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_traffic_policy_instance", resourceName);
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get traffic_policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_policy_id`;
  }

  get traffic_policy_version(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_policy_version`;
  }

  get ttl(): string {
    return `${this.resourceType}.${this.resourceName}.ttl`;
  }
}
