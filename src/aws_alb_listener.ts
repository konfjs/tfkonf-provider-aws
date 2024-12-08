import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAlbListenerArgsDefaultActionAuthenticateCognito {
  authentication_request_extra_params?: { [key: string]: string };
  user_pool_arn: string;
  user_pool_client_id: string;
  user_pool_domain: string;
}

export interface AwsAlbListenerArgsDefaultActionAuthenticateOidc {
  authentication_request_extra_params?: { [key: string]: string };
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  token_endpoint: string;
  user_info_endpoint: string;
}

export interface AwsAlbListenerArgsDefaultActionFixedResponse {
  content_type: string;
  message_body?: string;
}

export interface AwsAlbListenerArgsDefaultActionForwardStickiness {
  duration: number;
  enabled?: boolean;
}

export interface AwsAlbListenerArgsDefaultActionForwardTargetGroup {
  arn: string;
  weight?: number;
}

export interface AwsAlbListenerArgsDefaultActionForward {
  stickiness?: AwsAlbListenerArgsDefaultActionForwardStickiness;
  target_group: AwsAlbListenerArgsDefaultActionForwardTargetGroup[];
}

export interface AwsAlbListenerArgsDefaultActionRedirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}

export interface AwsAlbListenerArgsDefaultAction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito?: AwsAlbListenerArgsDefaultActionAuthenticateCognito;
  authenticate_oidc?: AwsAlbListenerArgsDefaultActionAuthenticateOidc;
  fixed_response?: AwsAlbListenerArgsDefaultActionFixedResponse;
  forward?: AwsAlbListenerArgsDefaultActionForward;
  redirect?: AwsAlbListenerArgsDefaultActionRedirect;
}

export interface AwsAlbListenerArgsMutualAuthentication {
  ignore_client_certificate_expiry?: boolean;
  mode: string;
  trust_store_arn?: string;
}

export interface AwsAlbListenerArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsAlbListenerArgs {
  alpn_policy?: string;
  certificate_arn?: string;
  load_balancer_arn: string;
  port?: number;
  tags?: { [key: string]: string };
  default_action: AwsAlbListenerArgsDefaultAction[];
  mutual_authentication?: AwsAlbListenerArgsMutualAuthentication;
  timeouts?: AwsAlbListenerArgsTimeouts;
}

export class aws_alb_listener extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAlbListenerArgs) {
    const meta = {default_action:{isBlock:true,authenticate_cognito:{isBlock:true},authenticate_oidc:{isBlock:true},fixed_response:{isBlock:true},forward:{isBlock:true,stickiness:{isBlock:true},target_group:{isBlock:true}},redirect:{isBlock:true}},mutual_authentication:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_alb_listener", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get load_balancer_arn(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_arn`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get ssl_policy(): string {
    return `${this.resourceType}.${this.resourceName}.ssl_policy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tcp_idle_timeout_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.tcp_idle_timeout_seconds`;
  }
}
