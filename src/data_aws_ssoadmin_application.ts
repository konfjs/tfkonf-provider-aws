import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminApplicationArgsPortalOptionsSignInOptions {
}

export interface DataAwsSsoadminApplicationArgsPortalOptions {
  sign_in_options?: DataAwsSsoadminApplicationArgsPortalOptionsSignInOptions[];
}

export interface DataAwsSsoadminApplicationArgs {
  application_arn: string;
  portal_options?: DataAwsSsoadminApplicationArgsPortalOptions[];
}

export class data_aws_ssoadmin_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsoadminApplicationArgs) {
    const meta = {portal_options:{isBlock:true,sign_in_options:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_application", resourceName);
  }

  get application_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_account`;
  }

  get application_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_arn`;
  }

  get application_provider_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_provider_arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
