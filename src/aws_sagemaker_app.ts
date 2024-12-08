import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerAppArgsResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}

export interface AwsSagemakerAppArgs {
  app_name: string;
  app_type: string;
  domain_id: string;
  space_name?: string;
  tags?: { [key: string]: string };
  user_profile_name?: string;
  resource_spec?: AwsSagemakerAppArgsResourceSpec;
}

export class aws_sagemaker_app extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerAppArgs) {
    const meta = {resource_spec:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_app", resourceName);
  }

  get app_name(): string {
    return `${this.resourceType}.${this.resourceName}.app_name`;
  }

  get app_type(): string {
    return `${this.resourceType}.${this.resourceName}.app_type`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.domain_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
