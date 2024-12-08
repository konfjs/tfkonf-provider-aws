import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminApplicationAccessScopeArgs {
  application_arn: string;
  authorized_targets?: string[];
  scope: string;
}

export class aws_ssoadmin_application_access_scope extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsoadminApplicationAccessScopeArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_application_access_scope", resourceName);
  }

  get application_arn(): string {
    return `${this.resourceType}.${this.resourceName}.application_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get scope(): string {
    return `${this.resourceType}.${this.resourceName}.scope`;
  }
}
