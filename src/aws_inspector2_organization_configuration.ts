import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspector2OrganizationConfigurationArgsAutoEnable {
  ec2: boolean;
  ecr: boolean;
  lambda?: boolean;
  lambda_code?: boolean;
}

export interface AwsInspector2OrganizationConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsInspector2OrganizationConfigurationArgs {
  auto_enable: AwsInspector2OrganizationConfigurationArgsAutoEnable;
  timeouts?: AwsInspector2OrganizationConfigurationArgsTimeouts;
}

export class aws_inspector2_organization_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsInspector2OrganizationConfigurationArgs) {
    const meta = {auto_enable:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_inspector2_organization_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_account_limit_reached(): string {
    return `${this.resourceType}.${this.resourceName}.max_account_limit_reached`;
  }
}
