import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorLoggingArgs {
  enable_media_metric_logs?: boolean;
  enable_sip_logs?: boolean;
  voice_connector_id: string;
}

export class aws_chime_voice_connector_logging extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimeVoiceConnectorLoggingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector_logging", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get voice_connector_id(): string {
    return `${this.resourceType}.${this.resourceName}.voice_connector_id`;
  }
}
