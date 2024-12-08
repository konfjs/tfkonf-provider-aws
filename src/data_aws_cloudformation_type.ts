import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudformationTypeArgs {
  version_id?: string;
}

export class data_aws_cloudformation_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudformationTypeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudformation_type", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_version_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_version_id`;
  }

  get deprecated_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.deprecated_status`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get documentation_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.documentation_url`;
  }

  get execution_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get is_default_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_default_version`;
  }

  get logging_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_config`;
  }

  get provisioning_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.provisioning_type`;
  }

  get schema(): string {
    return `data.${this.resourceType}.${this.resourceName}.schema`;
  }

  get source_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_url`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get type_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.type_arn`;
  }

  get type_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.type_name`;
  }

  get visibility(): string {
    return `data.${this.resourceType}.${this.resourceName}.visibility`;
  }
}
