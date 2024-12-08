import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecurityhubStandardsControlAssociationsArgs {
  security_control_id: string;
}

export class data_aws_securityhub_standards_control_associations extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSecurityhubStandardsControlAssociationsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_securityhub_standards_control_associations", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get security_control_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_control_id`;
  }

  get standards_control_associations(): string {
    return `data.${this.resourceType}.${this.resourceName}.standards_control_associations`;
  }
}
