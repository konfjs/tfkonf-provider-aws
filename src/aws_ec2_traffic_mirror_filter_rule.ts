import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TrafficMirrorFilterRuleArgsDestinationPortRange {
  from_port?: number;
  to_port?: number;
}

export interface AwsEc2TrafficMirrorFilterRuleArgsSourcePortRange {
  from_port?: number;
  to_port?: number;
}

export interface AwsEc2TrafficMirrorFilterRuleArgs {
  description?: string;
  destination_cidr_block: string;
  protocol?: number;
  rule_action: string;
  rule_number: number;
  source_cidr_block: string;
  traffic_direction: string;
  traffic_mirror_filter_id: string;
  destination_port_range?: AwsEc2TrafficMirrorFilterRuleArgsDestinationPortRange;
  source_port_range?: AwsEc2TrafficMirrorFilterRuleArgsSourcePortRange;
}

export class aws_ec2_traffic_mirror_filter_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TrafficMirrorFilterRuleArgs) {
    const meta = {destination_port_range:{isBlock:true},source_port_range:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_traffic_mirror_filter_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.destination_cidr_block`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rule_action(): string {
    return `${this.resourceType}.${this.resourceName}.rule_action`;
  }

  get rule_number(): string {
    return `${this.resourceType}.${this.resourceName}.rule_number`;
  }

  get source_cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.source_cidr_block`;
  }

  get traffic_direction(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_direction`;
  }

  get traffic_mirror_filter_id(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_mirror_filter_id`;
  }
}
