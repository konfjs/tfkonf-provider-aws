import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodeartifactRepositoryEndpointArgs {
  domain: string;
  format: string;
  repository: string;
}

export class data_aws_codeartifact_repository_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCodeartifactRepositoryEndpointArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codeartifact_repository_endpoint", resourceName);
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get domain_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_owner`;
  }

  get format(): string {
    return `data.${this.resourceType}.${this.resourceName}.format`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get repository(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository`;
  }

  get repository_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_endpoint`;
  }
}
