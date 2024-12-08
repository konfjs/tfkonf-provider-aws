import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAlbListenerRuleArgsActionAuthenticateCognito {
  authentication_request_extra_params?: { [key: string]: string };
  scope?: string;
  session_cookie_name?: string;
  session_timeout?: number;
  user_pool_arn: string;
  user_pool_client_id: string;
  user_pool_domain: string;
}

export interface AwsAlbListenerRuleArgsActionAuthenticateOidc {
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

export interface AwsAlbListenerRuleArgsActionFixedResponse {
  content_type: string;
  message_body?: string;
}

export interface AwsAlbListenerRuleArgsActionForwardStickiness {
  duration: number;
  enabled?: boolean;
}

export interface AwsAlbListenerRuleArgsActionForwardTargetGroup {
  arn: string;
  weight?: number;
}

export interface AwsAlbListenerRuleArgsActionForward {
  stickiness?: AwsAlbListenerRuleArgsActionForwardStickiness;
  target_group: AwsAlbListenerRuleArgsActionForwardTargetGroup[];
}

export interface AwsAlbListenerRuleArgsActionRedirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}

export interface AwsAlbListenerRuleArgsAction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito?: AwsAlbListenerRuleArgsActionAuthenticateCognito;
  authenticate_oidc?: AwsAlbListenerRuleArgsActionAuthenticateOidc;
  fixed_response?: AwsAlbListenerRuleArgsActionFixedResponse;
  forward?: AwsAlbListenerRuleArgsActionForward;
  redirect?: AwsAlbListenerRuleArgsActionRedirect;
}

export interface AwsAlbListenerRuleArgsConditionHostHeader {
  values: string[];
}

export interface AwsAlbListenerRuleArgsConditionHttpHeader {
  http_header_name: string;
  values: string[];
}

export interface AwsAlbListenerRuleArgsConditionHttpRequestMethod {
  values: string[];
}

export interface AwsAlbListenerRuleArgsConditionPathPattern {
  values: string[];
}

export interface AwsAlbListenerRuleArgsConditionQueryString {
  key?: string;
  value: string;
}

export interface AwsAlbListenerRuleArgsConditionSourceIp {
  values: string[];
}

export interface AwsAlbListenerRuleArgsCondition {
  host_header?: AwsAlbListenerRuleArgsConditionHostHeader;
  http_header?: AwsAlbListenerRuleArgsConditionHttpHeader;
  http_request_method?: AwsAlbListenerRuleArgsConditionHttpRequestMethod;
  path_pattern?: AwsAlbListenerRuleArgsConditionPathPattern;
  query_string?: AwsAlbListenerRuleArgsConditionQueryString[];
  source_ip?: AwsAlbListenerRuleArgsConditionSourceIp;
}

export interface AwsAlbListenerRuleArgs {
  listener_arn: string;
  tags?: { [key: string]: string };
  action: AwsAlbListenerRuleArgsAction[];
  condition: AwsAlbListenerRuleArgsCondition[];
}

export class aws_alb_listener_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAlbListenerRuleArgs) {
    const meta = {action:{isBlock:true,authenticate_cognito:{isBlock:true},authenticate_oidc:{isBlock:true},fixed_response:{isBlock:true},forward:{isBlock:true,stickiness:{isBlock:true},target_group:{isBlock:true}},redirect:{isBlock:true}},condition:{isBlock:true,host_header:{isBlock:true},http_header:{isBlock:true},http_request_method:{isBlock:true},path_pattern:{isBlock:true},query_string:{isBlock:true},source_ip:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_alb_listener_rule", resourceName);
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
