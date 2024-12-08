import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodegurureviewerRepositoryAssociationArgsKmsKeyDetails {
  encryption_option?: string;
  kms_key_id?: string;
}

export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryBitbucket {
  connection_arn: string;
  name: string;
  owner: string;
}

export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryCodecommit {
  name: string;
}

export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryGithubEnterpriseServer {
  connection_arn: string;
  name: string;
  owner: string;
}

export interface AwsCodegurureviewerRepositoryAssociationArgsRepositoryS3Bucket {
  bucket_name: string;
  name: string;
}

export interface AwsCodegurureviewerRepositoryAssociationArgsRepository {
  bitbucket?: AwsCodegurureviewerRepositoryAssociationArgsRepositoryBitbucket;
  codecommit?: AwsCodegurureviewerRepositoryAssociationArgsRepositoryCodecommit;
  github_enterprise_server?: AwsCodegurureviewerRepositoryAssociationArgsRepositoryGithubEnterpriseServer;
  s3_bucket?: AwsCodegurureviewerRepositoryAssociationArgsRepositoryS3Bucket;
}

export interface AwsCodegurureviewerRepositoryAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCodegurureviewerRepositoryAssociationArgs {
  tags?: { [key: string]: string };
  kms_key_details?: AwsCodegurureviewerRepositoryAssociationArgsKmsKeyDetails;
  repository: AwsCodegurureviewerRepositoryAssociationArgsRepository;
  timeouts?: AwsCodegurureviewerRepositoryAssociationArgsTimeouts;
}

export class aws_codegurureviewer_repository_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodegurureviewerRepositoryAssociationArgs) {
    const meta = {kms_key_details:{isBlock:true},repository:{isBlock:true,bitbucket:{isBlock:true},codecommit:{isBlock:true},github_enterprise_server:{isBlock:true},s3_bucket:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codegurureviewer_repository_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get connection_arn(): string {
    return `${this.resourceType}.${this.resourceName}.connection_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get provider_type(): string {
    return `${this.resourceType}.${this.resourceName}.provider_type`;
  }

  get s3_repository_details(): string {
    return `${this.resourceType}.${this.resourceName}.s3_repository_details`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_reason(): string {
    return `${this.resourceType}.${this.resourceName}.state_reason`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
