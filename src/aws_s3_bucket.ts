import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketArgsCorsRule {
  allowed_headers?: string[];
  allowed_methods: string[];
  allowed_origins: string[];
  expose_headers?: string[];
  max_age_seconds?: number;
}

export interface AwsS3BucketArgsGrant {
  id?: string;
  permissions: string[];
  type: string;
  uri?: string;
}

export interface AwsS3BucketArgsLifecycleRuleExpiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}

export interface AwsS3BucketArgsLifecycleRuleNoncurrentVersionExpiration {
  days?: number;
}

export interface AwsS3BucketArgsLifecycleRuleNoncurrentVersionTransition {
  days?: number;
  storage_class: string;
}

export interface AwsS3BucketArgsLifecycleRuleTransition {
  date?: string;
  days?: number;
  storage_class: string;
}

export interface AwsS3BucketArgsLifecycleRule {
  abort_incomplete_multipart_upload_days?: number;
  enabled: boolean;
  prefix?: string;
  tags?: { [key: string]: string };
  expiration?: AwsS3BucketArgsLifecycleRuleExpiration;
  noncurrent_version_expiration?: AwsS3BucketArgsLifecycleRuleNoncurrentVersionExpiration;
  noncurrent_version_transition?: AwsS3BucketArgsLifecycleRuleNoncurrentVersionTransition[];
  transition?: AwsS3BucketArgsLifecycleRuleTransition[];
}

export interface AwsS3BucketArgsLogging {
  target_bucket: string;
  target_prefix?: string;
}

export interface AwsS3BucketArgsObjectLockConfigurationRuleDefaultRetention {
  days?: number;
  mode: string;
  years?: number;
}

export interface AwsS3BucketArgsObjectLockConfigurationRule {
  default_retention: AwsS3BucketArgsObjectLockConfigurationRuleDefaultRetention;
}

export interface AwsS3BucketArgsObjectLockConfiguration {
  object_lock_enabled?: string;
  rule?: AwsS3BucketArgsObjectLockConfigurationRule;
}

export interface AwsS3BucketArgsReplicationConfigurationRulesDestinationAccessControlTranslation {
  owner: string;
}

export interface AwsS3BucketArgsReplicationConfigurationRulesDestinationMetrics {
  minutes?: number;
  status?: string;
}

export interface AwsS3BucketArgsReplicationConfigurationRulesDestinationReplicationTime {
  minutes?: number;
  status?: string;
}

export interface AwsS3BucketArgsReplicationConfigurationRulesDestination {
  account_id?: string;
  bucket: string;
  replica_kms_key_id?: string;
  storage_class?: string;
  access_control_translation?: AwsS3BucketArgsReplicationConfigurationRulesDestinationAccessControlTranslation;
  metrics?: AwsS3BucketArgsReplicationConfigurationRulesDestinationMetrics;
  replication_time?: AwsS3BucketArgsReplicationConfigurationRulesDestinationReplicationTime;
}

export interface AwsS3BucketArgsReplicationConfigurationRulesFilter {
  prefix?: string;
  tags?: { [key: string]: string };
}

export interface AwsS3BucketArgsReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  enabled: boolean;
}

export interface AwsS3BucketArgsReplicationConfigurationRulesSourceSelectionCriteria {
  sse_kms_encrypted_objects?: AwsS3BucketArgsReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export interface AwsS3BucketArgsReplicationConfigurationRules {
  delete_marker_replication_status?: string;
  id?: string;
  prefix?: string;
  priority?: number;
  status: string;
  destination: AwsS3BucketArgsReplicationConfigurationRulesDestination;
  filter?: AwsS3BucketArgsReplicationConfigurationRulesFilter;
  source_selection_criteria?: AwsS3BucketArgsReplicationConfigurationRulesSourceSelectionCriteria;
}

export interface AwsS3BucketArgsReplicationConfiguration {
  role: string;
  rules: AwsS3BucketArgsReplicationConfigurationRules[];
}

export interface AwsS3BucketArgsServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
  kms_master_key_id?: string;
  sse_algorithm: string;
}

export interface AwsS3BucketArgsServerSideEncryptionConfigurationRule {
  bucket_key_enabled?: boolean;
  apply_server_side_encryption_by_default: AwsS3BucketArgsServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
}

export interface AwsS3BucketArgsServerSideEncryptionConfiguration {
  rule: AwsS3BucketArgsServerSideEncryptionConfigurationRule;
}

export interface AwsS3BucketArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsS3BucketArgsVersioning {
  enabled?: boolean;
  mfa_delete?: boolean;
}

export interface AwsS3BucketArgsWebsite {
  error_document?: string;
  index_document?: string;
  redirect_all_requests_to?: string;
  routing_rules?: string;
}

export interface AwsS3BucketArgs {
  force_destroy?: boolean;
  tags?: { [key: string]: string };
  cors_rule?: AwsS3BucketArgsCorsRule[];
  grant?: AwsS3BucketArgsGrant[];
  lifecycle_rule?: AwsS3BucketArgsLifecycleRule[];
  logging?: AwsS3BucketArgsLogging;
  object_lock_configuration?: AwsS3BucketArgsObjectLockConfiguration;
  replication_configuration?: AwsS3BucketArgsReplicationConfiguration;
  server_side_encryption_configuration?: AwsS3BucketArgsServerSideEncryptionConfiguration;
  timeouts?: AwsS3BucketArgsTimeouts;
  versioning?: AwsS3BucketArgsVersioning;
  website?: AwsS3BucketArgsWebsite;
}

export class aws_s3_bucket extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketArgs) {
    const meta = {cors_rule:{isBlock:true},grant:{isBlock:true},lifecycle_rule:{isBlock:true,expiration:{isBlock:true},noncurrent_version_expiration:{isBlock:true},noncurrent_version_transition:{isBlock:true},transition:{isBlock:true}},logging:{isBlock:true},object_lock_configuration:{isBlock:true,rule:{isBlock:true,default_retention:{isBlock:true}}},replication_configuration:{isBlock:true,rules:{isBlock:true,destination:{isBlock:true,access_control_translation:{isBlock:true},metrics:{isBlock:true},replication_time:{isBlock:true}},filter:{isBlock:true},source_selection_criteria:{isBlock:true,sse_kms_encrypted_objects:{isBlock:true}}}},server_side_encryption_configuration:{isBlock:true,rule:{isBlock:true,apply_server_side_encryption_by_default:{isBlock:true}}},timeouts:{isBlock:true},versioning:{isBlock:true},website:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket", resourceName);
  }

  get acceleration_status(): string {
    return `${this.resourceType}.${this.resourceName}.acceleration_status`;
  }

  get acl(): string {
    return `${this.resourceType}.${this.resourceName}.acl`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get bucket_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_domain_name`;
  }

  get bucket_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_prefix`;
  }

  get bucket_regional_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_regional_domain_name`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get object_lock_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.object_lock_enabled`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get request_payer(): string {
    return `${this.resourceType}.${this.resourceName}.request_payer`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get website_domain(): string {
    return `${this.resourceType}.${this.resourceName}.website_domain`;
  }

  get website_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.website_endpoint`;
  }
}
