import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbListenerRuleArgsActionAuthenticateCognito {
  authentication_request_extra_params?: { [key: string]: string };
  scope?: string;
  session_cookie_name?: string;
  session_timeout?: number;
  user_pool_arn: string;
  user_pool_client_id: string;
  user_pool_domain: string;
}

export interface AwsLbListenerRuleArgsActionAuthenticateOidc {
  authentication_request_extra_params?: { [key: string]: string };
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  scope?: string;
  session_cookie_name?: string;
  session_timeout?: number;
  token_endpoint: string;
  user_info_endpoint: string;
}

export interface AwsLbListenerRuleArgsActionFixedResponse {
  content_type: string;
  message_body?: string;
}

export interface AwsLbListenerRuleArgsActionForwardStickiness {
  duration: number;
  enabled?: boolean;
}

export interface AwsLbListenerRuleArgsActionForwardTargetGroup {
  arn: string;
  weight?: number;
}

export interface AwsLbListenerRuleArgsActionForward {
  stickiness?: AwsLbListenerRuleArgsActionForwardStickiness;
  target_group: AwsLbListenerRuleArgsActionForwardTargetGroup[];
}

export interface AwsLbListenerRuleArgsActionRedirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}

export interface AwsLbListenerRuleArgsAction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito?: AwsLbListenerRuleArgsActionAuthenticateCognito;
  authenticate_oidc?: AwsLbListenerRuleArgsActionAuthenticateOidc;
  fixed_response?: AwsLbListenerRuleArgsActionFixedResponse;
  forward?: AwsLbListenerRuleArgsActionForward;
  redirect?: AwsLbListenerRuleArgsActionRedirect;
}

export interface AwsLbListenerRuleArgsConditionHostHeader {
  values: string[];
}

export interface AwsLbListenerRuleArgsConditionHttpHeader {
  http_header_name: string;
  values: string[];
}

export interface AwsLbListenerRuleArgsConditionHttpRequestMethod {
  values: string[];
}

export interface AwsLbListenerRuleArgsConditionPathPattern {
  values: string[];
}

export interface AwsLbListenerRuleArgsConditionQueryString {
  key?: string;
  value: string;
}

export interface AwsLbListenerRuleArgsConditionSourceIp {
  values: string[];
}

export interface AwsLbListenerRuleArgsCondition {
  host_header?: AwsLbListenerRuleArgsConditionHostHeader;
  http_header?: AwsLbListenerRuleArgsConditionHttpHeader;
  http_request_method?: AwsLbListenerRuleArgsConditionHttpRequestMethod;
  path_pattern?: AwsLbListenerRuleArgsConditionPathPattern;
  query_string?: AwsLbListenerRuleArgsConditionQueryString[];
  source_ip?: AwsLbListenerRuleArgsConditionSourceIp;
}

export interface AwsLbListenerRuleArgs {
  listener_arn: string;
  tags?: { [key: string]: string };
  action: AwsLbListenerRuleArgsAction[];
  condition: AwsLbListenerRuleArgsCondition[];
}

export class aws_lb_listener_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLbListenerRuleArgs) {
    const meta = {action:{isBlock:true,authenticate_cognito:{isBlock:true},authenticate_oidc:{isBlock:true},fixed_response:{isBlock:true},forward:{isBlock:true,stickiness:{isBlock:true},target_group:{isBlock:true}},redirect:{isBlock:true}},condition:{isBlock:true,host_header:{isBlock:true},http_header:{isBlock:true},http_request_method:{isBlock:true},path_pattern:{isBlock:true},query_string:{isBlock:true},source_ip:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_lb_listener_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get listener_arn(): string {
    return `${this.resourceType}.${this.resourceName}.listener_arn`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
