import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalSizeConstraintSetArgsSizeConstraintsFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalSizeConstraintSetArgsSizeConstraints {
  comparison_operator: string;
  size: number;
  text_transformation: string;
  field_to_match: AwsWafregionalSizeConstraintSetArgsSizeConstraintsFieldToMatch;
}

export interface AwsWafregionalSizeConstraintSetArgs {
  name: string;
  size_constraints?: AwsWafregionalSizeConstraintSetArgsSizeConstraints[];
}

export class aws_wafregional_size_constraint_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafregionalSizeConstraintSetArgs) {
    const meta = {size_constraints:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_size_constraint_set", resourceName);
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
