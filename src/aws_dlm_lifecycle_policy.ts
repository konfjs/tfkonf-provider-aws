import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
  cmk_arn?: string;
  encrypted?: boolean;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyRetainRule {
  interval: number;
  interval_unit: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopy {
  target: string;
  encryption_configuration: AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;
  retain_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopyRetainRule;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsAction {
  name: string;
  cross_region_copy: AwsDlmLifecyclePolicyArgsPolicyDetailsActionCrossRegionCopy[];
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsEventSourceParameters {
  description_regex: string;
  event_type: string;
  snapshot_owner: string[];
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsEventSource {
  type: string;
  parameters: AwsDlmLifecyclePolicyArgsPolicyDetailsEventSourceParameters;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsParameters {
  exclude_boot_volume?: boolean;
  no_reboot?: boolean;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCreateRule {
  cron_expression?: string;
  interval?: number;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
  interval: number;
  interval_unit: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
  interval: number;
  interval_unit: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRule {
  cmk_arn?: string;
  encrypted: boolean;
  target: string;
  deprecate_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;
  retain_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleDeprecateRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleFastRestoreRule {
  availability_zones: string[];
  count?: number;
  interval?: number;
  interval_unit?: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleRetainRule {
  count?: number;
  interval?: number;
  interval_unit?: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleShareRule {
  target_accounts: string[];
  unshare_interval?: number;
  unshare_interval_unit?: string;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetailsSchedule {
  name: string;
  tags_to_add?: { [key: string]: string };
  variable_tags?: { [key: string]: string };
  create_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCreateRule;
  cross_region_copy_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleCrossRegionCopyRule[];
  deprecate_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleDeprecateRule;
  fast_restore_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleFastRestoreRule;
  retain_rule: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleRetainRule;
  share_rule?: AwsDlmLifecyclePolicyArgsPolicyDetailsScheduleShareRule;
}

export interface AwsDlmLifecyclePolicyArgsPolicyDetails {
  policy_type?: string;
  resource_types?: string[];
  target_tags?: { [key: string]: string };
  action?: AwsDlmLifecyclePolicyArgsPolicyDetailsAction;
  event_source?: AwsDlmLifecyclePolicyArgsPolicyDetailsEventSource;
  parameters?: AwsDlmLifecyclePolicyArgsPolicyDetailsParameters;
  schedule?: AwsDlmLifecyclePolicyArgsPolicyDetailsSchedule[];
}

export interface AwsDlmLifecyclePolicyArgs {
  description: string;
  execution_role_arn: string;
  state?: string;
  tags?: { [key: string]: string };
  policy_details: AwsDlmLifecyclePolicyArgsPolicyDetails;
}

export class aws_dlm_lifecycle_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDlmLifecyclePolicyArgs) {
    const meta = {policy_details:{isBlock:true,action:{isBlock:true,cross_region_copy:{isBlock:true,encryption_configuration:{isBlock:true},retain_rule:{isBlock:true}}},event_source:{isBlock:true,parameters:{isBlock:true}},parameters:{isBlock:true},schedule:{isBlock:true,create_rule:{isBlock:true},cross_region_copy_rule:{isBlock:true,deprecate_rule:{isBlock:true},retain_rule:{isBlock:true}},deprecate_rule:{isBlock:true},fast_restore_rule:{isBlock:true},retain_rule:{isBlock:true},share_rule:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_dlm_lifecycle_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
