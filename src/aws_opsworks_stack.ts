import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksStackArgsCustomCookbooksSource {
  password?: string;
  revision?: string;
  ssh_key?: string;
  type: string;
  url: string;
  username?: string;
}

export interface AwsOpsworksStackArgsTimeouts {
  create?: string;
}

export interface AwsOpsworksStackArgs {
  berkshelf_version?: string;
  color?: string;
  configuration_manager_name?: string;
  configuration_manager_version?: string;
  custom_json?: string;
  default_instance_profile_arn: string;
  default_os?: string;
  default_root_device_type?: string;
  default_ssh_key_name?: string;
  hostname_theme?: string;
  manage_berkshelf?: boolean;
  name: string;
  region: string;
  service_role_arn: string;
  tags?: { [key: string]: string };
  use_custom_cookbooks?: boolean;
  use_opsworks_security_groups?: boolean;
  custom_cookbooks_source?: AwsOpsworksStackArgsCustomCookbooksSource;
  timeouts?: AwsOpsworksStackArgsTimeouts;
}

export class aws_opsworks_stack extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpsworksStackArgs) {
    const meta = {custom_cookbooks_source:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_stack", resourceName);
  }

  get agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.agent_version`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.default_availability_zone`;
  }

  get default_instance_profile_arn(): string {
    return `${this.resourceType}.${this.resourceName}.default_instance_profile_arn`;
  }

  get default_subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_subnet_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get service_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_role_arn`;
  }

  get stack_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.stack_endpoint`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
