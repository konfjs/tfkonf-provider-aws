import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightIamPolicyAssignmentArgsIdentities {
  group?: string[];
  user?: string[];
}

export interface AwsQuicksightIamPolicyAssignmentArgs {
  assignment_name: string;
  assignment_status: string;
  policy_arn?: string;
  identities?: AwsQuicksightIamPolicyAssignmentArgsIdentities[];
}

export class aws_quicksight_iam_policy_assignment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightIamPolicyAssignmentArgs) {
    const meta = {identities:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_iam_policy_assignment", resourceName);
  }

  get assignment_id(): string {
    return `${this.resourceType}.${this.resourceName}.assignment_id`;
  }

  get assignment_name(): string {
    return `${this.resourceType}.${this.resourceName}.assignment_name`;
  }

  get assignment_status(): string {
    return `${this.resourceType}.${this.resourceName}.assignment_status`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get namespace(): string {
    return `${this.resourceType}.${this.resourceName}.namespace`;
  }
}
