import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldDrtAccessLogBucketAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsShieldDrtAccessLogBucketAssociationArgs {
  log_bucket: string;
  role_arn_association_id: string;
  timeouts?: AwsShieldDrtAccessLogBucketAssociationArgsTimeouts;
}

export class aws_shield_drt_access_log_bucket_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsShieldDrtAccessLogBucketAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_shield_drt_access_log_bucket_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.log_bucket`;
  }

  get role_arn_association_id(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn_association_id`;
  }
}
