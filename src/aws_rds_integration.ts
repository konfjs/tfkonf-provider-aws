import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsIntegrationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRdsIntegrationArgs {
  additional_encryption_context?: { [key: string]: string };
  integration_name: string;
  source_arn: string;
  tags?: { [key: string]: string };
  target_arn: string;
  timeouts?: AwsRdsIntegrationArgsTimeouts;
}

export class aws_rds_integration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsIntegrationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_integration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get integration_name(): string {
    return `${this.resourceType}.${this.resourceName}.integration_name`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get source_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }
}
