import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsShieldProtectionArgs {
}

export class data_aws_shield_protection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsShieldProtectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_shield_protection", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get protection_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.protection_arn`;
  }

  get protection_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.protection_id`;
  }

  get resource_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
