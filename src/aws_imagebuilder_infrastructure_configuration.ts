import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderInfrastructureConfigurationArgsInstanceMetadataOptions {
  http_put_response_hop_limit?: number;
  http_tokens?: string;
}

export interface AwsImagebuilderInfrastructureConfigurationArgsLoggingS3Logs {
  s3_bucket_name: string;
  s3_key_prefix?: string;
}

export interface AwsImagebuilderInfrastructureConfigurationArgsLogging {
  s3_logs: AwsImagebuilderInfrastructureConfigurationArgsLoggingS3Logs;
}

export interface AwsImagebuilderInfrastructureConfigurationArgs {
  description?: string;
  instance_profile_name: string;
  instance_types?: string[];
  key_pair?: string;
  name: string;
  resource_tags?: { [key: string]: string };
  security_group_ids?: string[];
  sns_topic_arn?: string;
  subnet_id?: string;
  tags?: { [key: string]: string };
  terminate_instance_on_failure?: boolean;
  instance_metadata_options?: AwsImagebuilderInfrastructureConfigurationArgsInstanceMetadataOptions;
  logging?: AwsImagebuilderInfrastructureConfigurationArgsLogging;
}

export class aws_imagebuilder_infrastructure_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsImagebuilderInfrastructureConfigurationArgs) {
    const meta = {instance_metadata_options:{isBlock:true},logging:{isBlock:true,s3_logs:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_infrastructure_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get date_created(): string {
    return `${this.resourceType}.${this.resourceName}.date_created`;
  }

  get date_updated(): string {
    return `${this.resourceType}.${this.resourceName}.date_updated`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_profile_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_profile_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
