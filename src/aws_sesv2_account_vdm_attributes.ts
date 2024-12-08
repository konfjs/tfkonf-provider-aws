import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2AccountVdmAttributesArgsDashboardAttributes {
  engagement_metrics?: string;
}

export interface AwsSesv2AccountVdmAttributesArgsGuardianAttributes {
  optimized_shared_delivery?: string;
}

export interface AwsSesv2AccountVdmAttributesArgs {
  vdm_enabled: string;
  dashboard_attributes?: AwsSesv2AccountVdmAttributesArgsDashboardAttributes;
  guardian_attributes?: AwsSesv2AccountVdmAttributesArgsGuardianAttributes;
}

export class aws_sesv2_account_vdm_attributes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesv2AccountVdmAttributesArgs) {
    const meta = {dashboard_attributes:{isBlock:true},guardian_attributes:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_account_vdm_attributes", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vdm_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.vdm_enabled`;
  }
}
