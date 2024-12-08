import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlacierVaultLockArgs {
  complete_lock: boolean;
  ignore_deletion_error?: boolean;
  policy: string;
  vault_name: string;
}

export class aws_glacier_vault_lock extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlacierVaultLockArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_glacier_vault_lock", resourceName);
  }

  get complete_lock(): string {
    return `${this.resourceType}.${this.resourceName}.complete_lock`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get vault_name(): string {
    return `${this.resourceType}.${this.resourceName}.vault_name`;
  }
}
