import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3controlMultiRegionAccessPointArgs {
  name: string;
}

export class data_aws_s3control_multi_region_access_point extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsS3controlMultiRegionAccessPointArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3control_multi_region_access_point", resourceName);
  }

  get account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_id`;
  }

  get alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.alias`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get public_access_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_access_block`;
  }

  get regions(): string {
    return `data.${this.resourceType}.${this.resourceName}.regions`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
