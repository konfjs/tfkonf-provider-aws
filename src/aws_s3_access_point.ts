import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3AccessPointArgsPublicAccessBlockConfiguration {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}

export interface AwsS3AccessPointArgsVpcConfiguration {
  vpc_id: string;
}

export interface AwsS3AccessPointArgs {
  bucket: string;
  name: string;
  public_access_block_configuration?: AwsS3AccessPointArgsPublicAccessBlockConfiguration;
  vpc_configuration?: AwsS3AccessPointArgsVpcConfiguration;
}

export class aws_s3_access_point extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3AccessPointArgs) {
    const meta = {public_access_block_configuration:{isBlock:true},vpc_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_access_point", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get bucket_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_account_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get has_public_access_policy(): string {
    return `${this.resourceType}.${this.resourceName}.has_public_access_policy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network_origin(): string {
    return `${this.resourceType}.${this.resourceName}.network_origin`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
