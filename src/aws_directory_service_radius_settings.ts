import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceRadiusSettingsArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsDirectoryServiceRadiusSettingsArgs {
  authentication_protocol: string;
  directory_id: string;
  display_label: string;
  radius_port: number;
  radius_retries: number;
  radius_servers: string[];
  radius_timeout: number;
  shared_secret: string;
  use_same_username?: boolean;
  timeouts?: AwsDirectoryServiceRadiusSettingsArgsTimeouts;
}

export class aws_directory_service_radius_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDirectoryServiceRadiusSettingsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_radius_settings", resourceName);
  }

  get authentication_protocol(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_protocol`;
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get display_label(): string {
    return `${this.resourceType}.${this.resourceName}.display_label`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get radius_port(): string {
    return `${this.resourceType}.${this.resourceName}.radius_port`;
  }

  get radius_retries(): string {
    return `${this.resourceType}.${this.resourceName}.radius_retries`;
  }

  get radius_servers(): string {
    return `${this.resourceType}.${this.resourceName}.radius_servers`;
  }

  get radius_timeout(): string {
    return `${this.resourceType}.${this.resourceName}.radius_timeout`;
  }

  get shared_secret(): string {
    return `${this.resourceType}.${this.resourceName}.shared_secret`;
  }
}
