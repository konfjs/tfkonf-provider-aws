import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalGeoMatchSetArgsGeoMatchConstraint {
  type: string;
  value: string;
}

export interface AwsWafregionalGeoMatchSetArgs {
  name: string;
  geo_match_constraint?: AwsWafregionalGeoMatchSetArgsGeoMatchConstraint[];
}

export class aws_wafregional_geo_match_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalGeoMatchSetArgs) {
    const meta = {geo_match_constraint:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_geo_match_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
