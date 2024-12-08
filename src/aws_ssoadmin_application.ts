import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminApplicationArgsPortalOptionsSignInOptions {
  application_url?: string;
  origin: string;
}

export interface AwsSsoadminApplicationArgsPortalOptions {
  sign_in_options?: AwsSsoadminApplicationArgsPortalOptionsSignInOptions[];
}

export interface AwsSsoadminApplicationArgs {
  application_provider_arn: string;
  client_token?: string;
  description?: string;
  instance_arn: string;
  name: string;
  tags?: { [key: string]: string };
  portal_options?: AwsSsoadminApplicationArgsPortalOptions[];
}

export class aws_ssoadmin_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminApplicationArgs) {
    const meta = {portal_options:{isBlock:true,sign_in_options:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_application", resourceName);
  }

  get application_account(): string {
    return `${this.resourceType}.${this.resourceName}.application_account`;
  }

  get application_arn(): string {
    return `${this.resourceType}.${this.resourceName}.application_arn`;
  }

  get application_provider_arn(): string {
    return `${this.resourceType}.${this.resourceName}.application_provider_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
