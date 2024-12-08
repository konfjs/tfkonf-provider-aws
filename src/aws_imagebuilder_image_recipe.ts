import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderImageRecipeArgsBlockDeviceMappingEbs {
  delete_on_termination?: string;
  encrypted?: string;
  iops?: number;
  kms_key_id?: string;
  snapshot_id?: string;
  throughput?: number;
  volume_size?: number;
  volume_type?: string;
}

export interface AwsImagebuilderImageRecipeArgsBlockDeviceMapping {
  device_name?: string;
  virtual_name?: string;
  ebs?: AwsImagebuilderImageRecipeArgsBlockDeviceMappingEbs;
}

export interface AwsImagebuilderImageRecipeArgsComponentParameter {
  name: string;
  value: string;
}

export interface AwsImagebuilderImageRecipeArgsComponent {
  component_arn: string;
  parameter?: AwsImagebuilderImageRecipeArgsComponentParameter[];
}

export interface AwsImagebuilderImageRecipeArgsSystemsManagerAgent {
  uninstall_after_build: boolean;
}

export interface AwsImagebuilderImageRecipeArgs {
  description?: string;
  name: string;
  parent_image: string;
  tags?: { [key: string]: string };
  version: string;
  working_directory?: string;
  block_device_mapping?: AwsImagebuilderImageRecipeArgsBlockDeviceMapping[];
  component: AwsImagebuilderImageRecipeArgsComponent[];
  systems_manager_agent?: AwsImagebuilderImageRecipeArgsSystemsManagerAgent;
}

export class aws_imagebuilder_image_recipe extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsImagebuilderImageRecipeArgs) {
    const meta = {block_device_mapping:{isBlock:true,ebs:{isBlock:true}},component:{isBlock:true,parameter:{isBlock:true}},systems_manager_agent:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_image_recipe", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get date_created(): string {
    return `${this.resourceType}.${this.resourceName}.date_created`;
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

  get user_data_base64(): string {
    return `${this.resourceType}.${this.resourceName}.user_data_base64`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
