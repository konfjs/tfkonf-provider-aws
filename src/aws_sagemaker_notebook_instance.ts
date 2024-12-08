import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerNotebookInstanceArgsInstanceMetadataServiceConfiguration {
}

export interface AwsSagemakerNotebookInstanceArgs {
  accelerator_types?: string[];
  additional_code_repositories?: string[];
  default_code_repository?: string;
  direct_internet_access?: string;
  instance_type: string;
  kms_key_id?: string;
  lifecycle_config_name?: string;
  name: string;
  role_arn: string;
  root_access?: string;
  subnet_id?: string;
  tags?: { [key: string]: string };
  volume_size?: number;
  instance_metadata_service_configuration?: AwsSagemakerNotebookInstanceArgsInstanceMetadataServiceConfiguration;
}

export class aws_sagemaker_notebook_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerNotebookInstanceArgs) {
    const meta = {instance_metadata_service_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_notebook_instance", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get platform_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.platform_identifier`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
