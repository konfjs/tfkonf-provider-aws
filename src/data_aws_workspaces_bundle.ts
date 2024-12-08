import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWorkspacesBundleArgs {
  bundle_id?: string;
  name?: string;
  owner?: string;
}

export class data_aws_workspaces_bundle extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWorkspacesBundleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_workspaces_bundle", resourceName);
  }

  get compute_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.compute_type`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get root_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_storage`;
  }

  get user_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_storage`;
  }
}
