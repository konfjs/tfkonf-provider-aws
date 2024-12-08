import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53profilesProfilesArgs {
}

export class data_aws_route53profiles_profiles extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRoute53profilesProfilesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53profiles_profiles", resourceName);
  }

  get profiles(): string {
    return `data.${this.resourceType}.${this.resourceName}.profiles`;
  }
}
