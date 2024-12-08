import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrRepositoryArgsEncryptionConfiguration {
  encryption_type?: string;
}

export interface AwsEcrRepositoryArgsImageScanningConfiguration {
  scan_on_push: boolean;
}

export interface AwsEcrRepositoryArgsTimeouts {
  delete?: string;
}

export interface AwsEcrRepositoryArgs {
  force_delete?: boolean;
  image_tag_mutability?: string;
  name: string;
  tags?: { [key: string]: string };
  encryption_configuration?: AwsEcrRepositoryArgsEncryptionConfiguration[];
  image_scanning_configuration?: AwsEcrRepositoryArgsImageScanningConfiguration;
  timeouts?: AwsEcrRepositoryArgsTimeouts;
}

export class aws_ecr_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEcrRepositoryArgs) {
    const meta = {encryption_configuration:{isBlock:true},image_scanning_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecr_repository", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get repository_url(): string {
    return `${this.resourceType}.${this.resourceName}.repository_url`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
