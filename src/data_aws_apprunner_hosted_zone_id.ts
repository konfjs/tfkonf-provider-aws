import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApprunnerHostedZoneIdArgs {
}

export class data_aws_apprunner_hosted_zone_id extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApprunnerHostedZoneIdArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_apprunner_hosted_zone_id", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
