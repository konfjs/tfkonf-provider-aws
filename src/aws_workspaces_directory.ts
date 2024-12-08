import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorkspacesDirectoryArgsSamlProperties {
  relay_state_parameter_name?: string;
  status?: string;
  user_access_url?: string;
}

export interface AwsWorkspacesDirectoryArgsSelfServicePermissions {
  change_compute_type?: boolean;
  increase_volume_size?: boolean;
  rebuild_workspace?: boolean;
  restart_workspace?: boolean;
  switch_running_mode?: boolean;
}

export interface AwsWorkspacesDirectoryArgsWorkspaceAccessProperties {
  device_type_android?: string;
  device_type_chromeos?: string;
  device_type_ios?: string;
  device_type_linux?: string;
  device_type_osx?: string;
  device_type_web?: string;
  device_type_windows?: string;
  device_type_zeroclient?: string;
}

export interface AwsWorkspacesDirectoryArgsWorkspaceCreationProperties {
  custom_security_group_id?: string;
  default_ou?: string;
  enable_internet_access?: boolean;
  enable_maintenance_mode?: boolean;
  user_enabled_as_local_administrator?: boolean;
}

export interface AwsWorkspacesDirectoryArgs {
  directory_id: string;
  tags?: { [key: string]: string };
  saml_properties?: AwsWorkspacesDirectoryArgsSamlProperties;
  self_service_permissions?: AwsWorkspacesDirectoryArgsSelfServicePermissions;
  workspace_access_properties?: AwsWorkspacesDirectoryArgsWorkspaceAccessProperties;
  workspace_creation_properties?: AwsWorkspacesDirectoryArgsWorkspaceCreationProperties;
}

export class aws_workspaces_directory extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWorkspacesDirectoryArgs) {
    const meta = {saml_properties:{isBlock:true},self_service_permissions:{isBlock:true},workspace_access_properties:{isBlock:true},workspace_creation_properties:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_workspaces_directory", resourceName);
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get customer_user_name(): string {
    return `${this.resourceType}.${this.resourceName}.customer_user_name`;
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get directory_name(): string {
    return `${this.resourceType}.${this.resourceName}.directory_name`;
  }

  get directory_type(): string {
    return `${this.resourceType}.${this.resourceName}.directory_type`;
  }

  get dns_ip_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.dns_ip_addresses`;
  }

  get iam_role_id(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.ip_group_ids`;
  }

  get registration_code(): string {
    return `${this.resourceType}.${this.resourceName}.registration_code`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get workspace_security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_security_group_id`;
  }
}
