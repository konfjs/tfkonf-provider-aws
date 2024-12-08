import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTargetVirtualService {
  virtual_service_name: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTargetVirtualService;
}

export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteAction {
  target: AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTarget;
}

export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteMatch {
  port?: number;
  service_name: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecGrpcRoute {
  action: AwsAppmeshGatewayRouteArgsSpecGrpcRouteAction;
  match: AwsAppmeshGatewayRouteArgsSpecGrpcRouteMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewriteHostname {
  default_target_hostname: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePath {
  exact: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePrefix {
  default_prefix?: string;
  value?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewrite {
  hostname?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewriteHostname;
  path?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePath;
  prefix?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePrefix;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTargetVirtualService {
  virtual_service_name: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTargetVirtualService;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteAction {
  rewrite?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewrite;
  target: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTarget;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatchRange {
  end: number;
  start: number;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatchRange;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeader {
  invert?: boolean;
  name: string;
  match?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHostname {
  exact?: string;
  suffix?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchPath {
  exact?: string;
  regex?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameterMatch {
  exact?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameter {
  name: string;
  match?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameterMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatch {
  port?: number;
  prefix?: string;
  header?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeader[];
  hostname?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHostname;
  path?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchPath;
  query_parameter?: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameter[];
}

export interface AwsAppmeshGatewayRouteArgsSpecHttp2Route {
  action: AwsAppmeshGatewayRouteArgsSpecHttp2RouteAction;
  match: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewriteHostname {
  default_target_hostname: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePath {
  exact: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePrefix {
  default_prefix?: string;
  value?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewrite {
  hostname?: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewriteHostname;
  path?: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePath;
  prefix?: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePrefix;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTargetVirtualService {
  virtual_service_name: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTargetVirtualService;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteAction {
  rewrite?: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewrite;
  target: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTarget;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatchRange {
  end: number;
  start: number;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatchRange;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeader {
  invert?: boolean;
  name: string;
  match?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHostname {
  exact?: string;
  suffix?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchPath {
  exact?: string;
  regex?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameterMatch {
  exact?: string;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameter {
  name: string;
  match?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameterMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatch {
  port?: number;
  prefix?: string;
  header?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeader[];
  hostname?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHostname;
  path?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchPath;
  query_parameter?: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameter[];
}

export interface AwsAppmeshGatewayRouteArgsSpecHttpRoute {
  action: AwsAppmeshGatewayRouteArgsSpecHttpRouteAction;
  match: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatch;
}

export interface AwsAppmeshGatewayRouteArgsSpec {
  priority?: number;
  grpc_route?: AwsAppmeshGatewayRouteArgsSpecGrpcRoute;
  http2_route?: AwsAppmeshGatewayRouteArgsSpecHttp2Route;
  http_route?: AwsAppmeshGatewayRouteArgsSpecHttpRoute;
}

export interface AwsAppmeshGatewayRouteArgs {
  mesh_name: string;
  name: string;
  tags?: { [key: string]: string };
  virtual_gateway_name: string;
  spec: AwsAppmeshGatewayRouteArgsSpec;
}

export class aws_appmesh_gateway_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppmeshGatewayRouteArgs) {
    const meta = {spec:{isBlock:true,grpc_route:{isBlock:true,action:{isBlock:true,target:{isBlock:true,virtual_service:{isBlock:true}}},match:{isBlock:true}},http2_route:{isBlock:true,action:{isBlock:true,rewrite:{isBlock:true,hostname:{isBlock:true},path:{isBlock:true},prefix:{isBlock:true}},target:{isBlock:true,virtual_service:{isBlock:true}}},match:{isBlock:true,header:{isBlock:true,match:{isBlock:true,range:{isBlock:true}}},hostname:{isBlock:true},path:{isBlock:true},query_parameter:{isBlock:true,match:{isBlock:true}}}},http_route:{isBlock:true,action:{isBlock:true,rewrite:{isBlock:true,hostname:{isBlock:true},path:{isBlock:true},prefix:{isBlock:true}},target:{isBlock:true,virtual_service:{isBlock:true}}},match:{isBlock:true,header:{isBlock:true,match:{isBlock:true,range:{isBlock:true}}},hostname:{isBlock:true},path:{isBlock:true},query_parameter:{isBlock:true,match:{isBlock:true}}}}}};
    super(terraformConfig, "resource", args, meta, "aws_appmesh_gateway_route", resourceName);
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

  get virtual_gateway_name(): string {
    return `${this.resourceType}.${this.resourceName}.virtual_gateway_name`;
  }
}
