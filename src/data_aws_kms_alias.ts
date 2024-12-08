import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsAliasArgs {
  name: string;
}

export class data_aws_kms_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKmsAliasArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kms_alias", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get target_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_key_arn`;
  }

  get target_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_key_id`;
  }
}
