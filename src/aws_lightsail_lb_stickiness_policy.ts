import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbStickinessPolicyArgs {
  cookie_duration: number;
  enabled: boolean;
  lb_name: string;
}

export class aws_lightsail_lb_stickiness_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailLbStickinessPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_lb_stickiness_policy", resourceName);
  }

  get cookie_duration(): string {
    return `${this.resourceType}.${this.resourceName}.cookie_duration`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lb_name(): string {
    return `${this.resourceType}.${this.resourceName}.lb_name`;
  }
}
