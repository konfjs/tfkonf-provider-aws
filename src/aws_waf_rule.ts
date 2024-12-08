import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafRuleArgsPredicates {
  data_id: string;
  negated: boolean;
  type: string;
}

export interface AwsWafRuleArgs {
  metric_name: string;
  name: string;
  tags?: { [key: string]: string };
  predicates?: AwsWafRuleArgsPredicates[];
}

export class aws_waf_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafRuleArgs) {
    const meta = {predicates:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_waf_rule", resourceName);
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
