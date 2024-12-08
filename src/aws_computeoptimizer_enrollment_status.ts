import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsComputeoptimizerEnrollmentStatusArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsComputeoptimizerEnrollmentStatusArgs {
  status: string;
  timeouts?: AwsComputeoptimizerEnrollmentStatusArgsTimeouts;
}

export class aws_computeoptimizer_enrollment_status extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsComputeoptimizerEnrollmentStatusArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_computeoptimizer_enrollment_status", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get include_member_accounts(): string {
    return `${this.resourceType}.${this.resourceName}.include_member_accounts`;
  }

  get number_of_member_accounts_opted_in(): string {
    return `${this.resourceType}.${this.resourceName}.number_of_member_accounts_opted_in`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
