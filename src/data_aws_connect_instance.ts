import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectInstanceArgs {
}

export class data_aws_connect_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_instance", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_resolve_best_voices_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_resolve_best_voices_enabled`;
  }

  get contact_flow_logs_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_flow_logs_enabled`;
  }

  get contact_lens_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_lens_enabled`;
  }

  get created_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_time`;
  }

  get early_media_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.early_media_enabled`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_management_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_management_type`;
  }

  get inbound_calls_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.inbound_calls_enabled`;
  }

  get instance_alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_alias`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get multi_party_conference_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_party_conference_enabled`;
  }

  get outbound_calls_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.outbound_calls_enabled`;
  }

  get service_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_role`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
