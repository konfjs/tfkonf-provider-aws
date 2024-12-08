import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewaySmbFileShareArgsCacheAttributes {
  cache_stale_timeout_in_seconds?: number;
}

export interface AwsStoragegatewaySmbFileShareArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsStoragegatewaySmbFileShareArgs {
  access_based_enumeration?: boolean;
  admin_user_list?: string[];
  audit_destination_arn?: string;
  authentication?: string;
  bucket_region?: string;
  case_sensitivity?: string;
  default_storage_class?: string;
  gateway_arn: string;
  guess_mime_type_enabled?: boolean;
  invalid_user_list?: string[];
  kms_encrypted?: boolean;
  kms_key_arn?: string;
  location_arn: string;
  notification_policy?: string;
  object_acl?: string;
  read_only?: boolean;
  requester_pays?: boolean;
  role_arn: string;
  smb_acl_enabled?: boolean;
  tags?: { [key: string]: string };
  valid_user_list?: string[];
  vpc_endpoint_dns_name?: string;
  cache_attributes?: AwsStoragegatewaySmbFileShareArgsCacheAttributes;
  timeouts?: AwsStoragegatewaySmbFileShareArgsTimeouts;
}

export class aws_storagegateway_smb_file_share extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsStoragegatewaySmbFileShareArgs) {
    const meta = {cache_attributes:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_smb_file_share", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get oplocks_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.oplocks_enabled`;
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
