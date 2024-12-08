import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorTerminationCredentialsArgsCredentials {
  password: string;
  username: string;
}

export interface AwsChimeVoiceConnectorTerminationCredentialsArgs {
  voice_connector_id: string;
  credentials: AwsChimeVoiceConnectorTerminationCredentialsArgsCredentials[];
}

export class aws_chime_voice_connector_termination_credentials extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimeVoiceConnectorTerminationCredentialsArgs) {
    const meta = {credentials:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector_termination_credentials", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get voice_connector_id(): string {
    return `${this.resourceType}.${this.resourceName}.voice_connector_id`;
  }
}
