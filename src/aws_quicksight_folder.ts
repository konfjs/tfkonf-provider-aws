import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightFolderArgsPermissions {
  actions: string[];
  principal: string;
}

export interface AwsQuicksightFolderArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsQuicksightFolderArgs {
  folder_id: string;
  folder_type?: string;
  name?: string;
  parent_folder_arn?: string;
  tags?: { [key: string]: string };
  permissions?: AwsQuicksightFolderArgsPermissions[];
  timeouts?: AwsQuicksightFolderArgsTimeouts;
}

export class aws_quicksight_folder extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightFolderArgs) {
    const meta = {permissions:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_folder", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get folder_id(): string {
    return `${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get folder_path(): string {
    return `${this.resourceType}.${this.resourceName}.folder_path`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
