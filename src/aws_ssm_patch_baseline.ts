import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmPatchBaselineArgsApprovalRulePatchFilter {
  key: string;
  values: string[];
}

export interface AwsSsmPatchBaselineArgsApprovalRule {
  approve_after_days?: number;
  approve_until_date?: string;
  compliance_level?: string;
  enable_non_security?: boolean;
  patch_filter: AwsSsmPatchBaselineArgsApprovalRulePatchFilter[];
}

export interface AwsSsmPatchBaselineArgsGlobalFilter {
  key: string;
  values: string[];
}

export interface AwsSsmPatchBaselineArgsSource {
  configuration: string;
  name: string;
  products: string[];
}

export interface AwsSsmPatchBaselineArgs {
  approved_patches?: string[];
  approved_patches_compliance_level?: string;
  approved_patches_enable_non_security?: boolean;
  description?: string;
  name: string;
  operating_system?: string;
  rejected_patches?: string[];
  tags?: { [key: string]: string };
  approval_rule?: AwsSsmPatchBaselineArgsApprovalRule[];
  global_filter?: AwsSsmPatchBaselineArgsGlobalFilter[];
  source?: AwsSsmPatchBaselineArgsSource[];
}

export class aws_ssm_patch_baseline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmPatchBaselineArgs) {
    const meta = {approval_rule:{isBlock:true,patch_filter:{isBlock:true}},global_filter:{isBlock:true},source:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssm_patch_baseline", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get json(): string {
    return `${this.resourceType}.${this.resourceName}.json`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rejected_patches_action(): string {
    return `${this.resourceType}.${this.resourceName}.rejected_patches_action`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
