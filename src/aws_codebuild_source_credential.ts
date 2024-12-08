import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodebuildSourceCredentialArgs {
  auth_type: string;
  server_type: string;
  token: string;
  user_name?: string;
}

export class aws_codebuild_source_credential extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodebuildSourceCredentialArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codebuild_source_credential", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get server_type(): string {
    return `${this.resourceType}.${this.resourceName}.server_type`;
  }

  get token(): string {
    return `${this.resourceType}.${this.resourceName}.token`;
  }
}
