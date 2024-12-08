import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppstreamImageArgs {
  most_recent?: boolean;
  name_regex?: string;
  type?: string;
}

export class data_aws_appstream_image extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAppstreamImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appstream_image", resourceName);
  }

  get applications(): string {
    return `data.${this.resourceType}.${this.resourceName}.applications`;
  }

  get appstream_agent_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.appstream_agent_version`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_image_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_image_arn`;
  }

  get created_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get image_builder_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_builder_name`;
  }

  get image_builder_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_builder_supported`;
  }

  get image_permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_permissions`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform`;
  }

  get public_base_image_released_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_base_image_released_date`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get state_change_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.state_change_reason`;
  }
}
