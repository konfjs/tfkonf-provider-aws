import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53TrafficPolicyDocumentArgsEndpoint {
  id: string;
  region?: string;
  type?: string;
  value?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRuleGeoProximityLocation {
  bias?: string;
  endpoint_reference?: string;
  evaluate_target_health?: boolean;
  health_check?: string;
  latitude?: string;
  longitude?: string;
  region?: string;
  rule_reference?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRuleItems {
  endpoint_reference?: string;
  health_check?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRuleLocation {
  continent?: string;
  country?: string;
  endpoint_reference?: string;
  evaluate_target_health?: boolean;
  health_check?: string;
  is_default?: boolean;
  rule_reference?: string;
  subdivision?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRulePrimary {
  endpoint_reference?: string;
  evaluate_target_health?: boolean;
  health_check?: string;
  rule_reference?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRuleRegion {
  endpoint_reference?: string;
  evaluate_target_health?: boolean;
  health_check?: string;
  region?: string;
  rule_reference?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRuleSecondary {
  endpoint_reference?: string;
  evaluate_target_health?: boolean;
  health_check?: string;
  rule_reference?: string;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgsRule {
  id: string;
  type?: string;
  geo_proximity_location?: DataAwsRoute53TrafficPolicyDocumentArgsRuleGeoProximityLocation[];
  items?: DataAwsRoute53TrafficPolicyDocumentArgsRuleItems[];
  location?: DataAwsRoute53TrafficPolicyDocumentArgsRuleLocation[];
  primary?: DataAwsRoute53TrafficPolicyDocumentArgsRulePrimary;
  region?: DataAwsRoute53TrafficPolicyDocumentArgsRuleRegion[];
  secondary?: DataAwsRoute53TrafficPolicyDocumentArgsRuleSecondary;
}

export interface DataAwsRoute53TrafficPolicyDocumentArgs {
  record_type?: string;
  start_endpoint?: string;
  start_rule?: string;
  version?: string;
  endpoint?: DataAwsRoute53TrafficPolicyDocumentArgsEndpoint[];
  rule?: DataAwsRoute53TrafficPolicyDocumentArgsRule[];
}

export class data_aws_route53_traffic_policy_document extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53TrafficPolicyDocumentArgs) {
    const meta = {endpoint:{isBlock:true},rule:{isBlock:true,geo_proximity_location:{isBlock:true},items:{isBlock:true},location:{isBlock:true},primary:{isBlock:true},region:{isBlock:true},secondary:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_route53_traffic_policy_document", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get json(): string {
    return `data.${this.resourceType}.${this.resourceName}.json`;
  }
}
