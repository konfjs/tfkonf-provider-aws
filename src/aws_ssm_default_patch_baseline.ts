import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmDefaultPatchBaselineArgs {
  baseline_id: string;
  operating_system: string;
}

export class aws_ssm_default_patch_baseline extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmDefaultPatchBaselineArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssm_default_patch_baseline", resourceName);
  }

  get baseline_id(): string {
    return `${this.resourceType}.${this.resourceName}.baseline_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get operating_system(): string {
    return `${this.resourceType}.${this.resourceName}.operating_system`;
  }
}
