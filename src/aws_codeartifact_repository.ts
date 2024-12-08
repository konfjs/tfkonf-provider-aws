import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodeartifactRepositoryArgsExternalConnections {
  external_connection_name: string;
}

export interface AwsCodeartifactRepositoryArgsUpstream {
  repository_name: string;
}

export interface AwsCodeartifactRepositoryArgs {
  description?: string;
  domain: string;
  repository: string;
  tags?: { [key: string]: string };
  external_connections?: AwsCodeartifactRepositoryArgsExternalConnections;
  upstream?: AwsCodeartifactRepositoryArgsUpstream[];
}

export class aws_codeartifact_repository extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodeartifactRepositoryArgs) {
    const meta = {external_connections:{isBlock:true},upstream:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codeartifact_repository", resourceName);
  }

  get administrator_account(): string {
    return `${this.resourceType}.${this.resourceName}.administrator_account`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get domain_owner(): string {
    return `${this.resourceType}.${this.resourceName}.domain_owner`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
