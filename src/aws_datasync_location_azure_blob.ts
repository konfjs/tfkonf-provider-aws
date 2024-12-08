import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationAzureBlobArgsSasConfiguration {
  token: string;
}

export interface AwsDatasyncLocationAzureBlobArgs {
  access_tier?: string;
  agent_arns: string[];
  authentication_type: string;
  blob_type?: string;
  container_url: string;
  tags?: { [key: string]: string };
  sas_configuration?: AwsDatasyncLocationAzureBlobArgsSasConfiguration;
}

export class aws_datasync_location_azure_blob extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncLocationAzureBlobArgs) {
    const meta = {sas_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_azure_blob", resourceName);
  }

  get agent_arns(): string {
    return `${this.resourceType}.${this.resourceName}.agent_arns`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_type(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_type`;
  }

  get container_url(): string {
    return `${this.resourceType}.${this.resourceName}.container_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subdirectory(): string {
    return `${this.resourceType}.${this.resourceName}.subdirectory`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }
}
