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
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmPatchBaselinesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ssm_patch_baselines", resourceName);
  }

  get baseline_identities(): string {
    return `data.${this.resourceType}.${this.resourceName}.baseline_identities`;
  }
}
