import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrLifecyclePolicyDocumentArgsRuleAction {
  type: string;
}

export interface DataAwsEcrLifecyclePolicyDocumentArgsRuleSelection {
  count_number: number;
  count_type: string;
  count_unit?: string;
  tag_pattern_list?: string[];
  tag_prefix_list?: string[];
  tag_status: string;
}

export interface DataAwsEcrLifecyclePolicyDocumentArgsRule {
  description?: string;
  priority: number;
  action?: DataAwsEcrLifecyclePolicyDocumentArgsRuleAction[];
  selection?: DataAwsEcrLifecyclePolicyDocumentArgsRuleSelection[];
}

export interface DataAwsEcrLifecyclePolicyDocumentArgs {
  rule?: DataAwsEcrLifecyclePolicyDocumentArgsRule[];
}

export class data_aws_ecr_lifecycle_policy_document extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcrLifecyclePolicyDocumentArgs) {
    const meta = {rule:{isBlock:true,action:{isBlock:true},selection:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_ecr_lifecycle_policy_document", resourceName);
  }

  get json(): string {
    return `data.${this.resourceType}.${this.resourceName}.json`;
  }
}
