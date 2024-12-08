import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamVirtualMfaDeviceArgs {
  path?: string;
  tags?: { [key: string]: string };
  virtual_mfa_device_name: string;
}

export class aws_iam_virtual_mfa_device extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamVirtualMfaDeviceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_virtual_mfa_device", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_32_string_seed(): string {
    return `${this.resourceType}.${this.resourceName}.base_32_string_seed`;
  }

  get enable_date(): string {
    return `${this.resourceType}.${this.resourceName}.enable_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get qr_code_png(): string {
    return `${this.resourceType}.${this.resourceName}.qr_code_png`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }

  get virtual_mfa_device_name(): string {
    return `${this.resourceType}.${this.resourceName}.virtual_mfa_device_name`;
  }
}
