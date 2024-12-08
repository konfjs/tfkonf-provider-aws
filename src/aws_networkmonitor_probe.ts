import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmonitorProbeArgs {
  destination: string;
  destination_port?: number;
  monitor_name: string;
  protocol: string;
  source_arn: string;
  tags?: { [key: string]: string };
}

export class aws_networkmonitor_probe extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmonitorProbeArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_networkmonitor_probe", resourceName);
  }

  get address_family(): string {
    return `${this.resourceType}.${this.resourceName}.address_family`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get monitor_name(): string {
    return `${this.resourceType}.${this.resourceName}.monitor_name`;
  }

  get packet_size(): string {
    return `${this.resourceType}.${this.resourceName}.packet_size`;
  }

  get probe_id(): string {
    return `${this.resourceType}.${this.resourceName}.probe_id`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get source_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
