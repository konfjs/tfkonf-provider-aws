import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrpublicRepositoryArgsCatalogData {
  about_text?: string;
  architectures?: string[];
  description?: string;
  operating_systems?: string[];
  usage_text?: string;
}

export interface AwsEcrpublicRepositoryArgsTimeouts {
  delete?: string;
}

export interface AwsEcrpublicRepositoryArgs {
  force_destroy?: boolean;
  repository_name: string;
  tags?: { [key: string]: string };
  catalog_data?: AwsEcrpublicRepositoryArgsCatalogData;
  timeouts?: AwsEcrpublicRepositoryArgsTimeouts;
}

export class aws_ecrpublic_repository extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcrpublicRepositoryArgs) {
    const meta = {catalog_data:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecrpublic_repository", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get repository_name(): string {
    return `${this.resourceType}.${this.resourceName}.repository_name`;
  }

  get repository_uri(): string {
    return `${this.resourceType}.${this.resourceName}.repository_uri`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
