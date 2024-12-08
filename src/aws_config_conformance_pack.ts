import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigConformancePackArgsInputParameter {
  parameter_name: string;
  parameter_value: string;
}

export interface AwsConfigConformancePackArgs {
  delivery_s3_bucket?: string;
  delivery_s3_key_prefix?: string;
  name: string;
  template_body?: string;
  template_s3_uri?: string;
  input_parameter?: AwsConfigConformancePackArgsInputParameter[];
}

export class aws_config_conformance_pack extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigConformancePackArgs) {
    const meta = {input_parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_conformance_pack", resourceName);
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
