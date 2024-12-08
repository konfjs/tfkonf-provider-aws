import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsAttachmentPoliciesAction {
  add_to_network_function_group?: string;
  association_method?: string;
  require_acceptance?: boolean;
  segment?: string;
  tag_value_of_key?: string;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsAttachmentPoliciesConditions {
  key?: string;
  operator?: string;
  type: string;
  value?: string;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsAttachmentPolicies {
  condition_logic?: string;
  description?: string;
  rule_number: number;
  action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsAttachmentPoliciesAction;
  conditions: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsAttachmentPoliciesConditions[];
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsCoreNetworkConfigurationEdgeLocations {
  asn?: string;
  inside_cidr_blocks?: string[];
  location: string;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsCoreNetworkConfiguration {
  asn_ranges: string[];
  inside_cidr_blocks?: string[];
  vpn_ecmp_support?: boolean;
  edge_locations: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsCoreNetworkConfigurationEdgeLocations[];
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsNetworkFunctionGroups {
  description?: string;
  name: string;
  require_attachment_acceptance: boolean;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActionsViaWithEdgeOverride {
  edge_sets?: any[];
  use_edge?: string;
  use_edge_location?: string;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActionsVia {
  network_function_groups?: string[];
  with_edge_override?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActionsViaWithEdgeOverride[];
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActionsWhenSentTo {
  segments?: string[];
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActions {
  action: string;
  description?: string;
  destination_cidr_blocks?: string[];
  destinations?: string[];
  mode?: string;
  segment: string;
  share_with?: string[];
  share_with_except?: string[];
  via?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActionsVia;
  when_sent_to?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActionsWhenSentTo;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegments {
  allow_filter?: string[];
  deny_filter?: string[];
  description?: string;
  edge_locations?: string[];
  isolate_attachments?: boolean;
  name: string;
  require_attachment_acceptance?: boolean;
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgs {
  version?: string;
  attachment_policies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsAttachmentPolicies[];
  core_network_configuration: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsCoreNetworkConfiguration[];
  network_function_groups?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsNetworkFunctionGroups[];
  segment_actions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegmentActions[];
  segments: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgsSegments[];
}

export class data_aws_networkmanager_core_network_policy_document extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkmanagerCoreNetworkPolicyDocumentArgs) {
    const meta = {attachment_policies:{isBlock:true,action:{isBlock:true},conditions:{isBlock:true}},core_network_configuration:{isBlock:true,edge_locations:{isBlock:true}},network_function_groups:{isBlock:true},segment_actions:{isBlock:true,via:{isBlock:true,with_edge_override:{isBlock:true}},when_sent_to:{isBlock:true}},segments:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_core_network_policy_document", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get json(): string {
    return `data.${this.resourceType}.${this.resourceName}.json`;
  }
}
