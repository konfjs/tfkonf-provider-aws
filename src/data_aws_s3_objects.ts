import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3ObjectsArgs {
  bucket: string;
  delimiter?: string;
  encoding_type?: string;
  fetch_owner?: boolean;
  max_keys?: number;
  prefix?: string;
  request_payer?: string;
  start_after?: string;
}

export class data_aws_s3_objects extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsS3ObjectsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_objects", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get common_prefixes(): string {
    return `data.${this.resourceType}.${this.resourceName}.common_prefixes`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.keys`;
  }

  get owners(): string {
    return `data.${this.resourceType}.${this.resourceName}.owners`;
  }

  get request_charged(): string {
    return `data.${this.resourceType}.${this.resourceName}.request_charged`;
  }
}
