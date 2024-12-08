import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsCustomDbEngineVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRdsCustomDbEngineVersionArgs {
  database_installation_files_s3_bucket_name?: string;
  database_installation_files_s3_prefix?: string;
  description?: string;
  engine: string;
  engine_version: string;
  filename?: string;
  manifest?: string;
  manifest_hash?: string;
  source_image_id?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRdsCustomDbEngineVersionArgsTimeouts;
}

export class aws_rds_custom_db_engine_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRdsCustomDbEngineVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_custom_db_engine_version", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get db_parameter_group_family(): string {
    return `${this.resourceType}.${this.resourceName}.db_parameter_group_family`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `${this.resourceType}.${this.resourceName}.image_id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get major_engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.major_engine_version`;
  }

  get manifest_computed(): string {
    return `${this.resourceType}.${this.resourceName}.manifest_computed`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
