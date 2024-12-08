import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFmsPolicyArgsExcludeMap {
  account?: string[];
  orgunit?: string[];
}

export interface AwsFmsPolicyArgsIncludeMap {
  account?: string[];
  orgunit?: string[];
}

export interface AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy {
  firewall_deployment_model?: string;
}

export interface AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy {
  firewall_deployment_model?: string;
}

export interface AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOption {
  network_firewall_policy?: AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy;
  third_party_firewall_policy?: AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy;
}

export interface AwsFmsPolicyArgsSecurityServicePolicyData {
  managed_service_data?: string;
  type: string;
  policy_option?: AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOption;
}

export interface AwsFmsPolicyArgs {
  delete_all_policy_resources?: boolean;
  delete_unused_fm_managed_resources?: boolean;
  description?: string;
  exclude_resource_tags: boolean;
  name: string;
  remediation_enabled?: boolean;
  resource_tags?: { [key: string]: string };
  tags?: { [key: string]: string };
  exclude_map?: AwsFmsPolicyArgsExcludeMap;
  include_map?: AwsFmsPolicyArgsIncludeMap;
  security_service_policy_data: AwsFmsPolicyArgsSecurityServicePolicyData;
}

export class aws_fms_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFmsPolicyArgs) {
    const meta = {exclude_map:{isBlock:true},include_map:{isBlock:true},security_service_policy_data:{isBlock:true,policy_option:{isBlock:true,network_firewall_policy:{isBlock:true},third_party_firewall_policy:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_fms_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get exclude_resource_tags(): string {
    return `${this.resourceType}.${this.resourceName}.exclude_resource_tags`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_update_token(): string {
    return `${this.resourceType}.${this.resourceName}.policy_update_token`;
  }

  get resource_set_ids(): string {
    return `${this.resourceType}.${this.resourceName}.resource_set_ids`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get resource_type_list(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type_list`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
