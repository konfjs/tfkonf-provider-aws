import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCostoptimizationhubEnrollmentStatusArgs {
}

export class aws_costoptimizationhub_enrollment_status extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCostoptimizationhubEnrollmentStatusArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_costoptimizationhub_enrollment_status", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get include_member_accounts(): string {
    return `${this.resourceType}.${this.resourceName}.include_member_accounts`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
