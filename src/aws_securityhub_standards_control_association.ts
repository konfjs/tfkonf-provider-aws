import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubStandardsControlAssociationArgs {
  association_status: string;
  security_control_id: string;
  standards_arn: string;
  updated_reason?: string;
}

export class aws_securityhub_standards_control_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubStandardsControlAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_standards_control_association", resourceName);
  }

  get association_status(): string {
    return `${this.resourceType}.${this.resourceName}.association_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_control_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_control_id`;
  }

  get standards_arn(): string {
    return `${this.resourceType}.${this.resourceName}.standards_arn`;
  }
}
