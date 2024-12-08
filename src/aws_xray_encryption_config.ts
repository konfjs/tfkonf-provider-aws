import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsXrayEncryptionConfigArgs {
  key_id?: string;
  type: string;
}

export class aws_xray_encryption_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsXrayEncryptionConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_xray_encryption_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
