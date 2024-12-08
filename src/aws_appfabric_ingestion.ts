import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppfabricIngestionArgs {
  app: string;
  app_bundle_arn: string;
  ingestion_type: string;
  tags?: { [key: string]: string };
  tenant_id: string;
}

export class aws_appfabric_ingestion extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppfabricIngestionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appfabric_ingestion", resourceName);
  }

  get app(): string {
    return `${this.resourceType}.${this.resourceName}.app`;
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

  get ingestion_type(): string {
    return `${this.resourceType}.${this.resourceName}.ingestion_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tenant_id(): string {
    return `${this.resourceType}.${this.resourceName}.tenant_id`;
  }
}
