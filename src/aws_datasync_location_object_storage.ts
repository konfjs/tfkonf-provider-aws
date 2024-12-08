import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationObjectStorageArgs {
  access_key?: string;
  agent_arns: string[];
  bucket_name: string;
  secret_key?: string;
  server_certificate?: string;
  server_hostname: string;
  server_port?: number;
  server_protocol?: string;
  tags?: { [key: string]: string };
}

export class aws_datasync_location_object_storage extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncLocationObjectStorageArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_object_storage", resourceName);
  }

  get agent_arns(): string {
    return `${this.resourceType}.${this.resourceName}.agent_arns`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get server_hostname(): string {
    return `${this.resourceType}.${this.resourceName}.server_hostname`;
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
