import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmPatchBaselineArgs {
  default_baseline?: boolean;
  name_prefix?: string;
  operating_system?: string;
  owner: string;
}

export class data_aws_ssm_patch_baseline extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmPatchBaselineArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssm_patch_baseline", resourceName);
  }

  get approval_rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.approval_rule`;
  }

  get approved_patches(): string {
    return `data.${this.resourceType}.${this.resourceName}.approved_patches`;
  }

  get approved_patches_compliance_level(): string {
    return `data.${this.resourceType}.${this.resourceName}.approved_patches_compliance_level`;
  }

  get approved_patches_enable_non_security(): string {
    return `data.${this.resourceType}.${this.resourceName}.approved_patches_enable_non_security`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get global_filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_filter`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get json(): string {
    return `data.${this.resourceType}.${this.resourceName}.json`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get rejected_patches(): string {
    return `data.${this.resourceType}.${this.resourceName}.rejected_patches`;
  }

  get rejected_patches_action(): string {
    return `data.${this.resourceType}.${this.resourceName}.rejected_patches_action`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }
}
