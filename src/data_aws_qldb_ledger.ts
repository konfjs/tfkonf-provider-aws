import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsQldbLedgerArgs {
  name: string;
}

export class data_aws_qldb_ledger extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsQldbLedgerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_qldb_ledger", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get permissions_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions_mode`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
