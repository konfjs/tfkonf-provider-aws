import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalRuleArgsPredicate {
  data_id: string;
  negated: boolean;
  type: string;
}

export interface AwsWafregionalRuleArgs {
  metric_name: string;
  name: string;
  tags?: { [key: string]: string };
  predicate?: AwsWafregionalRuleArgsPredicate[];
}

export class aws_wafregional_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafregionalRuleArgs) {
    const meta = {predicate:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metric_name(): string {
    return `${this.resourceType}.${this.resourceName}.metric_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
