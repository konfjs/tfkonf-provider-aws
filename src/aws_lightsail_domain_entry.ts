import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDomainEntryArgs {
  domain_name: string;
  is_alias?: boolean;
  name: string;
  target: string;
  type: string;
}

export class aws_lightsail_domain_entry extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailDomainEntryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_domain_entry", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get target(): string {
    return `${this.resourceType}.${this.resourceName}.target`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
