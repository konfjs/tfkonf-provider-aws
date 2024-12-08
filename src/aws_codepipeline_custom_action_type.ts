import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodepipelineCustomActionTypeArgsConfigurationProperty {
  description?: string;
  key: boolean;
  name: string;
  queryable?: boolean;
  required: boolean;
  secret: boolean;
  type?: string;
}

export interface AwsCodepipelineCustomActionTypeArgsInputArtifactDetails {
  maximum_count: number;
  minimum_count: number;
}

export interface AwsCodepipelineCustomActionTypeArgsOutputArtifactDetails {
  maximum_count: number;
  minimum_count: number;
}

export interface AwsCodepipelineCustomActionTypeArgsSettings {
  entity_url_template?: string;
  execution_url_template?: string;
  revision_url_template?: string;
  third_party_configuration_url?: string;
}

export interface AwsCodepipelineCustomActionTypeArgs {
  category: string;
  provider_name: string;
  tags?: { [key: string]: string };
  version: string;
  configuration_property?: AwsCodepipelineCustomActionTypeArgsConfigurationProperty[];
  input_artifact_details: AwsCodepipelineCustomActionTypeArgsInputArtifactDetails;
  output_artifact_details: AwsCodepipelineCustomActionTypeArgsOutputArtifactDetails;
  settings?: AwsCodepipelineCustomActionTypeArgsSettings;
}

export class aws_codepipeline_custom_action_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodepipelineCustomActionTypeArgs) {
    const meta = {configuration_property:{isBlock:true},input_artifact_details:{isBlock:true},output_artifact_details:{isBlock:true},settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codepipeline_custom_action_type", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get category(): string {
    return `${this.resourceType}.${this.resourceName}.category`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
