import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRbinRuleArgsLockConfigurationUnlockDelay {
  unlock_delay_unit: string;
  unlock_delay_value: number;
}

export interface AwsRbinRuleArgsLockConfiguration {
  unlock_delay: AwsRbinRuleArgsLockConfigurationUnlockDelay;
}

export interface AwsRbinRuleArgsResourceTags {
  resource_tag_key: string;
  resource_tag_value?: string;
}

export interface AwsRbinRuleArgsRetentionPeriod {
  retention_period_unit: string;
  retention_period_value: number;
}

export interface AwsRbinRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRbinRuleArgs {
  resource_type: string;
  tags?: { [key: string]: string };
  lock_configuration?: AwsRbinRuleArgsLockConfiguration;
  resource_tags?: AwsRbinRuleArgsResourceTags[];
  retention_period: AwsRbinRuleArgsRetentionPeriod;
  timeouts?: AwsRbinRuleArgsTimeouts;
}

export class aws_rbin_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRbinRuleArgs) {
    const meta = {lock_configuration:{isBlock:true,unlock_delay:{isBlock:true}},resource_tags:{isBlock:true},retention_period:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rbin_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lock_end_time(): string {
    return `${this.resourceType}.${this.resourceName}.lock_end_time`;
  }

  get lock_state(): string {
    return `${this.resourceType}.${this.resourceName}.lock_state`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
