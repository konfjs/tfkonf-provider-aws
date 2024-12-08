import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldProtectionHealthCheckAssociationArgs {
  health_check_arn: string;
  shield_protection_id: string;
}

export class aws_shield_protection_health_check_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsShieldProtectionHealthCheckAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_shield_protection_health_check_association", resourceName);
  }

  get health_check_arn(): string {
    return `${this.resourceType}.${this.resourceName}.health_check_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get shield_protection_id(): string {
    return `${this.resourceType}.${this.resourceName}.shield_protection_id`;
  }
}
