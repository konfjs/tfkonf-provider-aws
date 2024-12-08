import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53TrafficPolicyArgs {
  comment?: string;
  document: string;
  name: string;
}

export class aws_route53_traffic_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53TrafficPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_traffic_policy", resourceName);
  }

  get document(): string {
    return `${this.resourceType}.${this.resourceName}.document`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
