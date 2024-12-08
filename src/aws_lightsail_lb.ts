import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbArgs {
  health_check_path?: string;
  instance_port: number;
  ip_address_type?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_lb extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailLbArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_lb", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_port(): string {
    return `${this.resourceType}.${this.resourceName}.instance_port`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get public_ports(): string {
    return `${this.resourceType}.${this.resourceName}.public_ports`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
