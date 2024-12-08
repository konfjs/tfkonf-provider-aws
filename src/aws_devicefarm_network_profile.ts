import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmNetworkProfileArgs {
  description?: string;
  downlink_bandwidth_bits?: number;
  downlink_delay_ms?: number;
  downlink_jitter_ms?: number;
  downlink_loss_percent?: number;
  name: string;
  project_arn: string;
  tags?: { [key: string]: string };
  type?: string;
  uplink_bandwidth_bits?: number;
  uplink_delay_ms?: number;
  uplink_jitter_ms?: number;
  uplink_loss_percent?: number;
}

export class aws_devicefarm_network_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevicefarmNetworkProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_devicefarm_network_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_arn(): string {
    return `${this.resourceType}.${this.resourceName}.project_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
