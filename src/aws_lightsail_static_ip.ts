import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailStaticIpArgs {
  name: string;
}

export class aws_lightsail_static_ip extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailStaticIpArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_static_ip", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }
}
