import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWorkspacesWorkspaceArgs {
}

export class data_aws_workspaces_workspace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsWorkspacesWorkspaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_workspaces_workspace", resourceName);
  }

  get bundle_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.bundle_id`;
  }

  get computer_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.computer_name`;
  }

  get directory_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get root_volume_encryption_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_volume_encryption_enabled`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }

  get user_volume_encryption_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_volume_encryption_enabled`;
  }

  get volume_encryption_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.volume_encryption_key`;
  }

  get workspace_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_id`;
  }

  get workspace_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_properties`;
  }
}
