import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimeVoiceConnectorArgs {
  name: string;
  require_encryption: boolean;
  tags?: { [key: string]: string };
}

export class aws_chime_voice_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimeVoiceConnectorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_chime_voice_connector", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_region(): string {
    return `${this.resourceType}.${this.resourceName}.aws_region`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get outbound_host_name(): string {
    return `${this.resourceType}.${this.resourceName}.outbound_host_name`;
  }

  get require_encryption(): string {
    return `${this.resourceType}.${this.resourceName}.require_encryption`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
