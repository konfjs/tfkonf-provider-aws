import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGlobalacceleratorAcceleratorArgs {
}

export class data_aws_globalaccelerator_accelerator extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsGlobalacceleratorAcceleratorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_globalaccelerator_accelerator", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.attributes`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get dual_stack_dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dual_stack_dns_name`;
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get hosted_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get ip_sets(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_sets`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
