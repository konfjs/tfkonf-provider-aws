import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayNfsFileShareArgsCacheAttributes {
  cache_stale_timeout_in_seconds?: number;
}

export interface AwsStoragegatewayNfsFileShareArgsNfsFileShareDefaults {
  directory_mode?: string;
  file_mode?: string;
  group_id?: string;
  owner_id?: string;
}

export interface AwsStoragegatewayNfsFileShareArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsStoragegatewayNfsFileShareArgs {
  audit_destination_arn?: string;
  bucket_region?: string;
  client_list: string[];
  default_storage_class?: string;
  gateway_arn: string;
  guess_mime_type_enabled?: boolean;
  kms_encrypted?: boolean;
  kms_key_arn?: string;
  location_arn: string;
  notification_policy?: string;
  object_acl?: string;
  read_only?: boolean;
  requester_pays?: boolean;
  role_arn: string;
  squash?: string;
  tags?: { [key: string]: string };
  vpc_endpoint_dns_name?: string;
  cache_attributes?: AwsStoragegatewayNfsFileShareArgsCacheAttributes;
  nfs_file_share_defaults?: AwsStoragegatewayNfsFileShareArgsNfsFileShareDefaults;
  timeouts?: AwsStoragegatewayNfsFileShareArgsTimeouts;
}

export class aws_storagegateway_nfs_file_share extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsStoragegatewayNfsFileShareArgs) {
    const meta = {cache_attributes:{isBlock:true},nfs_file_share_defaults:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_nfs_file_share", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get client_list(): string {
    return `${this.resourceType}.${this.resourceName}.client_list`;
  }

  get file_share_name(): string {
    return `${this.resourceType}.${this.resourceName}.file_share_name`;
  }

  get fileshare_id(): string {
    return `${this.resourceType}.${this.resourceName}.fileshare_id`;
  }

  get gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_arn(): string {
    return `${this.resourceType}.${this.resourceName}.location_arn`;
  }

  get path(): string {
    return `${this.resourceType}.${this.resourceName}.path`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
