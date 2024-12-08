import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderContainerRecipeArgsComponentParameter {
  name: string;
  value: string;
}

export interface AwsImagebuilderContainerRecipeArgsComponent {
  component_arn: string;
  parameter?: AwsImagebuilderContainerRecipeArgsComponentParameter[];
}

export interface AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMappingEbs {
  delete_on_termination?: string;
  encrypted?: string;
  iops?: number;
  kms_key_id?: string;
  snapshot_id?: string;
  throughput?: number;
  volume_size?: number;
  volume_type?: string;
}

export interface AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMapping {
  device_name?: string;
  virtual_name?: string;
  ebs?: AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMappingEbs;
}

export interface AwsImagebuilderContainerRecipeArgsInstanceConfiguration {
  image?: string;
  block_device_mapping?: AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMapping[];
}

export interface AwsImagebuilderContainerRecipeArgsTargetRepository {
  repository_name: string;
  service: string;
}

export interface AwsImagebuilderContainerRecipeArgs {
  container_type: string;
  description?: string;
  dockerfile_template_uri?: string;
  kms_key_id?: string;
  name: string;
  parent_image: string;
  platform_override?: string;
  tags?: { [key: string]: string };
  version: string;
  working_directory?: string;
  component: AwsImagebuilderContainerRecipeArgsComponent[];
  instance_configuration?: AwsImagebuilderContainerRecipeArgsInstanceConfiguration;
  target_repository: AwsImagebuilderContainerRecipeArgsTargetRepository;
}

export class aws_imagebuilder_container_recipe extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsImagebuilderContainerRecipeArgs) {
    const meta = {component:{isBlock:true,parameter:{isBlock:true}},instance_configuration:{isBlock:true,block_device_mapping:{isBlock:true,ebs:{isBlock:true}}},target_repository:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_container_recipe", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get container_type(): string {
    return `${this.resourceType}.${this.resourceName}.container_type`;
  }

  get date_created(): string {
    return `${this.resourceType}.${this.resourceName}.date_created`;
  }

  get dockerfile_template_data(): string {
    return `${this.resourceType}.${this.resourceName}.dockerfile_template_data`;
  }

  get encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get parent_image(): string {
    return `${this.resourceType}.${this.resourceName}.parent_image`;
  }

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
