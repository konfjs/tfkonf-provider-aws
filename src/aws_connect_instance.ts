import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectInstanceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsConnectInstanceArgs {
  auto_resolve_best_voices_enabled?: boolean;
  contact_flow_logs_enabled?: boolean;
  contact_lens_enabled?: boolean;
  directory_id?: string;
  early_media_enabled?: boolean;
  identity_management_type: string;
  inbound_calls_enabled: boolean;
  instance_alias?: string;
  multi_party_conference_enabled?: boolean;
  outbound_calls_enabled: boolean;
  tags?: { [key: string]: string };
  timeouts?: AwsConnectInstanceArgsTimeouts;
}

export class aws_connect_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_instance", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_management_type(): string {
    return `${this.resourceType}.${this.resourceName}.identity_management_type`;
  }

  get inbound_calls_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.inbound_calls_enabled`;
  }

  get outbound_calls_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.outbound_calls_enabled`;
  }

  get service_role(): string {
    return `${this.resourceType}.${this.resourceName}.service_role`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
