import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsServiceDescriptor {
  provider_name: string;
  service_name: string;
}

export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettingsStatmuxSettings {
}

export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettings {
  statmux_settings?: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettingsStatmuxSettings[];
}

export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettings {
  preferred_channel_pipeline: string;
  program_number: number;
  service_descriptor?: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsServiceDescriptor[];
  video_settings?: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettings[];
}

export interface AwsMedialiveMultiplexProgramArgs {
  multiplex_id: string;
  program_name: string;
  multiplex_program_settings?: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettings[];
}

export class aws_medialive_multiplex_program extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMedialiveMultiplexProgramArgs) {
    const meta = {multiplex_program_settings:{isBlock:true,service_descriptor:{isBlock:true},video_settings:{isBlock:true,statmux_settings:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_medialive_multiplex_program", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get multiplex_id(): string {
    return `${this.resourceType}.${this.resourceName}.multiplex_id`;
  }

  get program_name(): string {
    return `${this.resourceType}.${this.resourceName}.program_name`;
  }
}
