import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlAccessGrantArgsAccessGrantsLocationConfiguration {
  s3_sub_prefix?: string;
}

export interface AwsS3controlAccessGrantArgsGrantee {
  grantee_identifier: string;
  grantee_type: string;
}

export interface AwsS3controlAccessGrantArgs {
  access_grants_location_id: string;
  permission: string;
  s3_prefix_type?: string;
  tags?: { [key: string]: string };
  access_grants_location_configuration?: AwsS3controlAccessGrantArgsAccessGrantsLocationConfiguration[];
  grantee?: AwsS3controlAccessGrantArgsGrantee[];
}

export class aws_s3control_access_grant extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantArgs) {
    const meta = {access_grants_location_configuration:{isBlock:true},grantee:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3control_access_grant", resourceName);
  }

  get access_grant_arn(): string {
    return `${this.resourceType}.${this.resourceName}.access_grant_arn`;
  }

  get access_grant_id(): string {
    return `${this.resourceType}.${this.resourceName}.access_grant_id`;
  }

  get access_grants_location_id(): string {
    return `${this.resourceType}.${this.resourceName}.access_grants_location_id`;
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get grant_scope(): string {
    return `${this.resourceType}.${this.resourceName}.grant_scope`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get permission(): string {
    return `${this.resourceType}.${this.resourceName}.permission`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
