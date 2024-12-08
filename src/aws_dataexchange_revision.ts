import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDataexchangeRevisionArgs {
  comment?: string;
  data_set_id: string;
  tags?: { [key: string]: string };
}

export class aws_dataexchange_revision extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDataexchangeRevisionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dataexchange_revision", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_set_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
