import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWorkspacesImageArgs {
  image_id: string;
}

export class data_aws_workspaces_image extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsWorkspacesImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_workspaces_image", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get operating_system_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.operating_system_type`;
  }

  get required_tenancy(): string {
    return `data.${this.resourceType}.${this.resourceName}.required_tenancy`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }
}
