import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalRateBasedRuleArgsPredicate {
  data_id: string;
  negated: boolean;
  type: string;
}

export interface AwsWafregionalRateBasedRuleArgs {
  metric_name: string;
  name: string;
  rate_key: string;
  rate_limit: number;
  tags?: { [key: string]: string };
  predicate?: AwsWafregionalRateBasedRuleArgsPredicate[];
}

export class aws_wafregional_rate_based_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalRateBasedRuleArgs) {
    const meta = {predicate:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_rate_based_rule", resourceName);
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

  get rate_key(): string {
    return `${this.resourceType}.${this.resourceName}.rate_key`;
  }

  get rate_limit(): string {
    return `${this.resourceType}.${this.resourceName}.rate_limit`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
