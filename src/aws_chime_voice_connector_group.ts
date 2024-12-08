import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorGroupArgsConnector {
  priority: number;
  voice_connector_id: string;
}

export interface AwsChimeVoiceConnectorGroupArgs {
  name: string;
  connector?: AwsChimeVoiceConnectorGroupArgsConnector[];
}

export class aws_chime_voice_connector_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorGroupArgs) {
    const meta = {connector:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
