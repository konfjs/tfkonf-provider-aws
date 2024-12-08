import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightIngestionArgs {
  data_set_id: string;
  ingestion_id: string;
  ingestion_type: string;
}

export class aws_quicksight_ingestion extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightIngestionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_ingestion", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get data_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_set_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingestion_id(): string {
    return `${this.resourceType}.${this.resourceName}.ingestion_id`;
  }

  get ingestion_status(): string {
    return `${this.resourceType}.${this.resourceName}.ingestion_status`;
  }

  get ingestion_type(): string {
    return `${this.resourceType}.${this.resourceName}.ingestion_type`;
  }
}
