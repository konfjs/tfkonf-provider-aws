import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmPatchBaselinesArgsFilter {
  key: string;
  values: string[];
}

export interface DataAwsSsmPatchBaselinesArgs {
  default_baselines?: boolean;
  filter?: DataAwsSsmPatchBaselinesArgsFilter[];
}

export class data_aws_ssm_patch_baselines extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmPatchBaselinesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ssm_patch_baselines", resourceName);
  }

  get baseline_identities(): string {
    return `data.${this.resourceType}.${this.resourceName}.baseline_identities`;
  }
}
