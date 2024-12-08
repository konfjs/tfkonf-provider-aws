import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudformationTypeArgsLoggingConfig {
  log_group_name: string;
  log_role_arn: string;
}

export interface AwsCloudformationTypeArgs {
  execution_role_arn?: string;
  schema_handler_package: string;
  type_name: string;
  logging_config?: AwsCloudformationTypeArgsLoggingConfig;
}

export class aws_cloudformation_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudformationTypeArgs) {
    const meta = {logging_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudformation_type", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_version_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_version_id`;
  }

  get deprecated_status(): string {
    return `${this.resourceType}.${this.resourceName}.deprecated_status`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get documentation_url(): string {
    return `${this.resourceType}.${this.resourceName}.documentation_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get is_default_version(): string {
    return `${this.resourceType}.${this.resourceName}.is_default_version`;
  }

  get provisioning_type(): string {
    return `${this.resourceType}.${this.resourceName}.provisioning_type`;
  }

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }

  get schema_handler_package(): string {
    return `${this.resourceType}.${this.resourceName}.schema_handler_package`;
  }

  get source_url(): string {
    return `${this.resourceType}.${this.resourceName}.source_url`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get type_arn(): string {
    return `${this.resourceType}.${this.resourceName}.type_arn`;
  }

  get type_name(): string {
    return `${this.resourceType}.${this.resourceName}.type_name`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }

  get visibility(): string {
    return `${this.resourceType}.${this.resourceName}.visibility`;
  }
}
