import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmTestGridProjectArgsVpcConfig {
  security_group_ids: string[];
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsDevicefarmTestGridProjectArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  vpc_config?: AwsDevicefarmTestGridProjectArgsVpcConfig;
}

export class aws_devicefarm_test_grid_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDevicefarmTestGridProjectArgs) {
    const meta = {vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_devicefarm_test_grid_project", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
