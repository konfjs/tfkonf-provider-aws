import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmParameterArgs {
  allowed_pattern?: string;
  description?: string;
  name: string;
  overwrite?: boolean;
  tags?: { [key: string]: string };
  type: string;
}

export class aws_ssm_parameter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmParameterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssm_parameter", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_type(): string {
    return `${this.resourceType}.${this.resourceName}.data_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get insecure_value(): string {
    return `${this.resourceType}.${this.resourceName}.insecure_value`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tier(): string {
    return `${this.resourceType}.${this.resourceName}.tier`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
