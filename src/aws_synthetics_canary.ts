import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSyntheticsCanaryArgsArtifactConfigS3Encryption {
  encryption_mode?: string;
  kms_key_arn?: string;
}

export interface AwsSyntheticsCanaryArgsArtifactConfig {
  s3_encryption?: AwsSyntheticsCanaryArgsArtifactConfigS3Encryption;
}

export interface AwsSyntheticsCanaryArgsRunConfig {
  active_tracing?: boolean;
  environment_variables?: { [key: string]: string };
}

export interface AwsSyntheticsCanaryArgsSchedule {
  duration_in_seconds?: number;
  expression: string;
}

export interface AwsSyntheticsCanaryArgsVpcConfig {
  security_group_ids?: string[];
  subnet_ids?: string[];
}

export interface AwsSyntheticsCanaryArgs {
  artifact_s3_location: string;
  delete_lambda?: boolean;
  execution_role_arn: string;
  failure_retention_period?: number;
  handler: string;
  name: string;
  runtime_version: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_version?: string;
  start_canary?: boolean;
  success_retention_period?: number;
  tags?: { [key: string]: string };
  zip_file?: string;
  artifact_config?: AwsSyntheticsCanaryArgsArtifactConfig;
  run_config?: AwsSyntheticsCanaryArgsRunConfig;
  schedule: AwsSyntheticsCanaryArgsSchedule;
  vpc_config?: AwsSyntheticsCanaryArgsVpcConfig;
}

export class aws_synthetics_canary extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSyntheticsCanaryArgs) {
    const meta = {artifact_config:{isBlock:true,s3_encryption:{isBlock:true}},run_config:{isBlock:true},schedule:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_synthetics_canary", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get artifact_s3_location(): string {
    return `${this.resourceType}.${this.resourceName}.artifact_s3_location`;
  }

  get engine_arn(): string {
    return `${this.resourceType}.${this.resourceName}.engine_arn`;
  }

  get execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get handler(): string {
    return `${this.resourceType}.${this.resourceName}.handler`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get runtime_version(): string {
    return `${this.resourceType}.${this.resourceName}.runtime_version`;
  }

  get source_location_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_location_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get timeline(): string {
    return `${this.resourceType}.${this.resourceName}.timeline`;
  }
}
