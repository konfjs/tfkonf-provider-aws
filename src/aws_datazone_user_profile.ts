import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneUserProfileArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsDatazoneUserProfileArgs {
  domain_identifier: string;
  user_identifier: string;
  timeouts?: AwsDatazoneUserProfileArgsTimeouts;
}

export class aws_datazone_user_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatazoneUserProfileArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_user_profile", resourceName);
  }

  get details(): string {
    return `${this.resourceType}.${this.resourceName}.details`;
  }

  get domain_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.domain_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get user_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.user_identifier`;
  }

  get user_type(): string {
    return `${this.resourceType}.${this.resourceName}.user_type`;
  }
}
