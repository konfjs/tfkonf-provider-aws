import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigOrganizationConformancePackArgsInputParameter {
  parameter_name: string;
  parameter_value: string;
}

export interface AwsConfigOrganizationConformancePackArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConfigOrganizationConformancePackArgs {
  delivery_s3_bucket?: string;
  delivery_s3_key_prefix?: string;
  excluded_accounts?: string[];
  name: string;
  template_body?: string;
  template_s3_uri?: string;
  input_parameter?: AwsConfigOrganizationConformancePackArgsInputParameter[];
  timeouts?: AwsConfigOrganizationConformancePackArgsTimeouts;
}

export class aws_config_organization_conformance_pack extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigOrganizationConformancePackArgs) {
    const meta = {input_parameter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_organization_conformance_pack", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
