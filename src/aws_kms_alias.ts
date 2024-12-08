import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsAliasArgs {
  target_key_id: string;
}

export class aws_kms_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKmsAliasArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kms_alias", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get target_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_key_arn`;
  }

  get target_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_key_id`;
  }
}
