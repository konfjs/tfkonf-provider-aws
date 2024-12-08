import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldProtectionGroupArgs {
  aggregation: string;
  members?: string[];
  pattern: string;
  protection_group_id: string;
  resource_type?: string;
  tags?: { [key: string]: string };
}

export class aws_shield_protection_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsShieldProtectionGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_shield_protection_group", resourceName);
  }

  get aggregation(): string {
    return `${this.resourceType}.${this.resourceName}.aggregation`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pattern(): string {
    return `${this.resourceType}.${this.resourceName}.pattern`;
  }

  get protection_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.protection_group_arn`;
  }

  get protection_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.protection_group_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
