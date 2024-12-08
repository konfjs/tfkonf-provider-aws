import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafSizeConstraintSetArgsSizeConstraintsFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafSizeConstraintSetArgsSizeConstraints {
  comparison_operator: string;
  size: number;
  text_transformation: string;
  field_to_match: AwsWafSizeConstraintSetArgsSizeConstraintsFieldToMatch;
}

export interface AwsWafSizeConstraintSetArgs {
  name: string;
  size_constraints?: AwsWafSizeConstraintSetArgsSizeConstraints[];
}

export class aws_waf_size_constraint_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafSizeConstraintSetArgs) {
    const meta = {size_constraints:{isBlock:true,field_to_match:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_size_constraint_set", resourceName);
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
