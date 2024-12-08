import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoverycontrolconfigSafetyRuleArgsRuleConfig {
  inverted: boolean;
  threshold: number;
  type: string;
}

export interface AwsRoute53recoverycontrolconfigSafetyRuleArgs {
  asserted_controls?: string[];
  control_panel_arn: string;
  gating_controls?: string[];
  name: string;
  target_controls?: string[];
  wait_period_ms: number;
  rule_config: AwsRoute53recoverycontrolconfigSafetyRuleArgsRuleConfig;
}

export class aws_route53recoverycontrolconfig_safety_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53recoverycontrolconfigSafetyRuleArgs) {
    const meta = {rule_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53recoverycontrolconfig_safety_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get control_panel_arn(): string {
    return `${this.resourceType}.${this.resourceName}.control_panel_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get wait_period_ms(): string {
    return `${this.resourceType}.${this.resourceName}.wait_period_ms`;
  }
}
