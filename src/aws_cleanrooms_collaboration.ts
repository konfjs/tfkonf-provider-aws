import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCleanroomsCollaborationArgsDataEncryptionMetadata {
  allow_clear_text: boolean;
  allow_duplicates: boolean;
  allow_joins_on_columns_with_different_names: boolean;
  preserve_nulls: boolean;
}

export interface AwsCleanroomsCollaborationArgsMember {
  account_id: string;
  display_name: string;
  member_abilities: string[];
}

export interface AwsCleanroomsCollaborationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCleanroomsCollaborationArgs {
  creator_display_name: string;
  creator_member_abilities: string[];
  description: string;
  name: string;
  query_log_status: string;
  tags?: { [key: string]: string };
  data_encryption_metadata?: AwsCleanroomsCollaborationArgsDataEncryptionMetadata;
  member?: AwsCleanroomsCollaborationArgsMember[];
  timeouts?: AwsCleanroomsCollaborationArgsTimeouts;
}

export class aws_cleanrooms_collaboration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCleanroomsCollaborationArgs) {
    const meta = {data_encryption_metadata:{isBlock:true},member:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cleanrooms_collaboration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator_display_name(): string {
    return `${this.resourceType}.${this.resourceName}.creator_display_name`;
  }

  get creator_member_abilities(): string {
    return `${this.resourceType}.${this.resourceName}.creator_member_abilities`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get query_log_status(): string {
    return `${this.resourceType}.${this.resourceName}.query_log_status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
