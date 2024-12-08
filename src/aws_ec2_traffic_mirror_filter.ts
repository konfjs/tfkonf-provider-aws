import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TrafficMirrorFilterArgs {
  description?: string;
  network_services?: string[];
  tags?: { [key: string]: string };
}

export class aws_ec2_traffic_mirror_filter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TrafficMirrorFilterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_traffic_mirror_filter", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
