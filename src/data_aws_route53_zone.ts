import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ZoneArgs {
  private_zone?: boolean;
}

export class data_aws_route53_zone extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ZoneArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_zone", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get caller_reference(): string {
    return `data.${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get comment(): string {
    return `data.${this.resourceType}.${this.resourceName}.comment`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get linked_service_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.linked_service_description`;
  }

  get linked_service_principal(): string {
    return `data.${this.resourceType}.${this.resourceName}.linked_service_principal`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get name_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_servers`;
  }

  get primary_name_server(): string {
    return `data.${this.resourceType}.${this.resourceName}.primary_name_server`;
  }

  get resource_record_set_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_record_set_count`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
