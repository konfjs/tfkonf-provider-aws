import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimesdkvoiceGlobalSettingsArgsVoiceConnector {
  cdr_bucket?: string;
}

export interface AwsChimesdkvoiceGlobalSettingsArgs {
  voice_connector: AwsChimesdkvoiceGlobalSettingsArgsVoiceConnector;
}

export class aws_chimesdkvoice_global_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimesdkvoiceGlobalSettingsArgs) {
    const meta = {voice_connector:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chimesdkvoice_global_settings", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
