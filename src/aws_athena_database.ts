import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAthenaDatabaseArgsAclConfiguration {
  s3_acl_option: string;
}

export interface AwsAthenaDatabaseArgsEncryptionConfiguration {
  encryption_option: string;
  kms_key?: string;
}

export interface AwsAthenaDatabaseArgs {
  bucket?: string;
  comment?: string;
  expected_bucket_owner?: string;
  force_destroy?: boolean;
  name: string;
  properties?: { [key: string]: string };
  acl_configuration?: AwsAthenaDatabaseArgsAclConfiguration;
  encryption_configuration?: AwsAthenaDatabaseArgsEncryptionConfiguration;
}

export class aws_athena_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAthenaDatabaseArgs) {
    const meta = {acl_configuration:{isBlock:true},encryption_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_athena_database", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
