import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeListenerRuleArgsActionFixedResponse {
  status_code: number;
}

export interface AwsVpclatticeListenerRuleArgsActionForwardTargetGroups {
  target_group_identifier: string;
  weight?: number;
}

export interface AwsVpclatticeListenerRuleArgsActionForward {
  target_groups: AwsVpclatticeListenerRuleArgsActionForwardTargetGroups[];
}

export interface AwsVpclatticeListenerRuleArgsAction {
  fixed_response?: AwsVpclatticeListenerRuleArgsActionFixedResponse;
  forward?: AwsVpclatticeListenerRuleArgsActionForward;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatchesMatch {
  contains?: string;
  exact?: string;
  prefix?: string;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatches {
  case_sensitive?: boolean;
  name: string;
  match: AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatchesMatch;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatchMatch {
  exact?: string;
  prefix?: string;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatch {
  case_sensitive?: boolean;
  match: AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatchMatch;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatch {
  method?: string;
  header_matches?: AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatches[];
  path_match?: AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatch;
}

export interface AwsVpclatticeListenerRuleArgsMatch {
  http_match?: AwsVpclatticeListenerRuleArgsMatchHttpMatch;
}

export interface AwsVpclatticeListenerRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeListenerRuleArgs {
  listener_identifier: string;
  name: string;
  priority: number;
  service_identifier: string;
  tags?: { [key: string]: string };
  action: AwsVpclatticeListenerRuleArgsAction;
  match: AwsVpclatticeListenerRuleArgsMatch;
  timeouts?: AwsVpclatticeListenerRuleArgsTimeouts;
}

export class aws_vpclattice_listener_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpclatticeListenerRuleArgs) {
    const meta = {action:{isBlock:true,fixed_response:{isBlock:true},forward:{isBlock:true,target_groups:{isBlock:true}}},match:{isBlock:true,http_match:{isBlock:true,header_matches:{isBlock:true,match:{isBlock:true}},path_match:{isBlock:true,match:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_listener_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get listener_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.listener_identifier`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.rule_id`;
  }

  get service_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.service_identifier`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
