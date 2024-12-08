import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationExpiration {
  days?: number;
}

export interface AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationTransition {
  days?: number;
  storage_class?: string;
}

export interface AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfiguration {
  expiration?: AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationExpiration[];
  transition?: AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationTransition[];
}

export interface AwsSecuritylakeDataLakeArgsConfigurationReplicationConfiguration {
  regions?: string[];
  role_arn?: string;
}

export interface AwsSecuritylakeDataLakeArgsConfiguration {
  region: string;
  lifecycle_configuration?: AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfiguration[];
  replication_configuration?: AwsSecuritylakeDataLakeArgsConfigurationReplicationConfiguration[];
}

export interface AwsSecuritylakeDataLakeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSecuritylakeDataLakeArgs {
  meta_store_manager_role_arn: string;
  tags?: { [key: string]: string };
  configuration?: AwsSecuritylakeDataLakeArgsConfiguration[];
  timeouts?: AwsSecuritylakeDataLakeArgsTimeouts;
}

export class aws_securitylake_data_lake extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecuritylakeDataLakeArgs) {
    const meta = {configuration:{isBlock:true,lifecycle_configuration:{isBlock:true,expiration:{isBlock:true},transition:{isBlock:true}},replication_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_securitylake_data_lake", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get meta_store_manager_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.meta_store_manager_role_arn`;
  }

  get s3_bucket_arn(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
