import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWorkspacesDirectoryArgs {
  directory_id: string;
}

export class data_aws_workspaces_directory extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsWorkspacesDirectoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_workspaces_directory", resourceName);
  }

  get alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.alias`;
  }

  get customer_user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_user_name`;
  }

  get directory_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get directory_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_name`;
  }

  get directory_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_type`;
  }

  get dns_ip_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_ip_addresses`;
  }

  get iam_role_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_role_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_group_ids`;
  }

  get registration_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.registration_code`;
  }

  get saml_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.saml_properties`;
  }

  get self_service_permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_service_permissions`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get workspace_access_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_access_properties`;
  }

  get workspace_creation_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_creation_properties`;
  }

  get workspace_security_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.workspace_security_group_id`;
  }
}
