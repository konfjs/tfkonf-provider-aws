import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchPackageArgsPackageSource {
  s3_bucket_name: string;
  s3_key: string;
}

export interface AwsOpensearchPackageArgs {
  package_description?: string;
  package_name: string;
  package_type: string;
  package_source: AwsOpensearchPackageArgsPackageSource;
}

export class aws_opensearch_package extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchPackageArgs) {
    const meta = {package_source:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_package", resourceName);
  }

  get available_package_version(): string {
    return `${this.resourceType}.${this.resourceName}.available_package_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get package_id(): string {
    return `${this.resourceType}.${this.resourceName}.package_id`;
  }

  get package_name(): string {
    return `${this.resourceType}.${this.resourceName}.package_name`;
  }

  get package_type(): string {
    return `${this.resourceType}.${this.resourceName}.package_type`;
  }
}
