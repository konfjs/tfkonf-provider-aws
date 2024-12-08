import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallRuleGroupArgsEncryptionConfiguration {
  key_id?: string;
  type: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferencesIpSetReference {
  reference_arn: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferences {
  key: string;
  ip_set_reference: AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferencesIpSetReference[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSets {
  ip_set_references?: AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferences[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSetsIpSet {
  definition: string[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSets {
  key: string;
  ip_set: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSetsIpSet;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSetsPortSet {
  definition: string[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSets {
  key: string;
  port_set: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSetsPortSet;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariables {
  ip_sets?: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSets[];
  port_sets?: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSets[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceRulesSourceList {
  generated_rules_type: string;
  target_types: string[];
  targets: string[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleHeader {
  destination: string;
  destination_port: string;
  direction: string;
  protocol: string;
  source: string;
  source_port: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleRuleOption {
  keyword: string;
  settings?: string[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRule {
  action: string;
  header: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleHeader;
  rule_option: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleRuleOption[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
  value: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
  dimension: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
  publish_metric_action: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
  action_name: string;
  action_definition: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
  address_definition: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
  from_port: number;
  to_port?: number;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
  address_definition: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
  from_port: number;
  to_port?: number;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
  flags: string[];
  masks?: string[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
  protocols?: number[];
  destination?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
  destination_port?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
  source?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
  source_port?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
  tcp_flag?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
  actions: string[];
  match_attributes: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
  priority: number;
  rule_definition: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActions {
  custom_action?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
  stateless_rule: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSource {
  rules_string?: string;
  rules_source_list?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceRulesSourceList;
  stateful_rule?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRule[];
  stateless_rules_and_custom_actions?: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActions;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroupStatefulRuleOptions {
  rule_order: string;
}

export interface AwsNetworkfirewallRuleGroupArgsRuleGroup {
  reference_sets?: AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSets;
  rule_variables?: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariables;
  rules_source: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSource;
  stateful_rule_options?: AwsNetworkfirewallRuleGroupArgsRuleGroupStatefulRuleOptions;
}

export interface AwsNetworkfirewallRuleGroupArgs {
  capacity: number;
  description?: string;
  name: string;
  rules?: string;
  tags?: { [key: string]: string };
  type: string;
  encryption_configuration?: AwsNetworkfirewallRuleGroupArgsEncryptionConfiguration;
  rule_group?: AwsNetworkfirewallRuleGroupArgsRuleGroup;
}

export class aws_networkfirewall_rule_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkfirewallRuleGroupArgs) {
    const meta = {encryption_configuration:{isBlock:true},rule_group:{isBlock:true,reference_sets:{isBlock:true,ip_set_references:{isBlock:true,ip_set_reference:{isBlock:true}}},rule_variables:{isBlock:true,ip_sets:{isBlock:true,ip_set:{isBlock:true}},port_sets:{isBlock:true,port_set:{isBlock:true}}},rules_source:{isBlock:true,rules_source_list:{isBlock:true},stateful_rule:{isBlock:true,header:{isBlock:true},rule_option:{isBlock:true}},stateless_rules_and_custom_actions:{isBlock:true,custom_action:{isBlock:true,action_definition:{isBlock:true,publish_metric_action:{isBlock:true,dimension:{isBlock:true}}}},stateless_rule:{isBlock:true,rule_definition:{isBlock:true,match_attributes:{isBlock:true,destination:{isBlock:true},destination_port:{isBlock:true},source:{isBlock:true},source_port:{isBlock:true},tcp_flag:{isBlock:true}}}}}},stateful_rule_options:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_networkfirewall_rule_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get capacity(): string {
    return `${this.resourceType}.${this.resourceName}.capacity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_token(): string {
    return `${this.resourceType}.${this.resourceName}.update_token`;
  }
}
