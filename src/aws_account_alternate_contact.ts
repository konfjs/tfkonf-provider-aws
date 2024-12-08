import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAccountAlternateContactArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAccountAlternateContactArgs {
  account_id?: string;
  alternate_contact_type: string;
  email_address: string;
  name: string;
  phone_number: string;
  title: string;
  timeouts?: AwsAccountAlternateContactArgsTimeouts;
}

export class aws_account_alternate_contact extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAccountAlternateContactArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_account_alternate_contact", resourceName);
  }

  get alternate_contact_type(): string {
    return `${this.resourceType}.${this.resourceName}.alternate_contact_type`;
  }

  get email_address(): string {
    return `${this.resourceType}.${this.resourceName}.email_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get phone_number(): string {
    return `${this.resourceType}.${this.resourceName}.phone_number`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }
}
