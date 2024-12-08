import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailInstanceArgsAddOn {
  snapshot_time: string;
  status: string;
  type: string;
}

export interface AwsLightsailInstanceArgs {
  availability_zone: string;
  blueprint_id: string;
  bundle_id: string;
  ip_address_type?: string;
  key_pair_name?: string;
  name: string;
  tags?: { [key: string]: string };
  user_data?: string;
  add_on?: AwsLightsailInstanceArgsAddOn;
}

export class aws_lightsail_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailInstanceArgs) {
    const meta = {add_on:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_instance", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get blueprint_id(): string {
    return `${this.resourceType}.${this.resourceName}.blueprint_id`;
  }

  get bundle_id(): string {
    return `${this.resourceType}.${this.resourceName}.bundle_id`;
  }

  get cpu_count(): string {
    return `${this.resourceType}.${this.resourceName}.cpu_count`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get is_static_ip(): string {
    return `${this.resourceType}.${this.resourceName}.is_static_ip`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get private_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip_address`;
  }

  get public_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip_address`;
  }

  get ram_size(): string {
    return `${this.resourceType}.${this.resourceName}.ram_size`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }
}
