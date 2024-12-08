import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubOrganizationConfigurationArgsOrganizationConfiguration {
  configuration_type: string;
}

export interface AwsSecurityhubOrganizationConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSecurityhubOrganizationConfigurationArgs {
  auto_enable: boolean;
  organization_configuration?: AwsSecurityhubOrganizationConfigurationArgsOrganizationConfiguration;
  timeouts?: AwsSecurityhubOrganizationConfigurationArgsTimeouts;
}

export class aws_securityhub_organization_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubOrganizationConfigurationArgs) {
    const meta = {organization_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_organization_configuration", resourceName);
  }

  get auto_enable(): string {
    return `${this.resourceType}.${this.resourceName}.auto_enable`;
  }

  get auto_enable_standards(): string {
    return `${this.resourceType}.${this.resourceName}.auto_enable_standards`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
