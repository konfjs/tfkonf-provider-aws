import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodepipelineArgsArtifactStoreEncryptionKey {
  id: string;
  type: string;
}

export interface AwsCodepipelineArgsArtifactStore {
  location: string;
  region?: string;
  type: string;
  encryption_key?: AwsCodepipelineArgsArtifactStoreEncryptionKey;
}

export interface AwsCodepipelineArgsStageAction {
  category: string;
  configuration?: { [key: string]: string };
  input_artifacts?: string[];
  name: string;
  namespace?: string;
  output_artifacts?: string[];
  owner: string;
  provider: string;
  role_arn?: string;
  timeout_in_minutes?: number;
  version: string;
}

export interface AwsCodepipelineArgsStage {
  name: string;
  action: AwsCodepipelineArgsStageAction[];
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPullRequestBranches {
  excludes?: string[];
  includes?: string[];
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPullRequestFilePaths {
  excludes?: string[];
  includes?: string[];
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPullRequest {
  events?: string[];
  branches?: AwsCodepipelineArgsTriggerGitConfigurationPullRequestBranches;
  file_paths?: AwsCodepipelineArgsTriggerGitConfigurationPullRequestFilePaths;
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPushBranches {
  excludes?: string[];
  includes?: string[];
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPushFilePaths {
  excludes?: string[];
  includes?: string[];
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPushTags {
  excludes?: string[];
  includes?: string[];
}

export interface AwsCodepipelineArgsTriggerGitConfigurationPush {
  branches?: AwsCodepipelineArgsTriggerGitConfigurationPushBranches;
  file_paths?: AwsCodepipelineArgsTriggerGitConfigurationPushFilePaths;
  tags?: AwsCodepipelineArgsTriggerGitConfigurationPushTags;
}

export interface AwsCodepipelineArgsTriggerGitConfiguration {
  source_action_name: string;
  pull_request?: AwsCodepipelineArgsTriggerGitConfigurationPullRequest[];
  push?: AwsCodepipelineArgsTriggerGitConfigurationPush[];
}

export interface AwsCodepipelineArgsTrigger {
  provider_type: string;
  git_configuration: AwsCodepipelineArgsTriggerGitConfiguration;
}

export interface AwsCodepipelineArgsVariable {
  default_value?: string;
  description?: string;
  name: string;
}

export interface AwsCodepipelineArgs {
  execution_mode?: string;
  name: string;
  pipeline_type?: string;
  role_arn: string;
  tags?: { [key: string]: string };
  artifact_store: AwsCodepipelineArgsArtifactStore[];
  stage: AwsCodepipelineArgsStage[];
  trigger?: AwsCodepipelineArgsTrigger[];
  variable?: AwsCodepipelineArgsVariable[];
}

export class aws_codepipeline extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodepipelineArgs) {
    const meta = {artifact_store:{isBlock:true,encryption_key:{isBlock:true}},stage:{isBlock:true,action:{isBlock:true}},trigger:{isBlock:true,git_configuration:{isBlock:true,pull_request:{isBlock:true,branches:{isBlock:true},file_paths:{isBlock:true}},push:{isBlock:true,branches:{isBlock:true},file_paths:{isBlock:true},tags:{isBlock:true}}}},variable:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codepipeline", resourceName);
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

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
