import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TrafficMirrorSessionArgs {
  description?: string;
  network_interface_id: string;
  session_number: number;
  tags?: { [key: string]: string };
  traffic_mirror_filter_id: string;
  traffic_mirror_target_id: string;
}

export class aws_ec2_traffic_mirror_session extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TrafficMirrorSessionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_traffic_mirror_session", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get packet_length(): string {
    return `${this.resourceType}.${this.resourceName}.packet_length`;
  }

  get session_number(): string {
    return `${this.resourceType}.${this.resourceName}.session_number`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get traffic_mirror_filter_id(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_mirror_filter_id`;
  }

  get traffic_mirror_target_id(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_mirror_target_id`;
  }

  get virtual_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.virtual_network_id`;
  }
}
