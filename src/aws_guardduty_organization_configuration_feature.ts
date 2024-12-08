import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyOrganizationConfigurationFeatureArgsAdditionalConfiguration {
  auto_enable: string;
  name: string;
}

export interface AwsGuarddutyOrganizationConfigurationFeatureArgs {
  auto_enable: string;
  detector_id: string;
  name: string;
  additional_configuration?: AwsGuarddutyOrganizationConfigurationFeatureArgsAdditionalConfiguration[];
}

export class aws_guardduty_organization_configuration_feature extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGuarddutyOrganizationConfigurationFeatureArgs) {
    const meta = {additional_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_organization_configuration_feature", resourceName);
  }

  get auto_enable(): string {
    return `${this.resourceType}.${this.resourceName}.auto_enable`;
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
