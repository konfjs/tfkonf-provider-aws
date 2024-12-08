import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlMultiRegionAccessPointPolicyArgsDetails {
  name: string;
  policy: string;
}

export interface AwsS3controlMultiRegionAccessPointPolicyArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsS3controlMultiRegionAccessPointPolicyArgs {
  details: AwsS3controlMultiRegionAccessPointPolicyArgsDetails;
  timeouts?: AwsS3controlMultiRegionAccessPointPolicyArgsTimeouts;
}

export class aws_s3control_multi_region_access_point_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3controlMultiRegionAccessPointPolicyArgs) {
    const meta = {details:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3control_multi_region_access_point_policy", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get established(): string {
    return `${this.resourceType}.${this.resourceName}.established`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get proposed(): string {
    return `${this.resourceType}.${this.resourceName}.proposed`;
  }
}
