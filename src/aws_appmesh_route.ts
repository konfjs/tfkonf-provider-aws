import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppmeshRouteArgsSpecGrpcRouteActionWeightedTarget {
  virtual_node: string;
  weight: number;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteAction {
  weighted_target: AwsAppmeshRouteArgsSpecGrpcRouteActionWeightedTarget[];
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteMatchMetadataMatchRange {
  end: number;
  start: number;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteMatchMetadataMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range?: AwsAppmeshRouteArgsSpecGrpcRouteMatchMetadataMatchRange;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteMatchMetadata {
  invert?: boolean;
  name: string;
  match?: AwsAppmeshRouteArgsSpecGrpcRouteMatchMetadataMatch;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteMatch {
  method_name?: string;
  port?: number;
  prefix?: string;
  service_name?: string;
  metadata?: AwsAppmeshRouteArgsSpecGrpcRouteMatchMetadata[];
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteRetryPolicyPerRetryTimeout {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteRetryPolicy {
  grpc_retry_events?: string[];
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: AwsAppmeshRouteArgsSpecGrpcRouteRetryPolicyPerRetryTimeout;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteTimeoutIdle {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteTimeoutPerRequest {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecGrpcRouteTimeout {
  idle?: AwsAppmeshRouteArgsSpecGrpcRouteTimeoutIdle;
  per_request?: AwsAppmeshRouteArgsSpecGrpcRouteTimeoutPerRequest;
}

export interface AwsAppmeshRouteArgsSpecGrpcRoute {
  action: AwsAppmeshRouteArgsSpecGrpcRouteAction;
  match?: AwsAppmeshRouteArgsSpecGrpcRouteMatch;
  retry_policy?: AwsAppmeshRouteArgsSpecGrpcRouteRetryPolicy;
  timeout?: AwsAppmeshRouteArgsSpecGrpcRouteTimeout;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteActionWeightedTarget {
  virtual_node: string;
  weight: number;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteAction {
  weighted_target: AwsAppmeshRouteArgsSpecHttp2RouteActionWeightedTarget[];
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatchHeaderMatchRange {
  end: number;
  start: number;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatchHeaderMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range?: AwsAppmeshRouteArgsSpecHttp2RouteMatchHeaderMatchRange;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatchHeader {
  invert?: boolean;
  name: string;
  match?: AwsAppmeshRouteArgsSpecHttp2RouteMatchHeaderMatch;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatchPath {
  exact?: string;
  regex?: string;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatchQueryParameterMatch {
  exact?: string;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatchQueryParameter {
  name: string;
  match?: AwsAppmeshRouteArgsSpecHttp2RouteMatchQueryParameterMatch;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteMatch {
  method?: string;
  port?: number;
  prefix?: string;
  scheme?: string;
  header?: AwsAppmeshRouteArgsSpecHttp2RouteMatchHeader[];
  path?: AwsAppmeshRouteArgsSpecHttp2RouteMatchPath;
  query_parameter?: AwsAppmeshRouteArgsSpecHttp2RouteMatchQueryParameter[];
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteRetryPolicyPerRetryTimeout {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteRetryPolicy {
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: AwsAppmeshRouteArgsSpecHttp2RouteRetryPolicyPerRetryTimeout;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteTimeoutIdle {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteTimeoutPerRequest {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecHttp2RouteTimeout {
  idle?: AwsAppmeshRouteArgsSpecHttp2RouteTimeoutIdle;
  per_request?: AwsAppmeshRouteArgsSpecHttp2RouteTimeoutPerRequest;
}

export interface AwsAppmeshRouteArgsSpecHttp2Route {
  action: AwsAppmeshRouteArgsSpecHttp2RouteAction;
  match: AwsAppmeshRouteArgsSpecHttp2RouteMatch;
  retry_policy?: AwsAppmeshRouteArgsSpecHttp2RouteRetryPolicy;
  timeout?: AwsAppmeshRouteArgsSpecHttp2RouteTimeout;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteActionWeightedTarget {
  virtual_node: string;
  weight: number;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteAction {
  weighted_target: AwsAppmeshRouteArgsSpecHttpRouteActionWeightedTarget[];
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatchHeaderMatchRange {
  end: number;
  start: number;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatchHeaderMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range?: AwsAppmeshRouteArgsSpecHttpRouteMatchHeaderMatchRange;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatchHeader {
  invert?: boolean;
  name: string;
  match?: AwsAppmeshRouteArgsSpecHttpRouteMatchHeaderMatch;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatchPath {
  exact?: string;
  regex?: string;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatchQueryParameterMatch {
  exact?: string;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatchQueryParameter {
  name: string;
  match?: AwsAppmeshRouteArgsSpecHttpRouteMatchQueryParameterMatch;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteMatch {
  method?: string;
  port?: number;
  prefix?: string;
  scheme?: string;
  header?: AwsAppmeshRouteArgsSpecHttpRouteMatchHeader[];
  path?: AwsAppmeshRouteArgsSpecHttpRouteMatchPath;
  query_parameter?: AwsAppmeshRouteArgsSpecHttpRouteMatchQueryParameter[];
}

export interface AwsAppmeshRouteArgsSpecHttpRouteRetryPolicyPerRetryTimeout {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteRetryPolicy {
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: AwsAppmeshRouteArgsSpecHttpRouteRetryPolicyPerRetryTimeout;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteTimeoutIdle {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteTimeoutPerRequest {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecHttpRouteTimeout {
  idle?: AwsAppmeshRouteArgsSpecHttpRouteTimeoutIdle;
  per_request?: AwsAppmeshRouteArgsSpecHttpRouteTimeoutPerRequest;
}

export interface AwsAppmeshRouteArgsSpecHttpRoute {
  action: AwsAppmeshRouteArgsSpecHttpRouteAction;
  match: AwsAppmeshRouteArgsSpecHttpRouteMatch;
  retry_policy?: AwsAppmeshRouteArgsSpecHttpRouteRetryPolicy;
  timeout?: AwsAppmeshRouteArgsSpecHttpRouteTimeout;
}

export interface AwsAppmeshRouteArgsSpecTcpRouteActionWeightedTarget {
  virtual_node: string;
  weight: number;
}

export interface AwsAppmeshRouteArgsSpecTcpRouteAction {
  weighted_target: AwsAppmeshRouteArgsSpecTcpRouteActionWeightedTarget[];
}

export interface AwsAppmeshRouteArgsSpecTcpRouteMatch {
  port?: number;
}

export interface AwsAppmeshRouteArgsSpecTcpRouteTimeoutIdle {
  unit: string;
  value: number;
}

export interface AwsAppmeshRouteArgsSpecTcpRouteTimeout {
  idle?: AwsAppmeshRouteArgsSpecTcpRouteTimeoutIdle;
}

export interface AwsAppmeshRouteArgsSpecTcpRoute {
  action: AwsAppmeshRouteArgsSpecTcpRouteAction;
  match?: AwsAppmeshRouteArgsSpecTcpRouteMatch;
  timeout?: AwsAppmeshRouteArgsSpecTcpRouteTimeout;
}

export interface AwsAppmeshRouteArgsSpec {
  priority?: number;
  grpc_route?: AwsAppmeshRouteArgsSpecGrpcRoute;
  http2_route?: AwsAppmeshRouteArgsSpecHttp2Route;
  http_route?: AwsAppmeshRouteArgsSpecHttpRoute;
  tcp_route?: AwsAppmeshRouteArgsSpecTcpRoute;
}

export interface AwsAppmeshRouteArgs {
  mesh_name: string;
  name: string;
  tags?: { [key: string]: string };
  virtual_router_name: string;
  spec: AwsAppmeshRouteArgsSpec;
}

export class aws_appmesh_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppmeshRouteArgs) {
    const meta = {spec:{isBlock:true,grpc_route:{isBlock:true,action:{isBlock:true,weighted_target:{isBlock:true}},match:{isBlock:true,metadata:{isBlock:true,match:{isBlock:true,range:{isBlock:true}}}},retry_policy:{isBlock:true,per_retry_timeout:{isBlock:true}},timeout:{isBlock:true,idle:{isBlock:true},per_request:{isBlock:true}}},http2_route:{isBlock:true,action:{isBlock:true,weighted_target:{isBlock:true}},match:{isBlock:true,header:{isBlock:true,match:{isBlock:true,range:{isBlock:true}}},path:{isBlock:true},query_parameter:{isBlock:true,match:{isBlock:true}}},retry_policy:{isBlock:true,per_retry_timeout:{isBlock:true}},timeout:{isBlock:true,idle:{isBlock:true},per_request:{isBlock:true}}},http_route:{isBlock:true,action:{isBlock:true,weighted_target:{isBlock:true}},match:{isBlock:true,header:{isBlock:true,match:{isBlock:true,range:{isBlock:true}}},path:{isBlock:true},query_parameter:{isBlock:true,match:{isBlock:true}}},retry_policy:{isBlock:true,per_retry_timeout:{isBlock:true}},timeout:{isBlock:true,idle:{isBlock:true},per_request:{isBlock:true}}},tcp_route:{isBlock:true,action:{isBlock:true,weighted_target:{isBlock:true}},match:{isBlock:true},timeout:{isBlock:true,idle:{isBlock:true}}}}};
    super(terraformConfig, "resource", args, meta, "aws_appmesh_route", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get mesh_name(): string {
    return `${this.resourceType}.${this.resourceName}.mesh_name`;
  }

  get mesh_owner(): string {
    return `${this.resourceType}.${this.resourceName}.mesh_owner`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_owner(): string {
    return `${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get virtual_router_name(): string {
    return `${this.resourceType}.${this.resourceName}.virtual_router_name`;
  }
}
