import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIvsChannelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsIvsChannelArgs {
  tags?: { [key: string]: string };
  timeouts?: AwsIvsChannelArgsTimeouts;
}

export class aws_ivs_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIvsChannelArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ivs_channel", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authorized(): string {
    return `${this.resourceType}.${this.resourceName}.authorized`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingest_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.ingest_endpoint`;
  }

  get latency_mode(): string {
    return `${this.resourceType}.${this.resourceName}.latency_mode`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get playback_url(): string {
    return `${this.resourceType}.${this.resourceName}.playback_url`;
  }

  get recording_configuration_arn(): string {
    return `${this.resourceType}.${this.resourceName}.recording_configuration_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
