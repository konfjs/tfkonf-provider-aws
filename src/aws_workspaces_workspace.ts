import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorkspacesWorkspaceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsWorkspacesWorkspaceArgsWorkspaceProperties {
  compute_type_name?: string;
  root_volume_size_gib?: number;
  running_mode?: string;
  user_volume_size_gib?: number;
}

export interface AwsWorkspacesWorkspaceArgs {
  bundle_id: string;
  directory_id: string;
  root_volume_encryption_enabled?: boolean;
  tags?: { [key: string]: string };
  user_name: string;
  user_volume_encryption_enabled?: boolean;
  volume_encryption_key?: string;
  timeouts?: AwsWorkspacesWorkspaceArgsTimeouts;
  workspace_properties?: AwsWorkspacesWorkspaceArgsWorkspaceProperties;
}

export class aws_workspaces_workspace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWorkspacesWorkspaceArgs) {
    const meta = {timeouts:{isBlock:true},workspace_properties:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_workspaces_workspace", resourceName);
  }

  get bundle_id(): string {
    return `${this.resourceType}.${this.resourceName}.bundle_id`;
  }

  get computer_name(): string {
    return `${this.resourceType}.${this.resourceName}.computer_name`;
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
