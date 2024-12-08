import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafGeoMatchSetArgsGeoMatchConstraint {
  type: string;
  value: string;
}

export interface AwsWafGeoMatchSetArgs {
  name: string;
  geo_match_constraint?: AwsWafGeoMatchSetArgsGeoMatchConstraint[];
}

export class aws_waf_geo_match_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafGeoMatchSetArgs) {
    const meta = {geo_match_constraint:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_waf_geo_match_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
