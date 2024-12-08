import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLbListenerRuleArgsActionAuthenticateCognito {
}

export interface DataAwsLbListenerRuleArgsActionAuthenticateOidc {
}

export interface DataAwsLbListenerRuleArgsActionFixedResponse {
}

export interface DataAwsLbListenerRuleArgsActionForwardStickiness {
}

export interface DataAwsLbListenerRuleArgsActionForwardTargetGroup {
}

export interface DataAwsLbListenerRuleArgsActionForward {
  stickiness?: DataAwsLbListenerRuleArgsActionForwardStickiness;
  target_group?: DataAwsLbListenerRuleArgsActionForwardTargetGroup[];
}

export interface DataAwsLbListenerRuleArgsActionRedirect {
}

export interface DataAwsLbListenerRuleArgsAction {
  authenticate_cognito?: DataAwsLbListenerRuleArgsActionAuthenticateCognito;
  authenticate_oidc?: DataAwsLbListenerRuleArgsActionAuthenticateOidc;
  fixed_response?: DataAwsLbListenerRuleArgsActionFixedResponse;
  forward?: DataAwsLbListenerRuleArgsActionForward;
  redirect?: DataAwsLbListenerRuleArgsActionRedirect;
}

export interface DataAwsLbListenerRuleArgsConditionHostHeader {
}

export interface DataAwsLbListenerRuleArgsConditionHttpHeader {
}

export interface DataAwsLbListenerRuleArgsConditionHttpRequestMethod {
}

export interface DataAwsLbListenerRuleArgsConditionPathPattern {
}

export interface DataAwsLbListenerRuleArgsConditionQueryStringValues {
}

export interface DataAwsLbListenerRuleArgsConditionQueryString {
  values?: DataAwsLbListenerRuleArgsConditionQueryStringValues[];
}

export interface DataAwsLbListenerRuleArgsConditionSourceIp {
}

export interface DataAwsLbListenerRuleArgsCondition {
  host_header?: DataAwsLbListenerRuleArgsConditionHostHeader;
  http_header?: DataAwsLbListenerRuleArgsConditionHttpHeader;
  http_request_method?: DataAwsLbListenerRuleArgsConditionHttpRequestMethod;
  path_pattern?: DataAwsLbListenerRuleArgsConditionPathPattern;
  query_string?: DataAwsLbListenerRuleArgsConditionQueryString;
  source_ip?: DataAwsLbListenerRuleArgsConditionSourceIp;
}

export interface DataAwsLbListenerRuleArgs {
  action?: DataAwsLbListenerRuleArgsAction[];
  condition?: DataAwsLbListenerRuleArgsCondition[];
}

export class data_aws_lb_listener_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLbListenerRuleArgs) {
    const meta = {action:{isBlock:true,authenticate_cognito:{isBlock:true},authenticate_oidc:{isBlock:true},fixed_response:{isBlock:true},forward:{isBlock:true,stickiness:{isBlock:true},target_group:{isBlock:true}},redirect:{isBlock:true}},condition:{isBlock:true,host_header:{isBlock:true},http_header:{isBlock:true},http_request_method:{isBlock:true},path_pattern:{isBlock:true},query_string:{isBlock:true,values:{isBlock:true}},source_ip:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_lb_listener_rule", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get listener_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.listener_arn`;
  }

  get priority(): string {
    return `data.${this.resourceType}.${this.resourceName}.priority`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
