import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorStreamingArgsMediaInsightsConfiguration {
  configuration_arn?: string;
  disabled?: boolean;
}

export interface AwsChimeVoiceConnectorStreamingArgs {
  data_retention: number;
  disabled?: boolean;
  streaming_notification_targets?: string[];
  voice_connector_id: string;
  media_insights_configuration?: AwsChimeVoiceConnectorStreamingArgsMediaInsightsConfiguration;
}

export class aws_chime_voice_connector_streaming extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimeVoiceConnectorStreamingArgs) {
    const meta = {media_insights_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector_streaming", resourceName);
  }

  get data_retention(): string {
    return `${this.resourceType}.${this.resourceName}.data_retention`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get voice_connector_id(): string {
    return `${this.resourceType}.${this.resourceName}.voice_connector_id`;
  }
}
