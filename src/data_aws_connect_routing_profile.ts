import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectRoutingProfileArgs {
  instance_id: string;
}

export class data_aws_connect_routing_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectRoutingProfileArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_routing_profile", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_outbound_queue_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_outbound_queue_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get media_concurrencies(): string {
    return `data.${this.resourceType}.${this.resourceName}.media_concurrencies`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get queue_configs(): string {
    return `data.${this.resourceType}.${this.resourceName}.queue_configs`;
  }

  get routing_profile_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.routing_profile_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
