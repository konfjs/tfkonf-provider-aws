import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53RecordArgsAlias {
  evaluate_target_health: boolean;
  name: string;
  zone_id: string;
}

export interface AwsRoute53RecordArgsCidrRoutingPolicy {
  collection_id: string;
  location_name: string;
}

export interface AwsRoute53RecordArgsFailoverRoutingPolicy {
  type: string;
}

export interface AwsRoute53RecordArgsGeolocationRoutingPolicy {
  continent?: string;
  country?: string;
  subdivision?: string;
}

export interface AwsRoute53RecordArgsGeoproximityRoutingPolicyCoordinates {
  latitude: string;
  longitude: string;
}

export interface AwsRoute53RecordArgsGeoproximityRoutingPolicy {
  aws_region?: string;
  bias?: number;
  local_zone_group?: string;
  coordinates?: AwsRoute53RecordArgsGeoproximityRoutingPolicyCoordinates[];
}

export interface AwsRoute53RecordArgsLatencyRoutingPolicy {
  region: string;
}

export interface AwsRoute53RecordArgsWeightedRoutingPolicy {
  weight: number;
}

export interface AwsRoute53RecordArgs {
  health_check_id?: string;
  multivalue_answer_routing_policy?: boolean;
  name: string;
  records?: string[];
  set_identifier?: string;
  ttl?: number;
  type: string;
  zone_id: string;
  alias?: AwsRoute53RecordArgsAlias;
  cidr_routing_policy?: AwsRoute53RecordArgsCidrRoutingPolicy;
  failover_routing_policy?: AwsRoute53RecordArgsFailoverRoutingPolicy;
  geolocation_routing_policy?: AwsRoute53RecordArgsGeolocationRoutingPolicy;
  geoproximity_routing_policy?: AwsRoute53RecordArgsGeoproximityRoutingPolicy;
  latency_routing_policy?: AwsRoute53RecordArgsLatencyRoutingPolicy;
  weighted_routing_policy?: AwsRoute53RecordArgsWeightedRoutingPolicy;
}

export class aws_route53_record extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53RecordArgs) {
    const meta = {alias:{isBlock:true},cidr_routing_policy:{isBlock:true},failover_routing_policy:{isBlock:true},geolocation_routing_policy:{isBlock:true},geoproximity_routing_policy:{isBlock:true,coordinates:{isBlock:true}},latency_routing_policy:{isBlock:true},weighted_routing_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53_record", resourceName);
  }

  get allow_overwrite(): string {
    return `${this.resourceType}.${this.resourceName}.allow_overwrite`;
  }

  get fqdn(): string {
    return `${this.resourceType}.${this.resourceName}.fqdn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
