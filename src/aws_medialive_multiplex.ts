import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMedialiveMultiplexArgsMultiplexSettings {
  transport_stream_bitrate: number;
  transport_stream_id: number;
}

export interface AwsMedialiveMultiplexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMedialiveMultiplexArgs {
  availability_zones: string[];
  name: string;
  start_multiplex?: boolean;
  tags?: { [key: string]: string };
  multiplex_settings?: AwsMedialiveMultiplexArgsMultiplexSettings;
  timeouts?: AwsMedialiveMultiplexArgsTimeouts;
}

export class aws_medialive_multiplex extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMedialiveMultiplexArgs) {
    const meta = {multiplex_settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_medialive_multiplex", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
