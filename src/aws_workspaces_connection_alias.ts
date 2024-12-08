import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorkspacesConnectionAliasArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsWorkspacesConnectionAliasArgs {
  connection_string: string;
  tags?: { [key: string]: string };
  timeouts?: AwsWorkspacesConnectionAliasArgsTimeouts;
}

export class aws_workspaces_connection_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWorkspacesConnectionAliasArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_workspaces_connection_alias", resourceName);
  }

  get connection_string(): string {
    return `${this.resourceType}.${this.resourceName}.connection_string`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
