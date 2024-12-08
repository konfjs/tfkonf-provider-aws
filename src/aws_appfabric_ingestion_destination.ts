import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationFirehoseStream {
  stream_name: string;
}

export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationS3Bucket {
  bucket_name: string;
  prefix?: string;
}

export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestination {
  firehose_stream?: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationFirehoseStream[];
  s3_bucket?: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationS3Bucket[];
}

export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLog {
  destination?: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestination[];
}

export interface AwsAppfabricIngestionDestinationArgsDestinationConfiguration {
  audit_log?: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLog[];
}

export interface AwsAppfabricIngestionDestinationArgsProcessingConfigurationAuditLog {
  format: string;
  schema: string;
}

export interface AwsAppfabricIngestionDestinationArgsProcessingConfiguration {
  audit_log?: AwsAppfabricIngestionDestinationArgsProcessingConfigurationAuditLog[];
}

export interface AwsAppfabricIngestionDestinationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAppfabricIngestionDestinationArgs {
  app_bundle_arn: string;
  ingestion_arn: string;
  tags?: { [key: string]: string };
  destination_configuration?: AwsAppfabricIngestionDestinationArgsDestinationConfiguration[];
  processing_configuration?: AwsAppfabricIngestionDestinationArgsProcessingConfiguration[];
  timeouts?: AwsAppfabricIngestionDestinationArgsTimeouts;
}

export class aws_appfabric_ingestion_destination extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppfabricIngestionDestinationArgs) {
    const meta = {destination_configuration:{isBlock:true,audit_log:{isBlock:true,destination:{isBlock:true,firehose_stream:{isBlock:true},s3_bucket:{isBlock:true}}}},processing_configuration:{isBlock:true,audit_log:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appfabric_ingestion_destination", resourceName);
  }

  get app_bundle_arn(): string {
    return `${this.resourceType}.${this.resourceName}.app_bundle_arn`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingestion_arn(): string {
    return `${this.resourceType}.${this.resourceName}.ingestion_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
