import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbTrustStoreRevocationArgsTimeouts {
  create?: string;
}

export interface AwsLbTrustStoreRevocationArgs {
  revocations_s3_bucket: string;
  revocations_s3_key: string;
  revocations_s3_object_version?: string;
  trust_store_arn: string;
  timeouts?: AwsLbTrustStoreRevocationArgsTimeouts;
}

export class aws_lb_trust_store_revocation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLbTrustStoreRevocationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lb_trust_store_revocation", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get revocation_id(): string {
    return `${this.resourceType}.${this.resourceName}.revocation_id`;
  }

  get revocations_s3_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.revocations_s3_bucket`;
  }

  get revocations_s3_key(): string {
    return `${this.resourceType}.${this.resourceName}.revocations_s3_key`;
  }

  get trust_store_arn(): string {
    return `${this.resourceType}.${this.resourceName}.trust_store_arn`;
  }
}
