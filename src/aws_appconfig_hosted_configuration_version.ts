import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigHostedConfigurationVersionArgs {
  application_id: string;
  configuration_profile_id: string;
  content: string;
  content_type: string;
  description?: string;
}

export class aws_appconfig_hosted_configuration_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppconfigHostedConfigurationVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_hosted_configuration_version", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_profile_id`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get content_type(): string {
    return `${this.resourceType}.${this.resourceName}.content_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get version_number(): string {
    return `${this.resourceType}.${this.resourceName}.version_number`;
  }
}
