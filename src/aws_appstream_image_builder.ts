import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamImageBuilderArgsAccessEndpoint {
  endpoint_type: string;
}

export interface AwsAppstreamImageBuilderArgsDomainJoinInfo {
  directory_name?: string;
  organizational_unit_distinguished_name?: string;
}

export interface AwsAppstreamImageBuilderArgsVpcConfig {
}

export interface AwsAppstreamImageBuilderArgs {
  instance_type: string;
  name: string;
  tags?: { [key: string]: string };
  access_endpoint?: AwsAppstreamImageBuilderArgsAccessEndpoint[];
  domain_join_info?: AwsAppstreamImageBuilderArgsDomainJoinInfo;
  vpc_config?: AwsAppstreamImageBuilderArgsVpcConfig;
}

export class aws_appstream_image_builder extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppstreamImageBuilderArgs) {
    const meta = {access_endpoint:{isBlock:true},domain_join_info:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appstream_image_builder", resourceName);
  }

  get appstream_agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.appstream_agent_version`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get enable_default_internet_access(): string {
    return `${this.resourceType}.${this.resourceName}.enable_default_internet_access`;
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_arn(): string {
    return `${this.resourceType}.${this.resourceName}.image_arn`;
  }

  get image_name(): string {
    return `${this.resourceType}.${this.resourceName}.image_name`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
