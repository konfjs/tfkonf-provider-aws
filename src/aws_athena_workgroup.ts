import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAthenaWorkgroupArgsConfigurationEngineVersion {
  selected_engine_version?: string;
}

export interface AwsAthenaWorkgroupArgsConfigurationResultConfigurationAclConfiguration {
  s3_acl_option: string;
}

export interface AwsAthenaWorkgroupArgsConfigurationResultConfigurationEncryptionConfiguration {
  encryption_option?: string;
  kms_key_arn?: string;
}

export interface AwsAthenaWorkgroupArgsConfigurationResultConfiguration {
  expected_bucket_owner?: string;
  output_location?: string;
  acl_configuration?: AwsAthenaWorkgroupArgsConfigurationResultConfigurationAclConfiguration;
  encryption_configuration?: AwsAthenaWorkgroupArgsConfigurationResultConfigurationEncryptionConfiguration;
}

export interface AwsAthenaWorkgroupArgsConfiguration {
  bytes_scanned_cutoff_per_query?: number;
  enforce_workgroup_configuration?: boolean;
  execution_role?: string;
  publish_cloudwatch_metrics_enabled?: boolean;
  requester_pays_enabled?: boolean;
  engine_version?: AwsAthenaWorkgroupArgsConfigurationEngineVersion;
  result_configuration?: AwsAthenaWorkgroupArgsConfigurationResultConfiguration;
}

export interface AwsAthenaWorkgroupArgs {
  description?: string;
  force_destroy?: boolean;
  name: string;
  state?: string;
  tags?: { [key: string]: string };
  configuration?: AwsAthenaWorkgroupArgsConfiguration;
}

export class aws_athena_workgroup extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAthenaWorkgroupArgs) {
    const meta = {configuration:{isBlock:true,engine_version:{isBlock:true},result_configuration:{isBlock:true,acl_configuration:{isBlock:true},encryption_configuration:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_athena_workgroup", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
