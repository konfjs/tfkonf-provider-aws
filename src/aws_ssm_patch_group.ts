import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmPatchGroupArgs {
  baseline_id: string;
  patch_group: string;
}

export class aws_ssm_patch_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmPatchGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssm_patch_group", resourceName);
  }

  get baseline_id(): string {
    return `${this.resourceType}.${this.resourceName}.baseline_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get patch_group(): string {
    return `${this.resourceType}.${this.resourceName}.patch_group`;
  }
}
