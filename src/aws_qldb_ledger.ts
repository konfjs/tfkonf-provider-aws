import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQldbLedgerArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsQldbLedgerArgs {
  deletion_protection?: boolean;
  permissions_mode: string;
  tags?: { [key: string]: string };
  timeouts?: AwsQldbLedgerArgsTimeouts;
}

export class aws_qldb_ledger extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQldbLedgerArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_qldb_ledger", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get permissions_mode(): string {
    return `${this.resourceType}.${this.resourceName}.permissions_mode`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
