import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketAclArgsAccessControlPolicyGrantGrantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}

export interface AwsS3BucketAclArgsAccessControlPolicyGrant {
  permission: string;
  grantee?: AwsS3BucketAclArgsAccessControlPolicyGrantGrantee;
}

export interface AwsS3BucketAclArgsAccessControlPolicyOwner {
  id: string;
}

export interface AwsS3BucketAclArgsAccessControlPolicy {
  grant?: AwsS3BucketAclArgsAccessControlPolicyGrant[];
  owner: AwsS3BucketAclArgsAccessControlPolicyOwner;
}

export interface AwsS3BucketAclArgs {
  acl?: string;
  bucket: string;
  expected_bucket_owner?: string;
  access_control_policy?: AwsS3BucketAclArgsAccessControlPolicy;
}

export class aws_s3_bucket_acl extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketAclArgs) {
    const meta = {access_control_policy:{isBlock:true,grant:{isBlock:true,grantee:{isBlock:true}},owner:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_acl", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
