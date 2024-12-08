import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigExtensionAssociationArgs {
  extension_arn: string;
  parameters?: { [key: string]: string };
  resource_arn: string;
}

export class aws_appconfig_extension_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppconfigExtensionAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_extension_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get extension_arn(): string {
    return `${this.resourceType}.${this.resourceName}.extension_arn`;
  }

  get extension_version(): string {
    return `${this.resourceType}.${this.resourceName}.extension_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
