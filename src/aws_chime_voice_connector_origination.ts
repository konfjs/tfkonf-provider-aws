import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorOriginationArgsRoute {
  host: string;
  port?: number;
  priority: number;
  protocol: string;
  weight: number;
}

export interface AwsChimeVoiceConnectorOriginationArgs {
  disabled?: boolean;
  voice_connector_id: string;
  route: AwsChimeVoiceConnectorOriginationArgsRoute[];
}

export class aws_chime_voice_connector_origination extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimeVoiceConnectorOriginationArgs) {
    const meta = {route:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector_origination", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get voice_connector_id(): string {
    return `${this.resourceType}.${this.resourceName}.voice_connector_id`;
  }
}
