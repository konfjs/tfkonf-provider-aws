import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbHttpsRedirectionPolicyArgs {
  enabled: boolean;
  lb_name: string;
}

export class aws_lightsail_lb_https_redirection_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailLbHttpsRedirectionPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_lb_https_redirection_policy", resourceName);
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
