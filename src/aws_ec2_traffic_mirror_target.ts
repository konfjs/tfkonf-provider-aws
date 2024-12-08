import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TrafficMirrorTargetArgs {
  description?: string;
  gateway_load_balancer_endpoint_id?: string;
  network_interface_id?: string;
  network_load_balancer_arn?: string;
  tags?: { [key: string]: string };
}

export class aws_ec2_traffic_mirror_target extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TrafficMirrorTargetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_traffic_mirror_target", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
