import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbTrustStoreArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsLbTrustStoreArgs {
  ca_certificates_bundle_s3_bucket: string;
  ca_certificates_bundle_s3_key: string;
  ca_certificates_bundle_s3_object_version?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsLbTrustStoreArgsTimeouts;
}

export class aws_lb_trust_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLbTrustStoreArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lb_trust_store", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_suffix(): string {
    return `${this.resourceType}.${this.resourceName}.arn_suffix`;
  }

  get ca_certificates_bundle_s3_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificates_bundle_s3_bucket`;
  }

  get ca_certificates_bundle_s3_key(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificates_bundle_s3_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
