import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorTerminationArgs {
  calling_regions: string[];
  cidr_allow_list: string[];
  cps_limit?: number;
  default_phone_number?: string;
  disabled?: boolean;
  voice_connector_id: string;
}

export class aws_chime_voice_connector_termination extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorTerminationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector_termination", resourceName);
  }

  get calling_regions(): string {
    return `${this.resourceType}.${this.resourceName}.calling_regions`;
  }

  get cidr_allow_list(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_allow_list`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get voice_connector_id(): string {
    return `${this.resourceType}.${this.resourceName}.voice_connector_id`;
  }
}
