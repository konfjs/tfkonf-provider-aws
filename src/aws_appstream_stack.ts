import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamStackArgsAccessEndpoints {
  endpoint_type: string;
}

export interface AwsAppstreamStackArgsApplicationSettings {
  enabled: boolean;
  settings_group?: string;
}

export interface AwsAppstreamStackArgsStorageConnectors {
  connector_type: string;
}

export interface AwsAppstreamStackArgsStreamingExperienceSettings {
  preferred_protocol?: string;
}

export interface AwsAppstreamStackArgsUserSettings {
  action: string;
  permission: string;
}

export interface AwsAppstreamStackArgs {
  description?: string;
  display_name?: string;
  name: string;
  tags?: { [key: string]: string };
  access_endpoints?: AwsAppstreamStackArgsAccessEndpoints[];
  application_settings?: AwsAppstreamStackArgsApplicationSettings;
  storage_connectors?: AwsAppstreamStackArgsStorageConnectors[];
  streaming_experience_settings?: AwsAppstreamStackArgsStreamingExperienceSettings;
  user_settings?: AwsAppstreamStackArgsUserSettings[];
}

export class aws_appstream_stack extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppstreamStackArgs) {
    const meta = {access_endpoints:{isBlock:true},application_settings:{isBlock:true},storage_connectors:{isBlock:true},streaming_experience_settings:{isBlock:true},user_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appstream_stack", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get embed_host_domains(): string {
    return `${this.resourceType}.${this.resourceName}.embed_host_domains`;
  }

  get feedback_url(): string {
    return `${this.resourceType}.${this.resourceName}.feedback_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get redirect_url(): string {
    return `${this.resourceType}.${this.resourceName}.redirect_url`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
