import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlMultiRegionAccessPointArgsDetailsPublicAccessBlock {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}

export interface AwsS3controlMultiRegionAccessPointArgsDetailsRegion {
  bucket: string;
}

export interface AwsS3controlMultiRegionAccessPointArgsDetails {
  name: string;
  public_access_block?: AwsS3controlMultiRegionAccessPointArgsDetailsPublicAccessBlock;
  region: AwsS3controlMultiRegionAccessPointArgsDetailsRegion[];
}

export interface AwsS3controlMultiRegionAccessPointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsS3controlMultiRegionAccessPointArgs {
  details: AwsS3controlMultiRegionAccessPointArgsDetails;
  timeouts?: AwsS3controlMultiRegionAccessPointArgsTimeouts;
}

export class aws_s3control_multi_region_access_point extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3controlMultiRegionAccessPointArgs) {
    const meta = {details:{isBlock:true,public_access_block:{isBlock:true},region:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3control_multi_region_access_point", resourceName);
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

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
